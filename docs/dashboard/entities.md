---
title: "Entities"
sidebar_position: 3
---

## Entities

### Referenced Entity

Use this to filter the dashboard or the searchable listing for the entities being referenced by the Identifier. Some Identifiers are entity-specific, but many are aimed at a variety of entities or are entity-agnostic.

import referenced_entity from '/img/dashboard/entity_referenced_entity.png';

<img src={referenced_entity} alt="Referenced Entity" style={{width: 600}} />

You can filter for specific entities by typing in the 'Filter' box, and you can sort the list alphabetically or by the number of occurrences. Use the paging tool
<123..>
to navigate between the pages of entities.

### Endorsed / Recommended By

Use this to filter countries or regions that have endorsed or recommended a specific Identifier. These recommendations are usually contained in RDA national strategy documents, and/ or in published national strategies or policies.

import endorsed_recommended1 from '/img/dashboard/entity_endorsed_recommended1.png';

<img src={endorsed_recommended1} alt="Endorsed / Recommended By" style={{width: 600}} />

You can filter for specific countries by clicking on a bar in the chart.


### Endorsed / Recommended By (other option) 

This is an alternative view to zoom in to countries or regions that have endorsed or recommended a specific Identifier.

import endorsed_recommended2 from '/img/dashboard/entity_endorsed_recommended2.png';

<img src={endorsed_recommended2} alt="Endorsed / Recommended By (other option)" style={{width: 600}} />

You can filter for specific entities by zooming the map. Zooming in on the map will rearrange the clusters to show more detail. This is handy to view all Identifiers that are, for example, endorsed or recommended by countries in Europe.

### Year of first Use 

The facet shows the year of first use of a persistent identifier. The facet shows the year of first use of a persistent identifier. Hover over the bars to see detail, and click to use as a filter. Some identifiers precede the digital age and were converted to digital services afterwards.

import entity_year_used from '/img/dashboard/entity_year_used.png';

<img src={entity_year_used} alt="Year of first Use " style={{width: 600}} />

You can click on a bar to filter for a specific year, but you can also filter on the basis of a time period by adjusting the start and end dates using the slider below the chart - set the start and end years by dragging the handles.

### Resolution Topology 

The Resolution Topology indicates how Identifiers are resolved.
 - Discontinued: does not resolve anymore
 - Distributed: Many resolution nodes exist, all with the same information (blockchain-like)
 - Decentralised: Many resolution nodes exist, but they resolve only their own scope (for example URN:NBN)
 - Cascading: A central entry point exists for resolution, but additional metadata and actions can be obtained by redirecting to lower-level resolvers in a hierarchy (for example DOls and ePICS).
 - Centralised: all Identifiers are resolved at a central point (for example ORCIDs).

import entity_resolution from '/img/dashboard/entity_resolution.png';

<img src={entity_resolution} alt="Resolution Topology " style={{width: 600}} />

You can click on a sector in the pie chart to filter for that specific resolution topology.

### Number of Resolvers 

Some identifiers offer many resolver endpoints, but the vast majority offer only one.

import entity_resolvers from '/img/dashboard/entity_resolvers.png';

<img src={entity_resolvers} alt="Number of Resolvers" style={{width: 600}} />

You can click on a sector in the pie chart to filter for all Identifiers that have a specific number of resolvers.

### Metaresolvers 

Metaresolvers are public resources that assist end users with resolution of any one of a number of popular Identifiers. There are three major metadresolvers:
 - PIDMR (developed by FAIRCORE4EOSC and operated by GWDG and GRNET)
 - Identifiers.org
 - N2T.org

import entity_metaresolvers from '/img/dashboard/entity_metaresolvers.png';

<img src={entity_metaresolvers} alt="Metaresolvers" style={{width: 600}} />

You can click on a sector in the pie chart to filter for all Identifiers that have a specific number of resolvers.

### Namespace Type 

