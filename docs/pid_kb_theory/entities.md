---
title: "Entities"
sidebar_position: 2
---
# Entities 

The entities referenced by persistent identifiers can be classified in terms of whether they are objects or an abstract concept agreed upon by humans. Objects can be physical objects with a digital representation or purely digital. Within this broad classification, we have attempted to standardise the entities encountered in the literature review in a consistent manner. 

There are two additional dimensions to the classification that are not currently reflected.

 - There will be specialisation in many cases to accommodate **_domain or industry sector differences_** (for example, the identifiers and associated metadata for instruments in two scientific domains may not be the same).
 - In some cases, a distinction needs to be made between **_a type and an instance of that type_**. Scientific instruments again provide a good example - there is an instrument type (make and model) that must be unambiguously identifiable, but there are potentially many instances of the instrument (as reflected by distinct serial numbers). The instances have different or additional characteristics - for example each of them can have one or more calibrations that are unique to an instance, and change over time - leading to versions of the instance.



## Entities in the Knowledge Base (KB)

The KB consists of multiple entities, each playing a specific role in the Persistent Identifier (PID) ecosystem.

import entities from '/img/pid_kb/db_kb.png';

<img src={entities} alt="Entities in the PID Knowledge Base " style={{width: 600}} />


## Core Entities

| Entity                        | Description                                                      | Key Relationships                                 |
|-------------------------------|------------------------------------------------------------------|------------------------------------------------|
| Identifiers                   | Unique, persistent references to digital or physical objects.    | Issued by Managers, governed by Authorities, linked to Schemes & Standards. |
| Providers                     | Organizations that distribute and maintain Identifiers.          | Work with Managers to register Identifiers, regulated by Authorities. |
| Authorities                   | Governing bodies ensuring Identifier compliance.                 | Oversee Providers and enforce governance policies. |
| Multi-Provider Agencies (MPA) | Aggregators overseeing multiple Providers under common policies. | Some Providers operate under DOI-based or ePIC-based MPAs. |
| Standards & Schemes           | Define how Identifiers are structured and maintained.            | Maintained by Standards Bodies and applied to Schemes. |
| Institutions                  | Organizations that host multiple functional roles.               | Supports Managers, Providers, and Authorities in research environments. |
