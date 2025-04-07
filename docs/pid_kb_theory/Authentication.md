---
title: "Authentication/Authorisation"
sidebar_position: 7
---
# Authentication and Authorization in PID Knowledge Base

Authentication and authorization in the FAIRCORE4EOSC PID KB Service are designed to ensure secure access while offering a user-friendly experience.

## Authentication

Authentication is handled via the **EOSC AAI Core Infrastructure Proxy**, providing a centralized single sign-on (SSO) mechanism. When users access the KB Service, they are redirected to this proxy, where they authenticate using their institutional credentials. Once successfully authenticated, a security token is issued to maintain session identity across the service.

This approach ensures consistent, secure user authentication, leveraging the **EOSC Beyond AAI Sandbox** for testing and integration.

## Authorization

Authorization is managed internally by the KB Service using a **Role-Based Access Control (RBAC)** model. Each user is assigned a role, which determines their permissions and level of access.

### User

Users can:

- View public content in the PID Knowledge Base
- Access specific queries and results that are explicitly assigned to them  

### Administrator

Administrators have elevated access to manage the system and its content. They can:

- View public content in the PID Knowledge Base
- Access all available queries and results
- Assign queries to specific users for restricted access
- Manage all user accounts and their access levels

### Example: Role-Protected Query

Some queries are only accessible by users with the **Administrator** role. One such query is `getManagerProviderIdentifiersIDs`.

#### Required Authorization Header
```http
Authorization: Bearer <your-access-token>
```

#### GraphQL Query
```
{
    getManagerProviderIdentifiersIDs
}
```

#### Sample Response
```
{
"data": {
    "getManagerProviderIdentifiersIDs": [
        {
            "id": {
                "lodIDN": "pid_graph:3E6F3EE62",
                "lodMAN": "pid_graph:2FBE5E8A3",
                "lodPRV": "pid_graph:258448F0"
            }
        }
    ]
}
```