The Namespace Type is linked to the uniqueness of an identifier. Several practices are identifiable in the PID landscape:

 - Unique Hash: the identifier will always be globally unique since it is a content-derived hash
 - Static Prefix/ Unique Hash: a prefix is used to ensure that all identifiers are recognisable as a specific type, in addition to a unique hash (for example SWHID
 - Semantic Prefix/ Unique Hash: a prefix is used to ensure that all identifiers are recognisable as a specific type, in addition to a unique hash (for example dPID)
 - Semantic Prefix: a prefix (namespace) guarantees uniqueness and identifies for example a provider, and identifier type or a scientific discipline
 - Static prefix: the prefix guarantees uniqueness but it is otherwise meaningless
 - No prefix: no prefix is present, and Identifiers are not necessarily globally unique unless some additional context is known (for example all local identifiers in a specific database).

import entity_namespace from '/img/dashboard/entity_namespace.png';

<img src={entity_namespace} alt="Namespace Type" style={{width: 600}} />

You can click on a sector in the pie chart to filter for all Identifiers that have a specific number of resolvers.

### Pestistent

Not all Identifiers are persistent, and if they are, the type of persistence varies:
 
 - Implicit: The Identifier is not designed to be a persistent reference to an object or thing, but it has de facto become one - for example Wikidata entries, or GitHub repo URLs.
 - Explicit: The identifier was designed and is asserted to be persistent, for example an ARK or a Handle.

For each of these options, we sometimes add a qualifier:
 - Yes: in practice, this acts as if it is persistent in the long term.
 - No: inpractice, there is no expectation that the identifier will be persistent.

Note that work is under way to measure persistence objectively, in addition to an estimate as provided here of the likely persistence characteristics.

import entity_persistent from '/img/dashboard/entity_persistent.png';

<img src={entity_persistent} alt="Pestistent" style={{width: 600}} />

You can click on a sector in the pie chart to filter for all Identifiers that have a specific persistence characteristic.

### Unique

Identifiers do not all guarantee uniqueness in the same way, and some are not globally unique as a result.

 - Globally unique: the identifier will never be the same as any other identifier - for example a unique hash based on content.
 - Namespace unique: the identifier string, when combined with a namespace, is globally unique sine the namespace administrator manages uniqueness in the collection.
 - Locally unique: without some additional context (e.g. which database an identifier is derived from) the identifier is not unique.

import entity_unique from '/img/dashboard/entity_unique.png';

<img src={entity_unique} alt="Unique" style={{width: 600}} />

You can click on a sector in the pie chart to filter for all Identifiers that have a specific persistence characteristic.

### Managers

Identifiers often rely on Managers to assist owners of digital objects, physical objects, or concepts to create and maintain a PID for the resource.
This facet provides a view of the number of Managers involved in provision of Identifiers. As an example, DataCite and CrossRef support more than 3,000 Managers each for this purpose. These Managers are more often than not the repositories used to publish and preserve outputs.
For most Identifiers, though, the role of Manager is taken up by the Provider directly.

import entity_managers from '/img/dashboard/entity_managers.png';

<img src={entity_managers} alt="Managers" style={{width: 600}} />

You can click on a bar in the chart to filter for the specific Identifier.

### Authority

Authorities ensure that Identifiers are unique, are resolvable, and that Identifiers are issued based on a standardised schema.
Some Authorities provide these services for more than one Provider, and by extension, for more than one Identifier.

import entity_authority from '/img/dashboard/entity_authority.png';

<img src={entity_authority} alt="Authority" style={{width: 600}} />

You can filter for specific Authorities by typing in the 'Filter' box, and you can sort the list alphabetically or by the number of occurrences. Use the paging tool
‹123...›
to navigate between the pages of Authorities.

### Scheme

Many Identifiers are based on a Scheme, and the Scheme is sometimes standardised or based on an existing Standard.
For example, many Identifiers are based on the Digital Object identifier scheme (DOI), which in turn is a special case of the Handle System scheme.
Or, both ORCIDs and URN:ISNI are based on the International Standard Name Identifier scheme.

import entity_scheme from '/img/dashboard/entity_scheme.png';

<img src={entity_scheme} alt="Scheme" style={{width: 600}} />

You can filter for specific Schemes by typing in the 'Filter' box, and you can sort the list alphabetically or by the number of occurrences. Use the paging tool
‹123...›
to navigate between the pages of Schemes.


### Standard

The Scheme that an Identifier is based on is sometimes standardised or based on an existing Standard, but many schemes also rely on internal or informally published standards.

import entity_standard from '/img/dashboard/entity_standard.png';

<img src={entity_standard} alt="Standard" style={{width: 600}} />

You can filter for specific Standards by typing in the 'Filter' box, and you can sort the list alphabetically or by the number of occurrences. Use the paging tool
< 123...»
to navigate between the pages of Standards.


