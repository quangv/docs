.. _collection_item_api:

====================================
Collection Item
====================================

.. rst-class:: right-menu

   
*Collection Item* management can be done by using the following functions and properties.

.. note:: In order to access Backend API, you need to load ``jQuery`` and register ``cloud.monaca.mobi`` in the whitelist by editing each OS's configuration file. For more details, please refer to :ref:`Access Origin (Android) <access_origin_android>` and :ref:`Access Origin (iOS) <access_origin>`.


=================================================================== =====================================================================================
Method/Property                                                      Description
=================================================================== =====================================================================================
:ref:`monaca.cloud.CollectionItem.update()<ci.update>`               Update the data of a collection item
:ref:`monaca.cloud.CollectionItem.getPermission()<ci.getPer>`        Get permission of a collection item
:ref:`monaca.cloud.CollectionItem.updatePermission()<ci.updatePer>`  Set permission of a collection item
:ref:`monaca.cloud.CollectionItem.remove()<ci.delete>`               Delete a collection item
:ref:`monaca.cloud.CollectionItem._id<ci._id>`                       Identifier of a collection item
:ref:`monaca.cloud.CollectionItem._ownerUserOid<ci._ownerUserOid>`   The owner's oid of the collection item  
:ref:`monaca.cloud.CollectionItem._createdAt<ci._createdAt>`         The creation time of the collection item
:ref:`monaca.cloud.CollectionItem._updatedAt<ci._updatedAt>`         The update time of the collection item
=================================================================== =====================================================================================

.. _ci.update:

.. rst-class:: function-reference

CollectionItem.update() - Updating an Item
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Send the CollectionItem’s current value to Backend server and save it.

:dfn:`CollectionItem.update() : $.Promise`

Parameter
  ========================= =============================================================================================================================
  ``None``
  ========================= =============================================================================================================================

Result Parameter of done() Callback
  =============== ======================================== ===========================================================================================
  ``permission``   Object                                   Key and value pair e.g. {public: ‘rw’}
  =============== ======================================== ===========================================================================================

