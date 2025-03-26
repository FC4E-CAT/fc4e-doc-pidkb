const fs = require("fs");

// DEFAULTS
const OUTPUT_DIR = process.env.GEN_GRAPHQL_DOCS_OUTPUT || "./docs/graphql";
const SCHEMA = process.env.GEN_GRAPHQL_DOCS_SCHEMA || "./static/graphql/schema.graphql";
const ENDPOINT = process.env.GEN_GRAPHQL_DOCS_ENDPOINT || "https://kb.devel.cat.argo.grnet.gr/graphql";
//const ENDPOINT = process.env.GEN_GRAPHQL_DOCS_ENDPOINT || "http://localhost:8080/graphql";
const LIMIT = process.env.GEN_GRAPHQL_DOCS_LIMIT || 3;


// Extract Types from Schema
function extractTypes(schema) {
    const types = [];
    const typeRegex = /type\s+(\w+)\s*{([\s\S]*?)}/g;

    let match;
    while ((match = typeRegex.exec(schema)) !== null) {
        const name = match[1];  // Type name (e.g., 'Standard', 'Authority')
        const fieldsStr = match[2];  // Fields definition
        const parameters = [];
        const fieldDescriptions = {};

        // Split the fields and descriptions
        let fieldLines = fieldsStr
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);

        let currentDescription = null;

        fieldLines.forEach(line => {
            if (line.startsWith('"')) {
                currentDescription = line.replace(/"/g, "").trim();  // Extract the description
            } else {
                // This is the field definition line
                const parts = line.split(":");
                if (parts.length >= 2) {
                    const fieldName = parts[0].trim();
                    const fieldType = parts[1].trim();

                    parameters.push({
                        name: fieldName,
                        type: fieldType,
                        description: currentDescription || "No description"
                    });

                    fieldDescriptions[fieldName] = currentDescription || "No description";
                    currentDescription = null;
                }
            }
        });
        types.push({name, parameters, descriptions: fieldDescriptions});
    }
    return types;
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

// Extract Categories from Queries description
function extractCategories(queries) {
    const categories = new Set();

    // Regular expression to extract category from description (e.g., "[view] Fetches a paginated list")
    const categoryRegex = /^\[(\w+)\]/;

    queries.forEach(query => {
        const categoryMatch = query.description.match(categoryRegex);
        if (categoryMatch) {
            categories.add(categoryMatch[1].toLowerCase());
        } else {
            console.log(`⚠️ Query "${query.name}" has no category match.`);
        }
    });

    return [...categories];
}

// Fetch Example Response from GraphQL API
async function fetchExampleResponse(query, typeDefinitions) {

    let variables = generateQueryVariables(query.parameters);

    let subfields = typeDefinitions
        .find(type => type.name === query.returnType).parameters
        .map(param => param.name);


    // Construct the query with subfields
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
        let value = param.defaultValue ??
            (param.type.includes("Int") ? 1 :
                param.type.includes("Boolean") ? true :
                    param.name.toLowerCase() === "id" ? "pid_graph:Sample_Value" : "sample_value");

        if (typeof value === 'string') { value = value.replace(/,+$/, '').trim(); }
        variables[param.name] = value;

    });
    return variables;
}

