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

Device Plugin
=========================

.. rst-class:: right-menu


.. raw:: html

  <div>
    <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-device/blob/master/RELEASENOTES.md#0213-dec-02-2014">0.2.13</a></div>   
    <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
    <br/>
  </div>

.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/apache/cordova-plugin-device>`_.


This plugin defines a global ``device`` object, which describes the
device's hardware and software. Although the object is in the global
scope, it is not available until after the ``deviceready`` event.

::

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(device.cordova);
    }

Plugin ID
-----------------------

::
  
  org.apache.cordova.device

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please enable ``org.apache.cordova.device`` plugin in Monaca Cloud IDE. Please refer to :ref:`standard_plugins` docs for how to enable the plugin in Monaca. 


Properties
----------

-  device.cordova
-  device.model
-  device.platform
-  device.uuid
-  device.version

device.cordova
--------------

Get the version of Cordova running on the device.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Amazon Fire OS
-  Android
-  iOS

device.model
------------

The ``device.model`` returns the name of the device's model or product.
The value is set by the device manufacturer and may be different across
versions of the same product.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Quick Example
~~~~~~~~~~~~~

::

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // Browser:    Google Chrome   returns "Chrome"
    //             Safari          returns "Safari"
    // iOS:     for the iPad Mini, returns iPad2,5; iPhone 5 is iPhone 5,1. See http://theiphonewiki.com/wiki/index.php?title=Models
    //
    var model = device.model;

Android Quirks
~~~~~~~~~~~~~~

-  Gets the `product
   name <http://developer.android.com/reference/android/os/Build.html#PRODUCT>`__
   instead of the `model
   name <http://developer.android.com/reference/android/os/Build.html#MODEL>`__,
   which is often the production code name. For example, the Nexus One
   returns ``Passion``, and Motorola Droid returns ``voles``.

device.platform
---------------

Get the device's operating system name.

::

    var string = device.platform;

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Quick Example
~~~~~~~~~~~~~

::

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry 10"
    //   - Browser:         returns "MacIntel" on Mac
    //                      returns "Win32" on Windows
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;

device.uuid
-----------

Get the device's Universally Unique Identifier
(`UUID <http://en.wikipedia.org/wiki/Universally_Unique_Identifier>`__).

::

    var string = device.uuid;

Description
~~~~~~~~~~~

The details of how a UUID is generated are determined by the device
manufacturer and are specific to the device's platform or model.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Quick Example
~~~~~~~~~~~~~

::

    // Android: Returns a random 64-bit integer (as a string, again!)
    //          The integer is generated on the device's first boot
    //
    // BlackBerry: Returns the PIN number of the device
    //             This is a nine-digit unique integer (as a string, though!)
    //
    // iPhone: (Paraphrased from the UIDevice Class documentation)
    //         Returns a string of hash values created from multiple hardware identifies.
    //         It is guaranteed to be unique for every device and can't be tied
    //         to the user account.
    // Windows Phone 7 : Returns a hash of device+current user,
    // if the user is not defined, a guid is generated and will persist until the app is uninstalled
    // Tizen: returns the device IMEI (International Mobile Equipment Identity or IMEI is a number
    // unique to every GSM and UMTS mobile phone.
    var deviceID = device.uuid;

iOS Quirk
~~~~~~~~~

The ``uuid`` on iOS is not unique to a device, but varies for each
application, for each installation. It changes if you delete and
re-install the app, and possibly also when you upgrade iOS, or even
upgrade the app per version (apparent in iOS 5.1). The ``uuid`` is not a
reliable value.

device.version
--------------

Get the operating system version.

::

    var string = device.version;

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android 2.1+
-  iOS

Quick Example
~~~~~~~~~~~~~

::

    // Android:    Froyo OS would return "2.2"
    //             Eclair OS would return "2.1", "2.0.1", or "2.0"
    //             Version can also return update level "2.1-update1"
    //
    // BlackBerry: Torch 9800 using OS 6.0 would return "6.0.0.600"
    //
    // Browser:    Returns version number for the browser
    //
    // iPhone:     iOS 3.2 returns "3.2"
    //
    // Windows Phone 7: returns current OS version number, ex. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
