=====================================================================
Utilities
=====================================================================

.. rst-class:: right-menu


We describe other functions provided by Monaca. 

======================================== ================================================================================================================
Method/Property                           Description
======================================== ================================================================================================================
:ref:`monaca.invokeBrowser()<browser>`    Open an external browser
:ref:`monaca.splashScreen.hide()<hide>`   Hide splashScreen
:ref:`monaca.showSpinner()<showSN>`       Display spinner animation
:ref:`monaca.hideSpinner()<hideSN>`       Hide spinner window
:ref:`monaca.updateSpinner()<updateSN>`   Update spinner title
:ref:`monaca.getDeviceId()<getDeviceId>`  Get the unique device ID
:ref:`monaca.baseUrl<baseUrl>`            Get absolute URL to www folder.
:ref:`monaca.isAndroid<isAndroid>`        Check whether the device is Android or not
:ref:`monaca.isIOS<isIOS>`                Check the device is iOS or not
======================================== ================================================================================================================


.. _browser:

.. rst-class:: function-reference

monaca.invokeBrowser() - Open an external browser
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Open the url in an external browser. 


:dfn:`monaca.invokeBrowser(url)`


Parameter
  ========= =========== =================================================================================================================================
  ``url``    String       specify the URL for the external browser to open.
  ========= =========== =================================================================================================================================

Return Value
  ==================== =================================================================================================================================
  ``None``
  ==================== =================================================================================================================================

Example
  .. code-block:: javascript
    
      monaca.invokeBrowser("http://google.com");


.. _hide:

.. rst-class:: function-reference

monaca.splashScreen.hide() - Hide splashScreen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Hide the splashScreen.

:dfn:`monaca.splashScreen.hide()`

Parameter
  ==================== =================================================================================================================================
  ``None``
  ==================== =================================================================================================================================

Return Value
  ==================== =================================================================================================================================
  ``None``
  ==================== =================================================================================================================================

Example:
  .. code-block:: javascript
    
      monaca.splashScreen.hide();

  For more details, please refer to :doc:`../../sampleapp/tips/splashScreen`.

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

.. _showSN:

.. rst-class:: function-reference

monaca.showSpinner() - Display spinner animation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Display spinner animation which will be rendered in native. It helps to flicker and smoothen the JavaScript animations.

.. note:: In order to use monaca.showSpinner() on Android devices, you need to add a following line to your AndroidManifest.xml. ``<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>``

.. image:: images/utility/showspinner.png
  :width: 240px


:dfn:`monaca.showSpinner([options])`


Parameter
  ============ ========= ==============================================================================================================================
  ``options``   Object    Object that may contain following items:

                          - ``src`` : ``String`` - Path to spinner image (relative to this HTML file) [optional]
                          - ``frames`` : ``Number`` - Number of spinner images contained in the source (frames are stacked vertically) [optional, default=1]
                          - ``interval`` : ``Number`` - Animation interval (in milliseconds) [optional, default=100]
                          - ``backgroundColor`` : ``String`` - Background color (#RRGGBB) [optional, default=#000000]
                          - ``backgroundOpacity`` : ``Number`` - Background opacity (from 0.0 to 1.0) [optional, default=0.8]
                          - ``title`` : ``String`` - Display title underneath spinner image [optional, default=””]
                          - ``titleColor`` : ``String`` - Title color [optional, default=#FFFFFF]
                          - ``titleFontScale`` : ``Number`` - Title text scale relative to the default [optional, default=1.0]
                          - ``showFullScreen`` : ``Boolean`` - Whether to show spinner background in full screen (true/false) [default=false]
  ============ ========= ==============================================================================================================================

Return Value
  ===================== ==============================================================================================================================
  ``None``
  ===================== ==============================================================================================================================

  .. note:: The ``src`` needs to be a valid *PNG* format. 

  If you use ``monaca.pushPage`` or other functions while displaying the spinner, the spinner must not be hidden and it has to wait for ``monaca.hideSpinner`` to be called. 

  If ``src`` is not specified, default spinner image contained in Monaca Framework will be rendered. 

  If ``frames`` is greater than 1, the spinner will do the animation. The spinner height is calculated by dividing original image height by frames.

Example
  .. code-block:: javascript

      function showSpinner(){
        var options = {
              title: 'Now Loading...',
              titleColor: '#4169E1'
        };
        monaca.showSpinner(options);
      }    

.. Example2:

.. :download:`More detailed ShowSpinnerExample <download/utility/showspinner.zip>` 



Errors
  Below are the errors you may encounter while using ``monaca.showSpinner`` function:    
  
  ====================================================== =============================================================================================== 
  Case                                                    Error Message (English Only)
  ====================================================== ===============================================================================================
  When specified image file is not found                  Spinner image not found: SRC_PATH     
  When specified image format is invalid                  Spinner image is not a PNG format: SRC_PATH  
  When ``interval`` is less than 50, or not string        Spinner interval needs to be greater than 50 milliseconds                                   
  When ``backgroundColor`` format is wrong                Spinner background color is invalid.
  When ``backgroundOpacity`` is not between 0 and 1       Spinner background opacity is invalid.
  ====================================================== =============================================================================================== 


.. _hideSN:

.. rst-class:: function-reference

monaca.hideSpinner() - Hide spinner window
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Hide spinner window. Does nothing if spinner is not shown (not even output any error).

:dfn:`monaca.hideSpinner()`

Parameter
  ================================================ ================================================
  ``None``
  ================================================ ================================================


Return Value
  ================================================ ================================================
  ``None``
  ================================================ ================================================

.. _updateSN:

.. rst-class:: function-reference

monaca.updateSpinnerTitle() - Update spinner title
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update spinner title as specified.

:dfn:`monaca.updateSpinnerTitle(title)`

Parameter
  =========== =========== ============================================================================================================================
  ``title``    String       The title of the spinner.
  =========== =========== ============================================================================================================================

Return Value:
  ====================== ============================================================================================================================
  ``None``
  ====================== ============================================================================================================================

