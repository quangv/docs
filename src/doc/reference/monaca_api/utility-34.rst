=====================================================================
Utilities
=====================================================================

.. rst-class:: right-menu


We describe other functions provided by Monaca. 

======================================== ================================================================================================================
Method/Property                           Description
======================================== ================================================================================================================
:ref:`monaca.getDeviceId()<getDeviceId>`  Get the unique device ID
:ref:`monaca.baseUrl<baseUrl>`            Get absolute URL to www folder.
:ref:`monaca.isAndroid<isAndroid>`        Check whether the device is Android or not
:ref:`monaca.isIOS<isIOS>`                Check the device is iOS or not
======================================== ================================================================================================================

.. _baseUrl:

.. rst-class:: function-reference

monaca.baseUrl - Get absolute URL to www folder.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get an absolute URL to *www* folder.

:dfn:`monaca.baseUrl`

Return Value
  =================================================================== ==================================================================================
    ``Absolute URI``                                                     The absolute URL of application
  =================================================================== ==================================================================================

Example
  .. code-block:: javascript
    
      window.onload = function()
      {
        alert(monaca.baseUrl);
      }

.. _getDeviceId:

.. rst-class:: function-reference

monaca.getDeviceId() - Get the unique device ID 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the unique device ID which has been created randomly.

.. note:: Monaca framework automatically creates a unique device ID at the first time app launch.


:dfn:`monaca.getDeviceId(callback)`


Parameter
  ============= =========== =======================================================================================================================
  ``callback``   Function     A callback function where device ID is the first parameter
  ============= =========== =======================================================================================================================

Return Value
  ==================== =================================================================================================================================
  ``None``
  ==================== =================================================================================================================================


Example:

  .. code-block:: javascript
    
    monaca.getDeviceId(function(id){
       console.log('Device ID: ' + id);
    });



.. _isAndroid:

.. rst-class:: function-reference

monaca.isAndroid - Check whether the device is Android or not
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Check whether the device is an Android device or not.

:dfn:`monaca.isAndroid`

Return Value
  ==================== =================================================================================================================================
  ``boolean`` value      The device is Android device if the return value is *true*.
  ==================== =================================================================================================================================

Example
  .. code-block:: javascript
    
      if(monaca.isAndroid === true){
        alert("Android!");
      }

.. _isIOS:

.. rst-class:: function-reference

monaca.isIOS - Check whether the device is iOS or not
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Check whether the device is an iOS device or not .

:dfn:`monaca.isIOS`

Return Value
  ==================== =================================================================================================================================
  ``boolean`` value      The device is iOS device if the return value is *true*.
  ==================== =================================================================================================================================

Example
  .. code-block:: javascript
    
      if(monaca.isIOS === true){
        alert("iOS!");
      }

