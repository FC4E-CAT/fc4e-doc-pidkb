---
title: "Providers"
sidebar_position: 4
---
# Providers as the Backbone of Identifier Distribution

While Identifiers form the foundation of the Knowledge Base, Providers enable, distribute, and maintain these Identifiers. They act as the linking mechanism between Identifiers, Managers, and Authorities.

The situation is not very common, but a Provider can potentially offer more than one Identifier to the same Manager. There is also a special case where either the Manager(s) for a specific Identifier/ Provider combination are not known, or where Providers issue Identfiers directly to Owners without a Manager as an intermediary. The accommodate this, there is a ‘Not Applicable’ Manager instance in the table.

A complication arises for some of the data that we have been able to obtain from registries. 
As an example, re3data offers information on PID use by repositories (by definition Managers). But - some PID Identifiers are listed very generically, for example ‘DOI’ or ‘Handle’: we have no information about which DOI or Handle Provider (of which there can be several) is implied.
For these cases, we link to a generic Provider - ‘Unknown’.


## What is a Provider?

A Provider is an organization or entity that offers Identifier registration and management.

**Examples:** Crossref, DataCite, ORCID, GS1, DOI Foundation, RAID.

Providers ensure Identifiers are accessible, resolvable, and governed under specific Schemes and Standards.

## The Role of Providers in Identifier Management

- **Intermediary Function:** Providers act as bridges between Managers and Authorities.
- **Ensuring Resolvability:** Providers maintain technical infrastructure for Identifier resolution (e.g., DOI resolver).
- **Multi-Provider Agencies (MPAs):** Some Providers operate under MPAs, which oversee multiple Providers under a common governance framework.

## Provider-Manager-Authority Relationships

- **Providers** work with **Managers** to ensure proper Identifier issuance.
- **Providers** are regulated by **Authorities**, ensuring compliance.
- **Providers** may be part of an **MPA**, meaning they follow a collective governance model.
