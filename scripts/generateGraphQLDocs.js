const fs = require("fs");

// DEFAULTS
const OUTPUT = process.env.GEN_GRAPHQL_DOCS_OUTPUT || "./docs/graphql-queries.md";
const SCHEMA = process.env.GEN_GRAPHQL_DOCS_SCHEMA || "./static/graphql/schema.graphql";
const ENDPOINT = process.env.GEN_GRAPHQL_DOCS_ENDPOINT || "https://kb.devel.cat.argo.grnet.gr/graphql";
const LIMIT = process.env.GEN_GRAPHQL_DOCS_LIMIT || 3;


// Extract Types from Schema
function extractTypes(schema) {
    const typeDefs = {};
    const typeRegex = /type\s+(\w+)\s*{([\s\S]*?)}/g;
    let match;
    while ((match = typeRegex.exec(schema)) !== null) {
        const typeName = match[1];
        typeDefs[typeName] = match[2]
            .split("\n")
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('"'))
            .map(field => field.split(":")[0].trim());
    }
    return typeDefs;
}

// Extract Queries from Schema
function extractQueries(schema) {
    const queries = [];
    const queryRegex = /"([^"]*)"\s*([\w]+)(?:\s*\(([^)]*)\))?\s*:\s*([\w\[\]!]+)/g;
    const matchBlock = schema.match(/type Query {([\s\S]*?)}/);

    if (!matchBlock) {
        console.error("⚠️ No Query block found in schema.");
        return [];
    }

    let match;
    while ((match = queryRegex.exec(matchBlock[1])) !== null) {
        const name = match[2];
        const description = match[1] || "";
        const returnType = match[4].replace(/[!\[\]]/g, ""); // Clean return type
        const parameters = (match[3] || "")
            .split("\n")
            .map(p => p.trim().replace(/"/g, ""))
            .filter(p => p.includes(":"))
            .map(p => {
                const parts = p.split(":").map(part => part.trim());
                let defaultValue = parts.slice(1).join(":").trim();
                if (defaultValue.includes("=")) {
                    defaultValue = defaultValue.split("=")[1].trim();
                }
                return {
                    name: parts[0],
                    type: parts[1]?.split("=")[0].trim() || "",
                    defaultValue: defaultValue || null,
                };
            });

        queries.push({ name, description, parameters, returnType });
    }
    return queries;
}

// Fetch Example Response from GraphQL API
async function fetchExampleResponse(query, typeDefinitions) {

    let variables = generateQueryVariables(query.parameters);
    let subfields = typeDefinitions[query.returnType] || [];



    let queryText = `
query {
  ${query.name}${query.parameters.length ? `(${query.parameters.map(p =>
        `${p.name}: ${JSON.stringify(variables[p.name])}`
    ).join(", ")})` : ""} 
  ${subfields.length ? `{ ${subfields.join(" ")} }` : ""}
}`.trim();

    try {
        const response = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: queryText }),
        });



        const json = await response.json();
        return json
    } catch (error) {
        console.error(`❌ Error fetching example for ${query.name}:`, error);
        return {};
    }
}

// Generate Default Query Variables
function generateQueryVariables(parameters) {
    let variables = {};
    parameters.forEach(param => {
        variables[param.name] = param.defaultValue ??
            (param.type.includes("Int") ? 1 :
                param.type.includes("Boolean") ? true :
                    param.name.toLowerCase() === "id" ? "pid_graph:Sample_Value" : "sample_value");
    });
    return variables;
}

// Generate MarkDown
async function generateMarkdown() {
    const schema = fs.readFileSync(SCHEMA, "utf8");
    console.log(`📐 GraphQL Schema used: \x1b[34m${SCHEMA}\x1b[0m \n`);
    const typeDefinitions = extractTypes(schema);
    const queries = extractQueries(schema);

    let markdownContent = `---
id: graphql-queries
title: GraphQL API
sidebar_label: GraphQL API
sidebar_position: 4
---

# GraphQL API Documentation

This section describes the available **GraphQL API queries**, their usage, required parameters, and example responses.\n\n`;

    markdownContent += `## API Calls\n\n`;
    markdownContent += `| Query Name | Description |\n`;
    markdownContent += `|------------|-------------|\n`;

    queries.forEach(({ name, description }) => {
        markdownContent += `| **\[${name}](#post-${name.toLowerCase()})\** | ${description || "_No description available_"} |\n`;
    });

    markdownContent += `\n---\n`;
    console.log(`🚀 Examples from GraphQL API: \x1b[32m\x1b[4m${ENDPOINT}\x1b[0m \n`);
    console.log(`✂️ Trim example results to: \x1b[35m${LIMIT}\x1b[0m \n`);
    for (const query of queries) {

        query.exampleRes = await fetchExampleResponse(query, typeDefinitions);

        let formattedParams = query.parameters.length
            ? query.parameters.map((p) => `${p.name}: ${p.type}`).join(", ")
            : "";

        let subfields = typeDefinitions[query.returnType]?.map(f => `    ${f}`).join("\n") || "";



        // check example array and if its too big trim it
        if (query.exampleRes?.data && query.exampleRes.data[query.name] instanceof Array) {
            query.exampleRes.data[query.name] = query.exampleRes.data[query.name].filter((item, index) => index < LIMIT);
        }


        markdownContent += `\n## **[POST]: ${query.name}**\n`;
        markdownContent += `#### Description\n> 📌 ${query.description || `Fetches a \`${query.returnType}\`.`}\n\n`;

        markdownContent += `### **Input**\n\`\`\`\nquery ${query.name}(${formattedParams})\n\`\`\`\n\n`;
        markdownContent += `#### Headers\n\`\`\`json\n{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer YOUR_ACCESS_TOKEN"\n}\n\`\`\`\n\n`;

        markdownContent += `#### **Query**\n\`\`\`graphql\nquery {\n  ${query.name}(${formattedParams}) {\n${subfields}\n  }\n}\n\`\`\`\n\n`;

        markdownContent += `### **Response**\n`;
        markdownContent += `#### **Headers**\n\`\`\`\nStatus: 200 OK\n\`\`\`\n\n`;
        markdownContent += query.exampleRes.data  
                            ? `#### **Response body:**\n\n\`\`\`json\n${JSON.stringify(query.exampleRes, null, 4)}\n\`\`\`\n\n`
                            : "#### **Response body:**\n\n\`\`\`json\n Example not provided \n\`\`\`\n\n";
        markdownContent += "---\n";
    }

    fs.writeFileSync(OUTPUT, markdownContent, "utf8");
    console.log(`✅ GraphQL API Documentation updated at: \x1b[34m${OUTPUT}\x1b[0m \n`);
}

// Run Markdown Generation
generateMarkdown();
