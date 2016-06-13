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

===========================
Console Plugin
===========================

.. rst-class:: right-menu

Tested Version: `1.0.3 <https://github.com/apache/cordova-plugin-console/releases/tag/1.0.3>`_


.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/apache/cordova-plugin-console>`_.

This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows. This plugin defines a global ``console`` object.

Although the object is in the global scope, features provided by this plugin are not available until after the ``deviceready`` event.

::

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("console.log works well");
    }


Plugin ID
===========================

::
  
  cordova-plugin-console


Adding the Plugin in Monaca
=========================================

In order to use this plugin, please :ref:`enable <add_plugins>` ``Console`` plugin in Monaca Cloud IDE.


API Reference
=========================================

Android Quirks
~~~~~~~~~~~~~~

On some platforms, console.log() will act on multiple arguments such as console.log("1","2"). However, only Android ill act on the first argument. Subsequent arguments to console.log() will be ignored because of the limitation of Android itself.

Supported Methods
~~~~~~~~~~~~~~~~~

The plugin support the following methods of the ``console`` object:

-  console.log
-  console.error
-  console.exception
-  console.warn
-  console.info
-  console.debug
-  console.assert
-  console.dir
-  console.dirxml
-  console.time
-  console.timeEnd
-  console.table

Partially supported Methods
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Methods of the ``console`` object which are implemented, but do nothing:

-  console.clear
-  console.trace
-  console.groupEnd
-  console.timeStamp
-  console.profile
-  console.profileEnd
-  console.count

Supported formatting
~~~~~~~~~~~~~~~~~~~~

The following formatting options available:

-  %j - format arg as JSON
-  %o - format arg as JSON
-  %c - format arg as ''. No color formatting could be done.
-  %% - replace with '%'.

Any other char following ``%`` will format its arg via ``toString()``

.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`
