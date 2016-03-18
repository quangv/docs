.. _websocket_server_plugin:

-----------------------------------------
WebSocket Server Plugin (Android)
-----------------------------------------

.. rst-class:: right-menu


Using WebSocket Server plugin, you can create different channels over one HTTP connection. Please refer to :ref:`http_server_plugin` on how to establish an HTTP connection with Monaca.


Enable Plugin in Monaca
===========================

1. From the IDE menu, go to :menuselection:`File --> Manage Cordova Plugins` or :menuselection:`Config --> Manage Cordova Plugins`.

2. Click :guilabel:`Enable` button of the WebsocketServer to add it into your project.

  .. image:: images/websocket/1.png  
         :width: 600px


.. note:: It's available only to Android platform.


Methods
===============================

With WebSocket Server plugin in Monaca, the following functions and events can be used:

====================================================================== =================================================================================
Method/Property                                                         Description
====================================================================== =================================================================================
:ref:`plugins.webSocketServer()<m.WebSocketServer>`                     Create a WebSocket Server object 

:ref:`plugins.webSocketServer.start()<ss.start>`                        Start WebSocket Server

:ref:`plugins.webSocketServer.stop()<ss.stop>`                          Stop WebSocket Server

:ref:`plugins.webSocketServer.getAddress()<ss.getAddress>`              Get address of WebSocket Server

:ref:`plugins.webSocketServer.getClients()<ss.getClients>`              Get all clients connected to a WebSocket Server

:ref:`plugins.webSocketServer.getStatus()<ss.getStatus>`                Get current status of a WebSocket Server

:ref:`plugins.webSocketServer.send()<ss.send>`                          Send a message to a specific client

:ref:`plugins.webSocketServer.sendToAllClients()<ss.ToAllClients>`      Send a message to all clients

:ref:`plugins.webSocketServer.onClientConnected<ss.ClientCon>`          Client is Connected

:ref:`plugins.webSocketServer.onClientDisconnected<ss.ClientDiscon>`    Client is Disconnected

:ref:`plugins.webSocketServer.onmessage<ss.onmessage>`                  Message has arrived

:ref:`plugins.webSocketServer.onerror<ss.onerror>`                      Error has occurred
====================================================================== =================================================================================

.. rst-class:: function-reference
.. _m.WebSocketServer:

plugins.webSocketServer()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a WebSocket Server object with an appropriate WebSocket Server port number. The port number has to be free which hasn't been used yet. 

:dfn:`plugins.webSocketServer([PORT: number]) : Object`

Parameter
  ============== =========================================================================================================================================
  ``PORT``         The port number of WebSocket Server (default: ``3001``).
  ============== =========================================================================================================================================

Return Value
  ==================================================================================================== ==================
    A WebSocket Server object is returned.
  ==================================================================================================== ==================

Example
  The following example indicates how to create WebSocket Server objects with default and specific port numbers.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // a WebSocket Server object with port 3001 (default) is created

      var socketServer_1 = plugins.webSocketServer(2001); 
      // a WebSocket Server object with port 2001 is created
    }

.. rst-class:: function-reference

.. _ss.start:

plugins.webSocketServer.start()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Start WebSocket Server. 

:dfn:`plugins.webSocketServer.start(onSuccess: callback, onFailure: callback)`

Parameter
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to start a WebSocket Server.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      socketServer.start(
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display something similar to this: 
          //{"port":3001,"event":"server:started","ip":"10.0.6.167"}
        }, 
        function(failure) {
          console.log('error :' + failure );
        }
      );
    }

.. rst-class:: function-reference

.. _ss.stop:

plugins.webSocketServer.stop()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Stop WebSocket Server. 

:dfn:`plugins.webSocketServer.stop(onSuccess: callback, onFailure: callback)`

Parameter
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to stop a WebSocket Server.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      socketServer.stop(
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

.. _ss.getAddress:

plugins.webSocketServer.getAddress()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get address (IP and port number) of a WebSocket Server. 

:dfn:`plugins.webSocketServer.getAddress(onSuccess: callback, onFailure: callback)`

Parameter
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to retrieve the address of a WebSocket Server.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      socketServer.getAddress(
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display something similar to this:
          //{"port":3001,"ip":"10.0.6.112"}
        }, 
        function(failure) {
          console.log('error ' + failure );
        }
      );
    }


.. rst-class:: function-reference

.. _ss.getClients:

plugins.webSocketServer.getClients()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get all clients connected to a WebSocket Server. 

:dfn:`plugins.webSocketServer.getClients(onSuccess: callback, onFailure: callback)`

