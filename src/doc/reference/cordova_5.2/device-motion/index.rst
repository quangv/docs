.. raw:: html

   <!---
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
   -->

================================
Device Motion Plugin
================================

.. rst-class:: right-menu


.. raw:: html

  <div>
    <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-device-motion/blob/master/RELEASENOTES.md#111-jun-17-2015">1.1.1</a></div>   
    <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
    <br/>
  </div>

.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/apache/cordova-plugin-device-motion>`_.

This plugin provides access to the device's accelerometer. The accelerometer is a motion sensor that detects the change (*delta*) in movement relative to the current device orientation, in three dimensions along the *x*, *y*, and *z* axis.

Access is via a global ``navigator.accelerometer`` object.

Although the object is attached to the global scope ``navigator``, it is not available until after the ``deviceready`` event.

::

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.accelerometer);
    }


Plugin ID
================================

::
  
  cordova-plugin-device-motion


Adding the Plugin in Monaca
=========================================

In order to use this plugin, please :ref:`enable <add_plugins>` ``Device Motion`` plugin in Monaca Cloud IDE.


Supported Platforms
=========================================

-  Amazon Fire OS
-  Android
-  BlackBerry 10
-  Browser
-  Firefox OS
-  iOS
-  Tizen
-  Windows Phone 8
-  Windows

API Reference
=========================================

Methods
-------

-  navigator.accelerometer.getCurrentAcceleration
-  navigator.accelerometer.watchAcceleration
-  navigator.accelerometer.clearWatch

Objects
-------

-  Acceleration

navigator.accelerometer.getCurrentAcceleration
----------------------------------------------

Get the current acceleration along the *x*, *y*, and *z* axes.

These acceleration values are returned to the ``accelerometerSuccess`` callback function.

::

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

Example
~~~~~~~

::

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    function onError() {
        alert('onError!');
    }

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

Browser Quirks
~~~~~~~~~~~~~~

Values for X, Y, Z motion are all randomly generated in order to simulate the accelerometer.

Android Quirks
~~~~~~~~~~~~~~

The accelerometer is called with the **SENSOR\_DELAY\_UI** flag, which limits the maximum readout frequency to something between 20 and 60 Hz, depending on the device. Values for **period** corresponding to higher frequencies will result in duplicate samples.

iOS Quirks
~~~~~~~~~~

-  iOS doesn't recognize the concept of getting the current acceleration at any given point.

-  You must watch the acceleration and capture the data at given time intervals.

-  Thus, the ``getCurrentAcceleration`` function yields the last value reported from a ``watchAccelerometer`` call.

navigator.accelerometer.watchAcceleration
-----------------------------------------

Retrieves the device's current ``Acceleration`` at a regular interval, executing the ``accelerometerSuccess`` callback function each time. Specify the interval in milliseconds via the ``acceleratorOptions`` object's ``frequency`` parameter.

The returned watch ID references the accelerometer's watch interval, and can be used with ``navigator.accelerometer.clearWatch`` to stop watching the accelerometer.

::

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           accelerometerOptions);

-  **accelerometerOptions**: An object with the following optional keys:
-  **period**: requested period of calls to accelerometerSuccess with acceleration data in Milliseconds. *(Number)* (Default: 10000)

Example
~~~~~~~

::

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    function onError() {
        alert('onError!');
    }

    var options = { frequency: 3000 };  // Update every 3 seconds

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

iOS Quirks
~~~~~~~~~~

The API calls the success callback function at the interval requested, but restricts the range of requests to the device between 40ms and 1000ms. For example, if you request an interval of 3 seconds, (3000ms), the API requests data from the device every 1 second, but only executes the success callback every 3 seconds.

navigator.accelerometer.clearWatch
----------------------------------

Stop watching the ``Acceleration`` referenced by the ``watchID`` parameter.

::

    navigator.accelerometer.clearWatch(watchID);

-  **watchID**: The ID returned by
   ``navigator.accelerometer.watchAcceleration``.

Example
~~~~~~~

::

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

    // ... later on ...

    navigator.accelerometer.clearWatch(watchID);

Acceleration
------------

Contains ``Accelerometer`` data captured at a specific point in time. Acceleration values include the effect of gravity (9.81 m/s^2), so that when a device lies flat and facing up, *x*, *y*, and *z* values returned should be ``0``, ``0``, and ``9.81``.

Properties
~~~~~~~~~~

-  **x**: Amount of acceleration on the x-axis. (in m/s^2) *(Number)*
-  **y**: Amount of acceleration on the y-axis. (in m/s^2) *(Number)*
-  **z**: Amount of acceleration on the z-axis. (in m/s^2) *(Number)*
-  **timestamp**: Creation timestamp in milliseconds. *(DOMTimeStamp)*



.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`