// Generate MarkDown
async function generateMarkdown() {
    const schema = fs.readFileSync(SCHEMA, "utf8");
    console.log(`📐 GraphQL Schema used: \x1b[34m${SCHEMA}\x1b[0m \n`);
    const typeDefinition = extractTypes(schema)
    const queries = extractQueries(schema);
    const categories = extractCategories(queries);

    for (const category of categories) {
        let markdownContent = `---
id: "graphql-queries-${category}"
title: "${category}"
sidebar_label: "${category.charAt(0).toUpperCase() + category.slice(1)} Queries"
sidebar_position: 4
---

# GraphQL API Documentation
## ${category.charAt(0).toUpperCase() + category.slice(1)} Queries

This section describes the available **GraphQL API queries** related to **${category} operations**, their usage, required parameters, and example responses.\n\n`;

        markdownContent += `## API Calls\n\n`;
        markdownContent += `| Query Name | Description |\n`;
        markdownContent += `|------------|-------------|\n`;

        // Filter queries based on the current category
        const categoryQueries = queries.filter(query => {
            const categoryMatch = query.description.match(/^\[(\w+)\]/);
            return categoryMatch ? categoryMatch[1].toLowerCase() === category : false;
        });

        categoryQueries.forEach(({name, description}) => {
            const cleanDescription = description.replace(/^\[\w+\]\s*/, "").trim();
            markdownContent += `| **\[${name}](#post-${name.toLowerCase()})\** | ${cleanDescription || "_No description available_"} |\n`;
        });

        markdownContent += `\n---\n`;
        console.log(`🚀 Examples from GraphQL API: \x1b[32m\x1b[4m${ENDPOINT}\x1b[0m \n`);
        console.log(`✂️ Trim example results to: \x1b[35m${LIMIT}\x1b[0m \n`);
        for (const query of categoryQueries) {

            query.exampleRes = await fetchExampleResponse(query, typeDefinition);

            let formattedParams = query.parameters.length
                ? query.parameters.map((p) => `${p.name}: ${p.type}`).join(", ")
                : "";

            let subfields = typeDefinition.find(type => type.name === query.returnType)?.parameters.map(p => `    ${p.name}`).join("\n") || "";

            const typeDescription = typeDefinition.find(type => type.name === query.returnType);

            // check example array and if its too big trim it
            if (query.exampleRes?.data && query.exampleRes.data[query.name] instanceof Array) {
                query.exampleRes.data[query.name] = query.exampleRes.data[query.name].filter((item, index) => index < LIMIT);
            }

            markdownContent += `\n## **[POST]: ${query.name}**\n`;
            markdownContent += `#### Description\n> 📌 ${query.description.replace(/^\[\w+\]\s*/, "").trim() || `Fetches a \`${query.returnType}\`.`}\n\n`;

            markdownContent += `### **Input**\n\`\`\`\nquery ${query.name}(${formattedParams})\n\`\`\`\n\n`;
            markdownContent += `#### Headers\n\`\`\`json\n{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer YOUR_ACCESS_TOKEN"\n}\n\`\`\`\n\n`;

            markdownContent += `#### **Query**\n\`\`\`graphql\nquery {\n  ${query.name}${query.parameters.length ? `(${formattedParams})` : ""} {\n${subfields}\n  }\n}\n\`\`\`\n\n`; // Fix here as well

            markdownContent += `### **Response**\n`;
            markdownContent += `#### **Headers**\n\`\`\`\nStatus: 200 OK\n\`\`\`\n\n`;
            markdownContent += `#### **Response Type:** ${query.returnType} \n\n`;

            markdownContent += "| Field Name |    Type    | Description |\n";
            markdownContent += "|------------|------------|-------------|\n";
            markdownContent += typeDescription.parameters.length
                    ? typeDescription.parameters
                        .map(param => `| ${param.name}           | ${param.type}    | ${param.description} |`)
                        .join("\n")
                    : "No field descriptions available.\n";

            markdownContent += query.exampleRes.data
                ? `\n#### **Response body:**\n\n\`\`\`json\n${JSON.stringify(query.exampleRes, null, 4)}\n\`\`\`\n\n`
                : "\n#### **Response body:**\n\n\`\`\`json\n Example not provided \n\`\`\`\n\n";
            markdownContent += "---\n";
        }

        const outputFilePath = `${OUTPUT_DIR}/graphql-queries-${category}.md`;

        fs.writeFileSync(outputFilePath, markdownContent, "utf8");
        console.log(`✅ GraphQL API Documentation for ${category} generated or updated at: \x1b[34m${outputFilePath}\x1b[0m \n`);
    }
}
// Run Markdown Generation
generateMarkdown();
