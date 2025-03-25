---
title: "User Guide - Dashboard/ Search and Discovery"
sidebar_position: 2
---

## Dashboard/Search and Discovery

The Dashboard/ Search and Discovery feature in the Compliance Assessment Toolkit (CAT) assists end users with finding Identifiers that suit their use cases and applications. It uses information from a PID Knowledge Base, maintained and curated by DANS on behalf of the FAIRCORE4EOSC project and EUDAT, and on information about PID Policy compliance obtained from the CAT directly.

You do not have to be logged in to make use of the Dashboard/ Search and Discovery service.

import dashboard from '/img/dashboard/dashboard.png';

<img src={dashboard} alt="Dashboard Search and Discovery" style={{width: 600}} />

## Dashboard/ Search and Discovery Are Interlinked

The default view is of a Dashboard summarising the scope of composition of the Identifiers in the Knowledge Base. There is also a companion ‘Search’ (and Discovery) page that lists all Identifiers matching the current set of filters.

Selecting any of the many features or characteristics (facets) of Identifiers in the Dashboard will interactively update the other facets. This functionality can be used successively to rapidly drill down to a subset of Identifiers meeting a set of criteria.

The selection actions in the Dashboard are also shared to the Search and Discovery page, and vice versa - hence any selections made in either page. 

The current scope of selected facets are shown in the top left of these pages as ‘Active Filters’. 

import dashboard_interlinked from '/img/dashboard/dashboard_interlinked.png';

<img src={dashboard_interlinked} alt="Dashboard Search and Discovery" style={{width: 600}} />

## Search and Discovery Page

The Search and Discovery page provides standard functionality to filter and sort a listing of Identifiers. The Search and Discovery page is accessed via the ‘Search’ button at the top left of the view, and it will inherit any facets already selected in the Dashboard view.

import dashboard_search from '/img/dashboard/dashboard_search.png';

<img src={dashboard_search} alt="Search and Discovery Page" style={{width: 600}} />

The Identifier listing can be filtered by selecting elements in one or more facets, and these are available on the left-hand side of the view.

## Indications of Uniqueness, Resolvability, and Persistence (GUPRI)

Each Identifier list item shows a badge that indicates uniqueness, resolvability, and persistence characteristics. These are not (yet) based on measured values, but on classification of characteristics. 

The following image indicates how these icons have been composed from the underlying characteristics of each Identifier.

import dashboard_indicators from '/img/dashboard/dashboard_indicators.png';

<img src={dashboard_indicators} alt="Indications of Uniqueness, Resolvability, and Persistence (GUPRI)" style={{width: 600}} />

The project and its successors will be taking objective measurement of persistence and resolvability forward.

## Clearing Selected Facet Elements in the Filter

One can deselect any of the filter elements that have been built up successively by clicking the filter element, or clear the entire filter if needed.

import dashboard_clear from '/img/dashboard/dashboard_clear.png';

<img src={dashboard_clear} alt="Clearing Selected Facet Elements in the Filter" style={{width: 600}} />


## Saving a Set of Filter Elements with a Name

It is sometimes convenient to  save a combination of filter elements for reuse at a later date - this can be done by clicking ‘Save Search’ and optionally providing a name for your search criteria.

The Named Search is stored locally and does not require registration or log-in. In some cases, local security settings may prevent the local storage of search information. These settings have to be modified locally to enable the functionality.

import dashboard_saving from '/img/dashboard/dashboard_saving.png';

<img src={dashboard_saving} alt="Saving a Set of Filter Elements with a Name" style={{width: 600}} />


## Sharing or Reusing a Saved Search Result

Support is provided for the sharing and reuse of a saved search result.

import dashboard_sharing1 from '/img/dashboard/dashboard_sharing1.png';

<img src={dashboard_sharing1} alt="Sharing or Reusing a Saved Search Result" style={{width: 600}} />

The URLs that will result in the same view as the saved search are available for reuse elsewhere, for example in a browser or embedded into another application via an iframe.

import dashboard_sharing2 from '/img/dashboard/dashboard_sharing2.png';

<img src={dashboard_sharing2} alt="Sharing or Reusing a Saved Search Result" style={{width: 600}} />












