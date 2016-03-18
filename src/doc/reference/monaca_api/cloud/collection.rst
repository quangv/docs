.. _collection_api:

====================================
Collection
====================================

.. rst-class:: right-menu


*Collection* management can be done by using the following functions and properties.

.. note:: In order to access Backend API, you need to load ``jQuery`` and register ``cloud.monaca.mobi`` in the whitelist by editing each OS's configuration file. For more details, please refer to :ref:`Access Origin (Android) <access_origin_android>` and :ref:`Access Origin (iOS) <access_origin>`.


=================================================================== =====================================================================================
Method/Property                                                      Description
=================================================================== =====================================================================================
:ref:`monaca.cloud.Collection()<c.Collection>`                       Get a collection object
:ref:`monaca.cloud.Collection.find()<c.find>`                        Find all users' data in the collection
:ref:`monaca.cloud.Collection.findMine()<c.findMine>`                Fetch current user's data
:ref:`monaca.cloud.Collection.findOne()<c.findOne>`                  Fetch an item of the collection
:ref:`monaca.cloud.Collection.findOneMine()<c.findOneMine>`          Fetch an item of the current user from the collection
:ref:`monaca.cloud.Collection.insert()<c.insert>`                    Insert data into a collection
:ref:`monaca.cloud.Collection.updatePermission()<c.updatePer>`       Bulk update the permissions of collection items.
=================================================================== =====================================================================================

.. rst-class:: function-reference

.. _c.Collection:

Collection() - Retrieving a Collection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get a *Collection* object with a specific name.
Please note that collection is not created automatically. You are required to make a collection manually with the IDE.

:dfn:`monaca.cloud.Collection(collectionName: string) : Object`

Parameter
  ========================= =============================================================================================================================
  ``collectionName``          The name of a collection.
  ========================= =============================================================================================================================

Return Value
  ======================================== ========================================================
  A collection object is returned.
  ======================================== ========================================================

Example
  The following example indicates how to get a collection object called ``"diary"``.

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary"); // returns Collection object

.. rst-class:: function-reference

.. _c.find:

Collection.find()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Find all users' data in the collection.

:dfn:`Collection.find(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise`

Parameter
  ============== ========================================================================================================================================
  ``criteria``    :doc:`criteria` or `String`.
  ``orderBy``     "field_name ASC|DESC". For multiple orders, use array (e.g. ["title ASC", "author ASC"]).
  ``options``     Available options:

                    - ``propertyNames``: specify the preferred user properties. If not specified, all user properties are returned.
                    - ``limit``: Limit number of results.
                    - ``page``: Start from specified page.
  ============== ========================================================================================================================================

Result Parameter of done() Callback
  =============== ======================================== ===========================================================================================
  ``totalItems``   Number                                  The number of the items
  ``items``        Array of CollectionItem                                      
  =============== ======================================== ===========================================================================================

Return Value
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== ===========================================================================================================================================
  ``-32602``   Invalid params
  =========== ===========================================================================================================================================

