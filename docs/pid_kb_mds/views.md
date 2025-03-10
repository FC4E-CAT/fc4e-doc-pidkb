---
title: "Structured Views"
sidebar_position: 4
---
# Structured Views for Query Optimization

## Structured Views for Query Optimization

To enhance **data retrieval efficiency** and streamline **Persistent Identifier (PID) management**, the **PID Knowledge Base (KB)** provides **GraphQL-based APIs** for querying **Identifiers, Properties, and their structured relationships**.

The following **GraphQL queries** allow for **efficient lookup, filtering, and paginated access** to **structured views**.

---

### `getPropertiesStackCombined`
**Purpose:**
- Fetches **all Identifier properties**, including **static and dynamic metadata**.

**GraphQL Query Example:**
```graphql
query {
  getPropertiesStackCombined {
    lodIDN
    lodRelation
    labelProperty
    value
  }
}
```
**Use Case:**
- Retrieve **all metadata properties** associated with an Identifier.

---

### `getPropertiesStackCombinedByLabel`
**Purpose:**
- Fetches properties **filtered by label** (e.g., finding all Identifiers linked to a specific metadata field).

**GraphQL Query Example:**
```graphql
query {
  getPropertiesStackCombinedByLabel(label: "Title") {
    lodIDN
    lodRelation
    labelProperty
    value
  }
}
```
**Use Case:**
- Retrieve **all Identifiers with a specific property label** (e.g., all Titles assigned to Identifiers).

---

### `getPropertiesStackCombinedPaged`
**Purpose:**
- Provides **paginated access** to Identifier properties.

**GraphQL Query Example:**
```graphql
query {
  getPropertiesStackCombinedPaged(page: 1, size: 10) {
    lodIDN
    lodRelation
    labelProperty
    value
  }
}
```
**Use Case:**
- Fetch **Identifier metadata with pagination** for large datasets.

---

### `getResolvedIdentifierStack`
**Purpose:**
- Retrieves **all resolved Identifiers and their relationships**.

**GraphQL Query Example:**
```graphql
query {
  getResolvedIdentifierStack {
    lodIDN
    labelIdentifier
    lodact
    actor
    lod
    label
  }
}
```
**Use Case:**
- Get **all Identifiers and their linked structures** (e.g., Providers, Authorities).

---

### `getResolvedIdentifierStackByLabel`
**Purpose:**
- Fetches **resolved Identifiers filtered by label**.

**GraphQL Query Example:**
```graphql
query {
  getResolvedIdentifierStackByLabel(label: "DOI: DataCite") {
    lodIDN
    labelIdentifier
    lodact
    actor
    lod
    label
  }
}
```
**Use Case:**
- **Filter Identifiers by label** (e.g., fetch only DataCite DOIs).

---

### `getResolvedIdentifierStackByActor`
**Purpose:**
- Retrieves **Identifiers linked to a specific actor** (e.g., a Provider, an Institution).

**GraphQL Query Example:**
```graphql
query {
  getResolvedIdentifierStackByActor(actor: "Crossref") {
    lodIDN
    labelIdentifier
    lodact
    actor
    lod
    label
  }
}
```
**Use Case:**
- **Find all Identifiers associated with a specific entity**.

---

### `getResolvedIdentifierStackByLabelIdentifier`
**Purpose:**
- Retrieves Identifiers by **exact Label Identifier match**.

**GraphQL Query Example:**
```graphql
query {
  getResolvedIdentifierStackByLabelIdentifier(labelIdentifier: "DOI: 10.1234/abc123") {
    lodIDN
    labelIdentifier
    lodact
    actor
    lod
    label
  }
}
```
**Use Case:**
- **Retrieve an exact Identifier match** by its full label.

---

### `searchResolvedIdentifierStack`
**Purpose:**
- Performs **keyword-based search** for resolved Identifiers.

**GraphQL Query Example:**
```graphql
query {
  searchResolvedIdentifierStack(search: "climate research") {
    lodIDN
    labelIdentifier
    lodact
    actor
    lod
    label
  }
}
```
**Use Case:**
- **Search Identifiers using a keyword** (e.g., find all PIDs related to "climate research").

---

### `getResolvedIdentifierStackPaged`
**Purpose:**
- Provides **paginated access** to resolved Identifiers.

**GraphQL Query Example:**
```graphql
query {
  getResolvedIdentifierStackPaged(page: 2, size: 5) {
    lodIDN
    labelIdentifier
    lodact
    actor
    lod
    label
  }
}
```
**Use Case:**
- **Fetch resolved Identifier relationships page by page**, useful for large-scale datasets.
