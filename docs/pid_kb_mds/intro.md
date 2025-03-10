---
title: "Introduction"
sidebar_position: 1
---
# Database Model Overview

The **Persistent Identifier (PID) Knowledge Base (KB)** is designed to store and manage the structured relationships between Persistent Identifiers (PIDs), their issuing authorities, governance structures, and metadata. This document defines the **database schema, entity relationships, and structured query views** that operationalize the theoretical framework outlined in the **Theoretical Analysis & Relationship Model** document.

The KB follows a **relational database model**, ensuring efficient query execution, data integrity, and interoperability with **graph-based identifier systems**. The model is optimized for **scalability**, supporting both **static and dynamic properties** of identifiers and their associated actors.

Key components of the **PID KB database** include:
- **Identifiers** as the central entities.
- **Providers** responsible for issuing, maintaining, and resolving Identifiers.
- **Authorities** ensuring compliance with governance standards.
- **Multi-Provider Agencies (MPAs)** overseeing multiple Providers.
- **Standards & Schemes** defining Identifier structures and usage.
- **Institutions** managing various roles within the ecosystem.

The following sections detail the **schema design**, **entity relationships**, and **query structures** that enable efficient PID management.