Return Value:
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  ============ ==========================================================================================================================================
  ``-32602``    Invalid params
  ``-14``       Permission denied (When the user doesn't have Write permission)
  ============ ==========================================================================================================================================

Example
  The following example shows how to update an item of a collection.

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");
    var newTitle = 'Updated: It’s snowing again';

    Diary.findOne()
    .done(function(item) 
    {
       item.title = newTitle;
       item.update()
       .done(function(result) 
       {
          console.log('Updating success');
       })
       .fail(function(err)
       {
          console.log("Err#" + err.code +": " + err.message);
       });
    });

.. rst-class:: function-reference

.. _ci.getPer:

CollectionItem.getPermission() - Getting an Item's Permission
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get permission of the *CollectionItem*. The permission can be fetched only if the user/device has *write-permission*.

:dfn:`CollectionItem.getPermission() : $.Promise`

Parameter
  ========================= =============================================================================================================================
  ``None``
  ========================= =============================================================================================================================

Result Parameter of done() Callback
  =============== ======================================== ===========================================================================================
  ``permission``   Object                                   Key and value pair e.g. {public: ‘rw’}
  =============== ======================================== ===========================================================================================

Return Value
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  ========= =============================================================================================================================================
  ``-14``    Permission denied (When the user doesn't have Write permission)
  ========= =============================================================================================================================================

Example
  The following example shows how to get permission of a *CollectionItem*.

  .. code-block:: javascript
    
    var Diary = monaca.cloud.Collection("diary");

    Diary.findOneMine()
    .done(function(item) 
    {
       item.getPermission()
       .done(function(result) 
       {
          console.log(result.permission);
       })
       .fail(function(err)
       {
          console.log("Err#" + err.code +": " + err.message);
       });
    });


.. rst-class:: function-reference

.. _ci.updatePer:

CollectionItem.updatePermission() - Setting an Item's Permission
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update permissions of the CollectionItem. Permissions can be updated only if the user or device has *write-permission*.

:dfn:`CollectionItem.updatePermission(permission: Object) : $.Promise`

Parameter
  ================ ======================================================================================================================================
  ``permission``    permissions to be set. ``rw`` is read/write, ``r`` is read-only, ``w`` is write-only and empty string is no-permission.
  ================ ======================================================================================================================================

Result Parameter of done() Callback
  =============== ======================================== ===========================================================================================
  ``numUpdates``   Number                                   the value is always 1
  =============== ======================================== ===========================================================================================

Return Value
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  ============ ==========================================================================================================================================
  ``-32602``    Invalid params
  ``-14``       Permission denied (When the user doesn't have Write permission)
  ============ ==========================================================================================================================================

Example
  The following example shows how to set permission of a CollectionItem.

  .. code-block:: javascript
    
    var Diary = monaca.cloud.Collection("diary");

    Diary.findOneMine()
    .done(function(item) 
    {
       item.updatePermission({
          public: "r",
          "u00000000-xxxx-xxxx-xxxxxxxx": "rw",
          "u00000000-xxxx-xxxx-xxxxxxxx": ""
       })
       .done(function() 
       {
          console.log("Permission updated!");
       })
       .fail(function(err)
       {
          console.log("Err#" + err.code +": " + err.message);
       });
    });

  And the following example illustrates how to add permission to specific CollectionItem.
  
  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");

    var oids = {
                 userB: "x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                 userZ: "x00000000-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
               };
    var targetItem = null;

    Diary.findOneMine()
    .then(function(item) 
    {
       targetItem = item;
       return targetItem.getPermission();
    })
    .then(function(result) 
    {
       result.permission[oids.userB] = "rw";
       result.permission[oids.userZ] = "rw";
       return targetItem.updatePermission(result.permission);
    })
    .then(function() 
    {
       console.log("Permission updated!");
    });



.. rst-class:: function-reference

.. _ci.delete:

CollectionItem.remove() - Deleting an Item
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Delete a collection item.

:dfn:`monaca.cloud.CollectionItem.remove() : $.Promise`

.. note:: This function replaces the old function ``CollectionItem.delete()`` which is obsolete. The ``CollectionItem.delete()`` still can be used, however it is recommended to use new function.

Parameter
  ========================= =============================================================================================================================
  ``None``
  ========================= =============================================================================================================================

Return Value
  =============================== =======================================================================================================================
  `$.Promise <../other>`_ object    Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  =============================== =======================================================================================================================

Error Code
  Errors are returned as :doc:`error` object.

  ============ ==========================================================================================================================================
  ``-32602``    Invalid params
  ``-14``       Permission denied (When the user doesn't have Write permission)
  ============ ==========================================================================================================================================

Example
  The following example shows how to set permission of a CollectionItem.

  .. code-block:: javascript

    var Diary = monaca.cloud.Collection("diary");

    Diary.findOne('title == "I hate him"')
    .done(function(item) 
    {
       item.remove()
       .done(function() 
       {
          console.log("Yes indeed I like him");
       });
    });

.. rst-class:: function-reference

.. _ci._id:

CollectionItem._id - Item's Identifier
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Identifier of a collection item.

:dfn:`monaca.cloud.CollectionItem._id : String (read-only)`

Return Value
  ======================== ======================================================================
  ``string``                The identifier of the collection item.
  ======================== ======================================================================

Example
  The following code will display each item's oid string which are found by the *find()* function in the console log.

  .. code-block:: javascript

      /* find function */
      .done(function(result)
      {
         result.items.forEach(function(item)
         { 
            console.log(item._id); 
         });
      });

.. rst-class:: function-reference

.. _ci._ownerUserOid:

CollectionItem.ownerUserOid - Data Owner's Identifier
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The user's oid who created the data.

:dfn:`monaca.cloud.CollectionItem._ownerUserOid : String (read-only)`


Return Value
  ============================ =================================================================================
  ``string``                    The oid of the data's owner.
  ============================ =================================================================================

Example
  The following code will display each item's oid of the data's owner which are found by the *find()* function in the console log.

  .. code-block:: javascript

      /* find function */
      .done(function(result)
      {
         result.items.forEach(function(item)
         {
            console.log(item._ownerUserOid);
         });
      });

.. rst-class:: function-reference

.. _ci._createdAt:

CollectionItem._createdAt -  Item's Creation Time
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The creation time of the item.

:dfn:`_createdAt : Date (read-only)`

Return Value
  ============================== ==================================================================================
  ``Date`` object                 The creation time of the item.
  ============================== ==================================================================================

Example
  The following code will display each item's creation time which are found by the *find()* function in the console log.

  .. code-block:: javascript

      /* find function */
      .done(function(result)
      {
          result.items.forEach(function(item)
          {
             console.log(item._createdAt);
          });
      });

.. rst-class:: function-reference

.. _ci._updatedAt:

CollectionItem.updatedAt - Item's Update Time
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The update time of the item.

:dfn:`monaca.cloud.CollectionItem._updatedAt : Date (read-only)`

Return Value
  ===================== ===============================================================================
  ``Date`` object        The update time of the item.
  ===================== ===============================================================================

Example
  The following code will display each item's update time which are found by the *find()* function in the console log.

  .. code-block:: javascript

    /* find function */
    .done(function(result)
    {
       result.items.forEach(function(item)
       {
          console.log(item._updatedAt);
       });
    });


.. seealso::

  *See Also*

  - :ref:`collection_api`
  - :ref:`collection_management`
  - :ref:`collection_item_management`
  - :ref:`backend_control_panel`
  - :ref:`backend_api_index`
  - :ref:`backend_database_memo`
  - :ref:`backend_management_api_index`
  - :ref:`backend_management_api_key`
