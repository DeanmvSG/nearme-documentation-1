---
title: Create a Relationship Transactable
permalink: /reference/rest-api/relationship_transactables_post
---

To create a relationship transactable send a POST request to /api/transactable/relationship_transactables

**HTTP request**

POST /api/transactable/relationship_transactables

**Parameters**

| Parameter               | Type                         | Description                                                                                   | Required | Notes                      |
| ----------------------- | ---------------------------- | --------------------------------------------------------------------------------------------- | -------- | -------------------------- |
| form_configuration_name | String                       | Name of the form configuration                                                                | Required | underscored                |
| form                    | RelationshipTransactableForm | RelationshipTransactableForm parameters that corresponds with FormConfiguration configuration | Required |                            |
| parent_resource_id      | ID (Int or String)           | Id or name of definced RelationshipTransactableType                                           | Required | name should be underscored |

**Relationship Parameters**

{% include resources/RelationshipTransactableForm.html %}

**Example request**

{% include reference/request_headers.md %}

```json
{
  "form_configuration_name": "reference_rest_api_relationship_transactable_create",
  "parent_resource_id": "special_group_transactables",
  "form": {
    "relationship_id": 1,
    "transactable_id": 1,
    "properties": {
      "status": "active"
    }
  }
}
```

| Element                 | Type                         | Description                                                                                        | Required? |
| ----------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------- | --------- |
| form_configuration_name | String                       | Name of the defined FormConfiguration                                                              | Required  |
| form                    | RelationshipTransactableForm | Attributes for transactable, should match configuration defined in corresponding FormConfiguration | Required  |

**Example response**

{% include reference/response_headers.md %}

{% include reference/response_post_body.md %}

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_post.md %}
