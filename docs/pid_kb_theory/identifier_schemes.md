---
title: "Identifier Schemes"
sidebar_position: 5
---
# Hierarchy and Evolution of Identifier Schemes

Some Schemes or Standards build on previous frameworks.
Each Identifier is usually governed and guaranteed by an **Authority**, and usually that also involves a PID **Scheme**. Multiple **Schemes** can be based on the same **Standard** (for example, there are several **Schemes** derived from URN, from ISNI, and from Z39.88-2004).  **Standards**, if they are formalised, are usually maintained by a **Standards Body**.

Some **Scheme** or **Standards** build on others, for example PURL is based on Z39.88-2004, which, in turn, is based on URN. 
We do not model this complexity, but record the most ‘derived’ Schema or Standard. For example, for ORCID, we only record that it is based on URN:ISNI, and not that URN is involved too as the basis for ISNI.

Future releases could include this added graph-like interrelationship between **Schema** and/ or **Standards**.

Moreover, some **Identifiers** have **Schema** as well as Protocol (Resolver) Standards - e.g the Handle System has a standardised resolver protocol. We do not include this information at present.


## Identifiers with Protocol-Based Resolver Standards

Some Identifiers not only have a Scheme but also require a specific protocol for resolution.

**Example:** The Handle System (which powers DOIs) has a standardized resolver protocol.

Currently, the KB does not model Resolver Standards explicitly, but this could be included in future versions.
