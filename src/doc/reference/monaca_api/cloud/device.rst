=====================================================================
Device
=====================================================================

.. rst-class:: right-menu


Device management can be done with the following JavaScript APIs.


.. note:: In order to access Backend API, you need to load ``jQuery`` and register ``cloud.monaca.mobi`` in the whitelist by editing each OS's configuration file. For more details, please refer to :ref:`Access Origin (Android) <access_origin_android>` and :ref:`Access Origin (iOS) <access_origin>`.

====================================================== ==================================================================================================
Method/Property                                         Description
====================================================== ==================================================================================================
:ref:`monaca.cloud.Device.getProperty()<d.getProp>`     Get a property value of device
:ref:`monaca.cloud.Device.getProperties()<d.getProps>`  Get property values of a device
:ref:`monaca.cloud.Device.saveProperty()<d.saveProp>`   Update a property of a device
:ref:`monaca.cloud.Device.saveProperties<d.saveProps>`  Update properties of a device
====================================================== ==================================================================================================

.. rst-class:: function-reference

.. _d.getProp:

Device.getProperty() - Retrieving a Device Property
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get a property value of a device.

:dfn:`monaca.cloud.Device.getProperty(name: String) : $.Promise`

Parameter
  =========== ===========================================================================================================================================
   ``name``     A property name.
  =========== ===========================================================================================================================================

Result Parameter of done() Callback
  =========================== ============================ ===========================================================================================
  (Property value)             Any                            
  =========================== ============================ ===========================================================================================

Return Value
  ================================= =====================================================================================================================
  `$.Promise <../other>`_ object      Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================= =====================================================================================================================


Example
  Refer to the following code for an example of how to get a property value of a device.

  .. code-block:: javascript

    monaca.cloud.Device.getProperty("nickname")
      .done
        (
          function(result)
          { console.log("Device's nickname: " + result); }
        )  
      .fail
        (
          function(err)
          { /* error handling codes */ }
        )
      .always
        (
          function()
          { /* what must be done despite the outcome of the getProperty function */ }
        );

.. rst-class:: function-reference

.. _d.getProps:

Device.getProperties() - Retrieving Device Properties
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get property values of a device.

:dfn:`monaca.cloud.Device.getProperties(names: Array) : $.Promise`

Parameter
  =========== ==========================================================================================================================================
   ``names``   Array of property names.
  =========== ==========================================================================================================================================

Result Parameter of done() Callback
  =========================== ============================ ===========================================================================================
  (Property name)              Any                            
  =========================== ============================ ===========================================================================================

Return Value
  ================================ ======================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ======================================================================================================================

Example
  Below is how to get the values of 2 properties of a device.

  .. code-block:: javascript

    monaca.cloud.Device.getProperties(["nickname", "color"])
      .done
        (
          function(result)
          { 
            console.log("Properties: " + JSON.stringify(result));
            console.log("Device's nickname: " + result.nickname);
          }
        )  
      .fail
        (
          function(err)
          { /* error handling codes */ }
        )
      .always
        (
          function()
          { /* what must be done despite the outcome of the getProperties function */ }
        );

.. rst-class:: function-reference

.. _d.saveProp:

Device.saveProperty() - Updating a Device Property
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update a property value of a device. 

:dfn:`monaca.cloud.Device.saveProperty(name: String, value: String) : $.Promise`

Parameter
  ========== ==========================================================================================================================================
   ``name``   A property name.
  ``value``   The value of the corresponded property name to be added or updated.
  ========== ==========================================================================================================================================

Requirement
  ========== ==========================================================================================================================================
  ``name``    must consist of \[``a-zA-Z0-9``\] characters and must start with \[``a-zA-Z``\].
  ========== ==========================================================================================================================================


Return Value
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  ============ ==========================================================================================================================================
  ``-32602``     Invalid params
  ============ ==========================================================================================================================================

Example
  The following example illustrates how to add/update the device's nickname to ``"Monaca"``. 

  .. code-block:: javascript

    monaca.cloud.Device.saveProperty("nickname", "Monaca")
      .done
        (
          function()
          { console.log("Saved."); }
        )
      .fail
        (
          function(err)
          { /* error handling codes */ }
        )
      .always
        (
          function()
          { /* what must be done despite the outcome of the saveProperty function */ }
        );

.. rst-class:: function-reference

.. _d.saveProps:

Device.saveProperties() - Updating Device Properties
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update an array of property values of a device.

:dfn:`monaca.cloud.Device.saveProperties(properties: Object) : $.Promise`

Parameter
  =============== =====================================================================================================================================
  ``properties``   Additional properties of a device to be added/updated.
  =============== =====================================================================================================================================

Requirement
  =============== =====================================================================================================================================
  ``properties``   Key names must consist of \[``a-zA-Z0-9``\] characters and must start with \[``a-zA-Z``]. Data size must not exceed the size limit (``500KB``).
  =============== =====================================================================================================================================

Return Value
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  ============ ==========================================================================================================================================
  ``-32602``     Invalid params
  ============ ==========================================================================================================================================


Example
  The following example illustrates how to add/update 2 properties (``nickname`` & ``color``) of a device. 

  .. code-block:: javascript

    monaca.cloud.Device.saveProperties({"nickname": "Monaca", "color": "#9999FF"})
     .done
        (
          function()
          { console.log("Saved."); }
        )
      .fail
        (
          function(err)
          { /* error handling codes */ }
        )
      .always
        (
          function()
          { /* what must be done despite the outcome of the saveProperties function */ }
        );


.. seealso::

  *See Also*

  - :ref:`backend_control_panel`
  - :ref:`backend_api_index`
  - :ref:`backend_database_memo`
  - :ref:`backend_management_api_index`
  - :ref:`backend_management_api_key`