Parameter
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to retrieve all clients currently connected to a WebSocket Server.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      socketServer.getClients(
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display something similar to this:
          //["/10.0.6.164:56319","/10.0.6.164:56309"]
        }, 
        function(failure) {
          console.log('error ' + failure );
        }
      );
    }

.. rst-class:: function-reference

.. _ss.getStatus:

plugins.webSocketServer.getStatus()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get current status of a WebSocket Server. 

:dfn:`plugins.webSocketServer.getStatus(onSuccess: callback, onFailure: callback)`

Parameter
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to retrieve current status of a WebSocket Server.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      socketServer.getStatus(
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display something similar to this:
          //{"status":"started","ip":"10.0.6.167","port":3001,"clients":["/10.0.6.164:56319","/10.0.6.164:56309"]}
        }, 
        function(failure) {
          console.log('error ' + failure );
        }
      );
    }


.. rst-class:: function-reference

.. _ss.send:

plugins.webSocketServer.send()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Send a message to a specific client currently connected to a WebSocket Server.

:dfn:`plugins.webSocketServer.send(clientId: string, message: string, onSuccess: callback, onFailure: callback)`


Parameter
  ============== =========================================================================================================================================
  ``clientId``     ID of the client that you intend to send a message to.
  ``message``      Text content to send.
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to send a message to a currently connected client. ``clientId`` is used to distinguish each client. You can receive ``clientId`` by ``onClientConnected`` event or ``webSocketServer.getClients()`` function.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      socketServer.onClientConnected = function(result){
        var clientID = result.client;
        var message = "Hello World";
        socketServer.send(clientID,message
          function(success) {
            console.log(JSON.stringify(success));
            //It'd display this:
            //undefined
          }, 
          function(failure) {
            console.log('error ' + failure );
          }  
        );
      }
    }

.. rst-class:: function-reference

.. _ss.ToAllClients:

plugins.webSocketServer.sendToAllClients()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Send a message to all clients currently connected to a WebSocket Server.

:dfn:`plugins.webSocketServer.sendToAllClients(message: string, onSuccess: callback, onFailure: callback)`


Parameter
  ============== =========================================================================================================================================
  ``message``      Text content to send.
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to send a message to all clients.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      var message = "Hello World";
      socketServer.sendToAllClients(message, 
        function(success) {
          console.log(JSON.stringify(success));
          //It'd display something similar to this:
          //{"clientsSent":2,"send":"success"}
        }, 
        function(failure) {
          console.log('error ' + failure );
        }
      );
    }


.. rst-class:: function-reference

.. _ss.ClientCon:

plugins.webSocketServer.onClientConnected
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

An event triggered when a client is successfully connected to a WebSocket Server.

:dfn:`plugins.webSocketServer.onClientConnected = callback`

Parameter
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to handle an ``OnClientConnected`` event.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      socketServer.onClientConnected = function(result){
        console.log(JSON.stringify(result));
        //It'd display something similar to this:
        //{"client":"/10.0.6.164:56332","event":"connected"}
      }
    }

.. rst-class:: function-reference

.. _ss.ClientDiscon:

plugins.webSocketServer.onClientDisconnected
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

An event triggered when a client is successfully disconnected from a WebSocket Server.

:dfn:`plugins.webSocketServer.onClientDisconnected = callback`

Parameters
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to handle an ``onClientDisconnected`` event.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      socketServer.onClientDisconnected = function(result){
        console.log(JSON.stringify(result));
        //It'd display something similar to this:
        //{"message":"","client":"/10.0.6.164:56389","event":"disconnected"}
      }
    }

.. rst-class:: function-reference

.. _ss.onmessage:

plugins.webSocketServer.onmessage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

An event triggered when WebSocket Server received a message from a client.

:dfn:`plugins.webSocketServer.onmessage = callback`

Parameter
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to handle an ``onmessage`` event.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      socketServer.onmessage = function(result){
        console.log(JSON.stringify(result));
        //It'd display something similar to this:
        //{"message":"hi","client":"/10.0.6.164:56394","event":"message"}
      }
    }

.. rst-class:: function-reference

.. _ss.onerror:

plugins.webSocketServer.onerror
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

An event triggered when WebSocket Server encounters errors.

:dfn:`plugins.webSocketServer.onerror = callback`

Parameter
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Return Value
  ============== =========================================================================================================================================
  ``None``
  ============== =========================================================================================================================================

Example
  The following example indicates how to handle an ``onerror`` event.

  .. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var socketServer = plugins.webSocketServer(); 
      // WebSocket Server object (port:3001)
      ...
      socketServer.onerror = function(result){
        console.log(JSON.stringify(result));
        //It'd display something similar to this:
        //{"message":"","client":"/10.0.6.164:56394","event":"error"}
      }
    }


.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`