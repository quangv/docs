.. _backend_management_api_index:

=====================================================================
Backend Management API
=====================================================================

.. rst-class:: right-menu


Monaca also allows you to manage your Monaca Backend from your server rather than from Monaca IDE. For example, you may create a new user, a new collection and send a push notification from your sever to your Monaca app. In order to do this, you will need to implement Monaca Backend Management APIs which will be described in this section. These APIs are based on *JSON-RPC version 2.0*. For information about its specification, please refer to `JSON-RPC 2.0 Specification <http://www.jsonrpc.org/specification>`_ .

.. note:: In order to enable and use Backend Management API, you will need to have at least one Backend Management API key from Monaca IDE first. This API key will be used within a request header. Please refer to :ref:`backend_management_api_key` on how to generate this API key.

Prior to implementing these APIs, you should be aware of the following specifications:

=============================== ============================================================================================================================
``JSON-RPC Endpoint``              You can get endpoint URL from Backend Management API Key panel in which it is called *Management API URL* (See :ref:`backend_management_api_key`).

``JSON-RPC Request``               An example of a JSON-RPC request:

                                   .. code-block:: javascript
                                      
                                     {
                                        "jsonrpc": "2.0", 
                                        "method": "CollectionItem.list", 
                                        "params": {
                                          "collectionName": "GameScore",
                                          "page": 1,
                                          "itemsInPage": 10,
                                          "sortProperty": "score",
                                          "sortOrder": "desc"
                                        }, 
                                          "id": 1
                                     }
                                   
                                   .. note:: Note that top level attribute "jsonrpc" should be "2.0" and "id" should be 1.

``JSON-RPC Request Header``        ``X-Monaca-Backend-Management-API-Key``: *************

``JSON-RPC Response``              ``Success``:
                                      
                                      An example of a successful JSON-RPC response:
                                      
                                      .. code-block:: javascript
                                      
                                        {
                                          "jsonrpc":"2.0",
                                          "id":1,
                                          "result":{
                                            "items":[ {...}, {...}, {...} ],
                                            "totalItems":3
                                          }
                                        }

                                   ``Error``:

                                      An example of a failure JSON-RPC response (if method was wrong):
                                      
                                      .. code-block:: javascript
                                        
                                        {
                                          "jsonrpc":"2.0",
                                          "id":1,
                                          "error":{
                                            "code":-32601,
                                            "message":"Method not found"
                                          }
                                        }
                                        
                                      An example of a failure JSON-RPC response (if collectionName was wrong):
                                      
                                      .. code-block:: javascript
                                        
                                        {
                                          "jsonrpc":"2.0", 
                                          "id":1, 
                                          "error":{
                                            "code":-32602, 
                                            "message":"Invalid params", 
                                            "data":{
                                              "collectionName":"Collection not found."
                                            }
                                          }
                                        }
                                         
=============================== ============================================================================================================================



.. toctree::
  :maxdepth: 2

  cloud_management/user
  cloud_management/collection
  cloud_management/collection_item
  cloud_management/push

