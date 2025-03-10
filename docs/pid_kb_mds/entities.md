---
title: "Entities"
sidebar_position: 3
---
# Entities in the Knowledge Base (KB)

## Entity Relationships & Data Model

The Knowledge Base (KB) follows a relational model where entities are connected through direct links or junction tables (for many-to-many relationships). Below is a summary of key relationships:

### One-to-Many (1:N) Relationships
These relationships occur when a single entity has multiple related records in another entity.

- **Institutions → Hosted Entities:**
  - Each Institution can host multiple entities (e.g., a university hosting multiple repositories).
  - **Foreign Key:** `lodInstitution` in `k_institution_hosts`.

- **Institutions → Resolvers:**
  - Each Institution may operate one or more resolution services.
  - **Foreign Key:** `lodInstitution` in `k_institution_resolver`.

- **Identifiers → Resolution Rules:**
  - Each Identifier may have one or more resolution rules.
  - **Foreign Key:** `lodIDN` in `k_identifier_resolution`.

- **Identifiers → Entity Cases:**
  - Each Identifier can be linked to different entities or case studies.
  - **Foreign Key:** `lodIDN` in `k_identifier_entity_case`.

### Many-to-Many (M:N) Relationships (Junction Tables)
Many-to-Many relationships require a junction table to associate multiple records from one table with multiple records in another.

| **Junction Table**               | **Entities Connected**            | **Purpose**                                                |
|----------------------------------|-----------------------------------|-----------------------------------------------------------|
| `k_manager_provider`             | Managers ↔ Providers              | Links Managers to Providers and Identifiers.             |
| `k_provider_mpa`                 | Providers ↔ MPAs                  | Links Providers to Multi-Provider Agencies (MPAs).       |
| `k_provider_authority`           | Providers ↔ Authorities           | Links Providers to governing Authorities.                |
| `k_identifier_scheme_standard`   | Identifiers ↔ Schemes ↔ Standards | Links Identifiers to multiple Schemes and Standards.     |
| `k_identifier_property`          | Identifiers ↔ Properties          | Allows Identifiers to have multiple metadata properties. |
| `k_standard_standardsbody`       | Standards ↔ Standards Bodies      | A Standard may be maintained by multiple Standards Bodies. |
| `k_manager_typemanager`          | Managers ↔ Manager Types          | Defines the type of each Manager.                        |
| `k_provider_typeprovider`        | Providers ↔ Provider Types        | Defines the type of each Provider.                       |
| `k_mpa_authority`                | Authorities ↔ MPAs                | Links Authorities to their governing Multi-Provider Agency. |
| `k_identifier_resolution`        | Identifiers ↔ Resolution Data     | Links Identifiers to resolution metadata.                |
| `k_institution_hosts`            | Institutions ↔ Hosted Entities    | Defines which entities an institution is responsible for. |
| `k_institution_resolver`         | Institutions ↔ Resolvers          | Links institutions to their resolution services.         |
| `k_institution_typeinstitution`  | Institutions ↔ Institution Types  | Defines the type of each Institution.                    |
| `k_scheme_type_scheme`           | Schemes ↔ Scheme Types            | Defines the type of each Scheme.                         |
| `k_standard_type_standard`       | Standards ↔ Standard Types        | Defines the type of each Standard.                       |
| `k_identifier_entity_case`       | Identifiers ↔ Entities ↔ Cases    | Tracks how Identifiers are associated with real-world cases. |
