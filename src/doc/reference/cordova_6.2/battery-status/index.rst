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

=================================
Battery Status Plugin
=================================

.. rst-class:: right-menu

Tested Version: `1.1.2 <https://github.com/apache/cordova-plugin-battery-status/releases/tag/1.1.2>`_

.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/apache/cordova-plugin-battery-status>`_.

This plugin provides an implementation of an old version of the `Battery Status Events API <http://www.w3.org/TR/2011/WD-battery-status-20110915/>`__.

It adds the following three ``window`` events:

-  batterystatus
-  batterycritical
-  batterylow


Plugin ID
=================================

::
  
  cordova-plugin-battery-status


Adding the Plugin in Monaca
=================================

In order to use this plugin, please :ref:`enable <add_plugins>` ``Battery`` plugin in Monaca Cloud IDE.

.. _status_object:

API Reference
=================================

batterystatus event
-------------------

This event fires when the percentage of battery charge changes by at least 1 percent, or if the device is plugged in or unplugged.

The battery status handler is passed an object that contains two properties:

-  **level**: The percentage of battery charge (0-100). *(Number)*

-  **isPlugged**: A boolean that indicates whether the device is plugged in. *(Boolean)*

Applications typically should use ``window.addEventListener`` to attach an event listener after the ``deviceready`` event fires.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Amazon Fire OS
-  iOS
-  Android
-  BlackBerry 10
-  Windows Phone 7 and 8
-  Windows (Windows Phone 8.1 only)
-  Firefox OS
-  Browser (Chrome, Firefox, Opera)

Android and Amazon Fire OS Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Warning: the Android and Fire OS implementations are greedy and prolonged use will drain the device's battery.

Windows Phone 7 and 8 Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``level`` property is *not* supported on Windows Phone 7 because the OS does not provide native APIs to determine battery level. The ``isPlugged`` parameter *is* supported.

Windows Quirks
~~~~~~~~~~~~~~

Windows Phone 8.1 does not support ``isPlugged`` parameter. The ``level`` parameter *is* supported.


batterylow event
~~~~~~~~~~~~~~~~

Fires when the battery charge percentage reaches the low charge threshold. This threshold value is device-specific. Returns an :ref:`object <status_object>` containing battery status.

Example
~~~~~~~

::

    window.addEventListener("batterylow", onBatteryStatus, false);

    function onBatteryStatus(status) {
        // Handle the online event
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }


Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Amazon Fire OS
-  iOS
-  Android
-  BlackBerry 10
-  Windows (Windows Phone 8.1 only)
-  Firefox OS
-  Browser (Chrome, Firefox, Opera)

Windows Phone 8.1 Quirks
~~~~~~~~~~~~~~~~~~~~~~~~

The ``batterylow`` event fires on Winodws Phone 8.1 irrespective of whether the device is plugged in or not. This happens because the OS does not provide an API to detect whether the device is plugged in.


batterycritical event
~~~~~~~~~~~~~~~~~~~~~

Fires when the battery charge percentage reaches the critical charge threshold. This threshold value is device-specific. Returns an :ref:`object <status_object>` containing battery status.


Example
~~~~~~~

::

    window.addEventListener("batterycritical", onBatteryStatus, false);

    function onBatteryStatus(status) {
        // Handle the online event
        console.log("Battery Level: " + status.level + "%\nRecharge Soon!");
    }


Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Amazon Fire OS
-  iOS
-  Android
-  BlackBerry 10
-  Firefox OS
-  Windows (Windows Phone 8.1 only)
-  Browser (Chrome, Firefox, Opera)

Windows Phone 8.1 Quirks
~~~~~~~~~~~~~~~~~~~~~~~~

The ``batterycritical`` event fires on Windows Phone 8.1 irrespective of whether the device is plugged in or not. This happens because the OS does not provide an API to detect whether the device is plugged in.


.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`