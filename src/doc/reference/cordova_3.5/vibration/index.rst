Vibration Plugin
================================================

.. rst-class:: right-menu


.. raw:: html

  <div>
    <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-vibration/blob/master/RELEASENOTES.md#039-jun-05-2014">0.3.9</a></div>   
    <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
    <br/>
  </div>

.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/apache/cordova-plugin-vibration/blob/master/README.md>`_.


This plugin provides a way to vibrate the device.

Plugin ID
-----------------------

::
  
  org.apache.cordova.vibration

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please enable ``org.apache.cordova.vibration`` plugin in Monaca Cloud IDE. Please refer to :ref:`standard_plugins` docs for how to enable the plugin in Monaca. 

Supported Platforms
-------------------

-  Android
-  iOS

notification.vibrate
--------------------

Vibrates the device for the specified amount of time.

.. code-block:: javascript

    navigator.notification.vibrate(time)

-  **time**: Milliseconds to vibrate the device. *(Number)*

Example
-------

.. code-block:: javascript

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);

iOS Quirks
----------

-  **time**: Ignores the specified time and vibrates for a pre-set
   amount of time.

   .. code-block:: javascript

       navigator.notification.vibrate();
       navigator.notification.vibrate(2500);   // 2500 is ignored
