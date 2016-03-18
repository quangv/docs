.. _http_server_plugin:

-----------------------------------
  HTTP Server Plugin (Android)
-----------------------------------

.. rst-class:: right-menu


Use HTTP Server plugin to establish an HTTP connection. 


Enable Plugin in Monaca
===========================

1. From the IDE menu, go to :menuselection:`File --> Manage Cordova Plugins` or :menuselection:`Config --> Manage Cordova Plugins`.

2. Click :guilabel:`Enable` button of the HttpServer to add it into your project.

  .. image:: images/http_server/1.png  
         :width: 600px


.. note:: It's available only to Android platform.


Methods
=====================

With HTTP Server plugin in Monaca, the following functions can be used:

================================================================ =======================================================================================
Method/Property                                                   Description
================================================================ =======================================================================================
:ref:`plugins.httpServer()<plugins.httpServer>`                   Create an HTTP Server object 

:ref:`plugins.httpServer.start()<httpServer.start>`               Start HTTP Server

:ref:`plugins.httpServer.stop()<httpServer.stop>`                 Stop HTTP Server

:ref:`plugins.httpServer.getAddress()<httpServer.getAddress>`     Get address of an HTTP Server

:ref:`plugins.httpServer.getStatus()<httpServer.getStatus>`       Get current status of an HTTP Server

:ref:`plugins.httpServer.rootDirectoryAbsolutePath<hs.AbsPath>`   An absolute path of root directory
================================================================ =======================================================================================

.. rst-class:: function-reference
.. _plugins.httpServer:

plugins.httpServer() - Create an HTTP Server Object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create an HTTP Server object with an appropriate HTTP Server port number and server root directory. The port number has to be free which hasn't been used yet. 

:dfn:`plugins.httpServer([serverRootDir: string, PORT: string]): Object`

Parameter
  =================== =========================================================================================================================================
  ``serverRootDir``     Root directory of HTTP Server (default: ``""``). Please note that the ``baseUrl`` is ``"/www/"``.
  ``PORT``              The port number of HTTP Server (default: ``3000``).
  =================== =========================================================================================================================================

Return Value
  ============================================================================= ===============================================================================
  An HTTP Server object is returned.
  ============================================================================= ===============================================================================

Example
  The following example indicates how to create HTTP Server objects with default and specific port numbers.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var httpServer = plugins.httpServer(); 
      // an HTTP Server object with port=3000 and serverRootDir = "/www/" (default) is created

      var httpServer_1 = plugins.httpServer("client", 2000); 
      // an HTTP Server object with port=2000 and serverRootDir = "/www/client/" is created
    }

  .. rst-class:: function-reference

.. _httpServer.start:

plugins.httpServer.start() - Start HTTP Server
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Start an HTTP Server. 

:dfn:`plugins.httpServer.start(onSuccess: callback, onFailure: callback)`

Parameter
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Return Value
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Example
  The following example indicates how to start an HTTP Server.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var httpServer = plugins.httpServer(); 
      // HTTP Server object (port:3000, serverRootDir = "/www/")

      httpServer.start(
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display something similar to this: 
          //{"port":3000,"ip":"10.0.6.167"}
        }, 
        function(failure) {
          console.log('error :' + failure );
        }
      );
    }

.. rst-class:: function-reference

.. _httpServer.stop:

plugins.httpServer.stop() - Stop HTTP Server
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Stop an HTTP Server. 

:dfn:`plugins.httpServer.stop(onSuccess: callback, onFailure: callback)`

Parameter
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Return Value
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Example
  The following example indicates how to stop an HTTP Server.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var httpServer = plugins.httpServer(); 
      // HTTP Server object (port:3000, serverRootDir = "/www/")

      httpServer.stop(
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display: undefined
        }, 
        function(failure) {
          console.log('error :' + failure );
        }
      );
    }


.. rst-class:: function-reference

.. _httpServer.getAddress:

plugins.httpServer.getAddress() - Get Address
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get address(IP and port number) of an HTTP Server which has already started. 

:dfn:`plugins.httpServer.getAddress(onSuccess: callback, onFailure: callback)`

Parameter
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Return Value
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Example
  The following example indicates how to retrieve the address of an HTTP Server which has already started.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var httpServer = plugins.httpServer(); 
      // HTTP Server object (port:3000, serverRootDir = "/www/")
      ...
      httpServer.getAddress(
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display something similar to this:
          //{"port":3000,"ip":"10.0.6.167"}
        }, 
        function(failure) {
          console.log('error ' + failure );
        }
      );
    }


.. rst-class:: function-reference

.. _httpServer.getStatus:

plugins.httpServer.getStatus() - Get Status
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get current status of an HTTP Server which has already started. 

:dfn:`plugins.httpServer.getStatus(onSuccess: callback, onFailure: callback)`

Parameter
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Return Value
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Example
  The following example indicates how to retrieve current status of an HTTP Server which has already started.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var httpServer = plugins.httpServer(); 
      // HTTP Server object (port:3000, serverRootDir = "/www/")
      ...
      httpServer.getStatus(
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display something similar to this:
          //{"port":3000,"status":"started","rootDirectoryAbsolutePath":"/data/data/mobi.monaca.debugger/files/projects/51ee7ebefd1734063c0b4572/assets/www/","ip":"10.0.6.167"}
        }, 
        function(failure) {
          console.log('error ' + failure );
        }
      );
    }


.. rst-class:: function-reference

.. _hs.AbsPath:

plugins.httpServer.rootDirectoryAbsolutePath - Absolute Path of Root Directory
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get an absolute path of root directory of HTTP server.

:dfn:`plugins.httpServer.rootDirectoryAbsolutePath: string`


Parameter
  =================== =========================================================================================================================================
  ``None``
  =================== =========================================================================================================================================

Return Value
  ================================================================================== =================
    A string of root directory's absolute path is returned.
  ================================================================================== =================

Example
  The following example indicates how to get an absolute path of root directory of HTTP server.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var httpServer = plugins.httpServer(); 
      // HTTP Server object (port:3000, serverRootDir = "/www/")
      
      var rootDir = httpServer.rootDirectoryAbsolutePath;
      console.log(rootDir);
      //It'd display something similar to this: "/data/monaca.mobi/files/projects/foo/assets/www"
    }

.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`