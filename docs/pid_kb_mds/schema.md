---
title: "Database Schema"
sidebar_position: 2
---
# Database Schema Overview

The KB schema follows a structured and hierarchical approach, with table prefixes indicating their role:

- **s_** → System-wide tables (apply to all applications)
- **t_** → Compliance assessment tables
- **p_** → Application-specific tables
- **e_** → Assessment event data
- **k_** → Knowledge base tables

## Field Naming Conventions

- **Identifiers:**
    - `idABC` → Internal identifier (unique within table)
    - `lodABC` → Linked Open Data (LOD) unique identifier (graph-based)
    - `lodABC_P` → Parent identifier (for recursive relationships)
    - `lodABC_V` → Versioning field (previous version reference)

- **Metadata Fields:**
    - `labelAbcde` → Label for the record
    - `descAbcde` → Description field
    - `populatedBy` → ORCID or creator identifier
    - `lastTouch` → Timestamp for last update