Example
  The following example denotes how to search data in the ``"diary"`` collection, then return a set of items that match the criteria and sort the results by ``"_createdAt"`` property in descending order. Moreover, the returned items only have 2 properties: ``"title"`` and ``"body"``.

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");
    var Criteria = monaca.cloud.Criteria('title == "Monaca"');
    Diary.find(Criteria, "_createdAt DESC", {propertyNames: ["title", "body"], limit: 5})
    .done(function(result) 
    {
       console.log('Total items found: ' + result.totalItems);
       console.log('The body of the first item: ' + result.items[0].body);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    
  Or just pass the string for the criteria:

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");
    Diary.find('title == "Monaca"', "", {propertyNames: ["title", "body"], limit: 5})
    .done(function(result)
    {
       console.log('Total items found: ' + result.totalItems);
       console.log('The body of the first item: ' + result.items[0].body);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _c.findMine:

Collection.findMine() - Fetch current user's data
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Find the current user's data in the collection.

:dfn:`Collection.findMine(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise`

Parameter
  ============= =========================================================================================================================================
  ``criteria``    :doc:`criteria` or `String`.
  ``orderBy``     "field_name ASC|DESC". For multiple order, use array (e.g. ["title ASC", "author ASC"]).
  ``options``     Available options:

                  - ``propertyNames``: specify the preferred user properties. If not specified, all user properties are returned.
                  - ``limit``: Limit number of results.
                  - ``page``: Start from specified page.
  ============= =========================================================================================================================================

Result Parameter of done() Callback
  =============== ======================================== ===========================================================================================
  ``totalItems``   Number                                  The number of the items
  ``items``        Array of CollectionItem                                      
  =============== ======================================== ===========================================================================================

Return Value
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== ===========================================================================================================================================
  ``-32602``   Invalid params
  =========== ===========================================================================================================================================

Example:
  The following example denotes how to search data in the ``"diary"`` collection, then return a set of items which has the nickname ``"my nickname"`` and sort the results by ``"_createdAt"`` property in descending order. Moreover, the returned items only have 2 properties: ``"title"`` and ``"body"``.

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");
    Diary.findMine('nickname == "my nickname"', "", {propertyNames: ["title", "body"], limit: 5})
    .done(function(result) 
    {
       console.log('Total items found: ' + result.totalItems);
       console.log('The body of the first item: ' + result.items[0].body);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _c.findOne:

Collection.findOne() - Fetch an item
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Fetch an item from the Collection. The first item is returned if multiple items are matched.

:dfn:`Collection.findOne(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise`

Parameter
  ============== ========================================================================================================================================
  ``criteria``      :doc:`criteria` object or String.
  ``orderBy``       "field_name ASC|DESC". For multiple orders, use array (e.g. ["title ASC", "author ASC"]).
  ``options``       Available option:

                    - ``propertyNames``: specify the preferred user properties. If not specified, all user properties are returned.
  ============== ========================================================================================================================================

Result Parameter of done() Callback
  =============== ============================================ ===========================================================================================
  ``item``         A CollectionItem (or null when no result)                                      
  =============== ============================================ ===========================================================================================

Return Value
  ================================= =====================================================================================================================
  `$.Promise <../other>`_ object      Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================= =====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  ============ ==========================================================================================================================================
  ``-32602``     Invalid params
  ============ ==========================================================================================================================================

Example
  The following example denotes how to search data in the ``"diary"`` collection, then return a set of items that match the criteria and sort the results by ``"_createdAt"`` property in descending order.

  .. code-block:: javascript
    
    var Diary = monaca.cloud.Collection("diary");
    Diary.findOne('title == "Monaca"', "_createdAt DESC")
    .done(function(result) 
    {
       console.log('The body of the item: ' + result.body);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _c.findOneMine:

Collection.findOneMine() - Fetch an item of the current user
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Fetch a current user’s item from the Collection. The first item is returned if multiple items are matched.

:dfn:`Collection.findOneMine(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise`

Parameter
  ============== ========================================================================================================================================
  ``criteria``    :doc:`criteria` or String.
  ``orderBy``     "field_name ASC|DESC". For multiple orders, use array (e.g. ["title ASC", "author ASC"]).
  ``options``     Available option:

                  - ``propertyNames``: Filter to minimize fetched data size.
  ============== ========================================================================================================================================

Result Parameter of done() Callback
  =============== ============================================ ===========================================================================================
  ``item``         A CollectionItem (or null when no result)                                       
  =============== ============================================ ===========================================================================================

Return Value
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  ============ ==========================================================================================================================================
  ``-32602``     Invalid params
  ============ ==========================================================================================================================================

Example
  The following example denotes how to search data in ``"diary"`` collection, then return a set of items that match the criteria and sort the results by ``"_createdAt"`` property in descending order.

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");
    Diary.findOneMine('title == "Monaca"', "_createdAt DESC")
    .done(function(result) 
    {
       console.log('The body of the item: ' + result.body);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _c.insert:

Collection.insert() - Inserting an Item
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Insert an item into the *Collection*.

:dfn:`Collection.insert(item: Object, [permission: Object]) : $.Promise`

Whether the permission is set or not set, the owner of the user always have read-and-write permission.


Parameter
  =============== =======================================================================================================================================
  ``item``         User-defined data of the new item.
  ``permission``   A permission object applied to the item. Each key of the permission object can be ``“public”`` (all users) or a :ref:`user’s Oid<u._oid>`. Each value of the permission object can be ``“r”`` (allow read) , ``“w”`` (allow write), ``“rw”`` (allow read and write) or ``“”`` (allow nothing).  For instance: { “public”: 'rw', “oidOfUserA”: 'r', “oidOfUserB”: 'rw' }
  =============== =======================================================================================================================================

Result Parameter of done() Callback
  =============== ======================================== ===========================================================================================
  ``items``        Array of CollectionItem                                      
  =============== ======================================== ===========================================================================================

Requirement
  ========== ============================================================================================================================================
  ``item``    Key names must consist of \[a-zA-Z0-9\] characters and must start with \[a-zA-Z\]. Data size must not exceed the size limit (500KB).
  ========== ============================================================================================================================================

Return Value
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Error Code
  Errors are returned as :doc:`error` object.

  =========== ===========================================================================================================================================
  ``-32602``   Invalid params
  ``-14``      Permission denied (When it's not allowed to insert data from Apps)
  =========== ===========================================================================================================================================

Example
  The following example denotes how to insert an item which has 3 fields (``title``, ``body``, ``_createdAt``) into ``"diary"`` collection and set permission for a user with id of ``x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx`` to read-only for that item.

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");
    var friendUserOid = "x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
    var permission = {};
    permission[friendUserOid] = "r";

    Diary.insert({title: 'Any title', body: 'Hello World'}, permission)
    .done(function(result) 
    {
       console.log("Inserted!");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });


.. rst-class:: function-reference

.. _c.updatePer:

Collection.updatePermission() - Bulk update the permissions of collection items.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Bulk update the permissions of collection items

:dfn:`Collection.updatePermission(criteria: Criteria or String, permission: Object, [options: Object]) : $.Promise`

Parameter
  =========================== ===========================================================================================================================
  ``criteria``                 :doc:`criteria` or String.
  ``permission``               Object representing permission. ``rw`` is read/write, ``r`` is read-only, ``w`` is write-only and empty string is no permission. Available options:
                               - ``forceOverwrite``: boolean - Whether to overwrite current permission (default: ``false``).
  =========================== ===========================================================================================================================

Result Parameter of done() Callback
  =============== ======================================== ===========================================================================================
  ``numUpdates``    Number                                  the number of updated items.                                     
  =============== ======================================== ===========================================================================================

Return Value
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== ===========================================================================================================================================
  ``-32602``   Invalid params
  ``-14``      Permission denied (When it's not allowed to insert data from Apps)
  =========== ===========================================================================================================================================

Example
  The following example denotes how to assign the read/write permission to the ``UserX`` and read-only permission to the ``UserY``.

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");

    var oids = 
    {
       userX: "x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
       userY: "x00000000-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
    };

    var newPermission = {};
    newPermission[oids.userX] = "rw";
    newPermission[oids.userY] = "r";

    Diary.updatePermission('group_id == 1', newPermission)
    .done(function(result) 
    {
       console.log(result.numUpdates + " items updated");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. seealso::

  *See Also*

  - :ref:`collection_item_api`
  - :ref:`collection_management`
  - :ref:`collection_item_management`
  - :ref:`backend_control_panel`
  - :ref:`backend_api_index`
  - :ref:`backend_database_memo`
  - :ref:`backend_management_api_index`
  - :ref:`backend_management_api_key`
