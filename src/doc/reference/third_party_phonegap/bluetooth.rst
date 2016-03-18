.. _bluetooth_plugin:

-----------------------------
Bluetooth Plugin (Android)
-----------------------------

.. rst-class:: right-menu



.. note:: It's available for Android platform only. Also, this plugin only supports SPP (Serial Port Profile).

Enable Bluetooth Plugin in Monaca
=======================================

1. From the IDE menu, go to :menuselection:`File --> Manage Cordova Plugins` or :menuselection:`Config --> Manage Cordova Plugins`.

2. Click :guilabel:`Enable` button of the BluetoothPlugin to add it into your project.

  .. image:: images/bluetooth/1.png  
         :width: 600px


Methods
==========================


For convenience, here we assign the bluetooth plugin to ``"g_bluetoothPlugin"`` variable. From now on, Bluetooth functionality can be utilized through our ``"g_bluetoothPlugin"`` variable.



+----------------------------------------------------------------------+----------------------------------------------------------------+
|Function Name                                                         |Description                                                     |
+======================================================================+================================================================+
|isSupported()                                                         |Check whether the device support the Bluetooth API.             |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|isEnabled(onSuccess, onError)                                         |Check if the device's Bluetooth is enabled or not.              |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|enable(onSuccess, onError)                                            |Enable Bluetooth connection.                                    |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|disable(onSuccess, onError)                                           |Disable Bluetooth connection.                                   |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|startDiscovery(onDeviceDiscovered, onDiscoveryFinished, onError, opts)|Discover nearby Bluetooth devices.                              |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|getUuids(onSuccess, onError, address)                                 |List the UUID of the available devices. This function returns   | 
|                                                                      |multiple UUIDs, but the last one is the correct UUID for        | 
|                                                                      |Bluetooth connection.                                           |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|connect(onSuccess, onError, opts)                                     |Connect to a Bluetooth device using RFCOMM protocol.            |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|write(onSuccess, onError, data, encoding, forceString)                |Write to the connected Bluetooth device.                        |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|startConnectionManager(onDataRead, onError)                           |Start connection management: allowing read and write.           |
+----------------------------------------------------------------------+----------------------------------------------------------------+
|stopConnectionManager(onSuccess, onError)                             |Stop connection management. It doesn't invoke disconnection.    |
|                                                                      |You can reinvoke startConnectionManager without having to invoke|
|                                                                      |connect first.                                                  | 
+----------------------------------------------------------------------+----------------------------------------------------------------+
|disconnect(onSuccess, onError)                                        |Disconnect from a connected Bluetooth device.                   |
+----------------------------------------------------------------------+----------------------------------------------------------------+


Bluetooth Plugin Demo
==================================

.. code-block:: html

	<!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <script src="components/loader.js"></script>
        <link rel="stylesheet" href="components/loader.css">
        <script>
            var g_socketid = -1;
            var g_bluetoothPlugin = null;
            var btDevicesSelect = null;
            var uuidsSelect = null;

            document.addEventListener('deviceready', function () {
                console.log("Cordova is now loaded!");
                g_bluetoothPlugin  = window.bluetooth;
                
                //Check if Bluetooth is supported in the device
                if (!g_bluetoothPlugin.isSupported()) {
                    console.log("Bluetooth is not supported!");
                    document.getElementById("status").innerHTML = "Bluetooth is not supported!";
                } else {
                    //check bluetooth status
                    g_bluetoothPlugin.isEnabled(
                        function(status){
                            if (status){
                                document.getElementById("status").innerHTML = "Enabled";    
                            } else {
                                document.getElementById("status").innerHTML = "Disabled";    
                            }
                            
                        },
                        function(error){
                            console.log('Fail to get bluetooth status: ' + error);
                        }
                    );
                }
            }, false);

            function enableBT() {
                g_bluetoothPlugin.enable(
                    function() {
                        document.getElementById("status").innerHTML = "Enabled";
                    },
                    function(error) {
                        console.log( 'Error enabling bluetooth: ' + error );
                    }
                );
            }

            function disableBT() {
                g_bluetoothPlugin.disable( 
                    function() {
                        document.getElementById("status").innerHTML = "Disabled";
                    }, function(error) {
                        console.log( 'Error disabling bluetooth: ' + error );
                    } );
              }

            function discoverDevices() {
                console.log('Start discovering');
                document.getElementById("discovery_status").innerHTML = "Scanning... Please wait.";
                
                var devices = new Array();
                g_bluetoothPlugin.startDiscovery(
                    function(device) {
                        devices.push(device);
                    }, 
                    function(){
                        var list = document.getElementById('bt-devices-select');
                        list.innerHTML = "";
                        for( var i = 0; i < devices.length; i++ ){
                            var element = document.createElement('option');
                            element.value = devices[i].address;
                            element.innerHTML = devices[i].name + "::" + devices[i].address;
                            list.appendChild(element);
                        }
                        btDevicesSelect = new String(devices[0].address);
                        console.log("Detection finished");
                        document.getElementById("discovery_status").innerHTML = "Scanning Completed.";
                    },
                    function(error) { 
                        console.log( 'Error: ' + JSON.stringify(error) ); 
                    });
            }

            function listUUIDs() {
                console.log("Selected address: " + btDevicesSelect);
                document.getElementById("listing_status").innerHTML = "Listing... Please wait.";
                
                g_bluetoothPlugin.getUuids(
                    function(uuids) {
                        uuidsAll = uuids.uuids;
                        var list = document.getElementById('bt-device-uuids');
                        for( var i = 0; i < uuidsAll.length; i++ ) {
                            var element = document.createElement('option');
                            element.value = uuidsAll[i];
                            element.innerHTML = uuidsAll[i];
                            list.appendChild(element);console.log(uuidsAll[i]);
                        }
                        uuidsSelect = uuidsAll[uuidsAll.length-1];
                        console.log( JSON.stringify(uuids) );
                        document.getElementById("listing_status").innerHTML = "Listing completed.";
                  },
                  function(error) {
                      console.log( 'Error: ' + JSON.stringify(error) );
                  },
                  btDevicesSelect
              );
            }
            
            function openRfcomm() {
                console.log("Selected address: " + btDevicesSelect + " and uuids: " + uuidsSelect);
                var opts = {'address': btDevicesSelect, 'uuid': uuidsSelect};
            
                g_bluetoothPlugin.connect(
                    function() { 
                        document.getElementById("connect_status").innerHTML = "Connected";
                    },
                    function(error) { 
                        console.log( 'Error:' + error );
                        document.getElementById("connect_status").innerHTML = "Fail to Connect.";
                    },
                    opts
                );
            }
            
            function closeRfcomm() {
                g_bluetoothPlugin.disconnect(
                    function() { 
                        document.getElementById("connect_status").innerHTML = "Disconnected";
                    },
                    function(error) { 
                        console.log( 'Error:' + error );
                        document.getElementById("connect_status").innerHTML = "Fail to disconnect.";
                    }
                );
            }
            
            function changeBtSelect(){
                var select = document.getElementById('bt-devices-select');
                var options = document.getElementById('bt-devices-select').options;
                btDevicesSelect = options.item(select.selectedIndex).value;
                console.log(btDevicesSelect);
            }
            
            function changeUuidSelect(){
                var select = document.getElementById('bt-device-uuids');
                var options = document.getElementById('bt-device-uuids').options;
                uuidsSelect = options.item(select.selectedIndex).value;
            }
        </script>
    </head>

    <body>
    	<hr><h3 align="center">Bluetooth Plugin Demo</h3><hr>
        <div align="center">
            <button onclick="enableBT();">Enable</button>
            <button onclick="disableBT();">Disable</button>
        </div>
        Bluetooth Status: <span id="status"></span>
        <br /><br />
        <div align="center">
            <button onclick="discoverDevices();">Discover Available Devices</button>
            <br /><span id="discovery_status"></span><br />
            <select id='bt-devices-select' onchange="changeBtSelect()"></select>
        </div>
        <br /><br />
        <div align="center">
            <button id='bt-pair' onclick="listUUIDs();">List UUIDs of Selected Device</button>
            <br /> <span id="listing_status"></span><br />
            <select id='bt-device-uuids' onchange="changeUuidSelect()"></select><br />
            <button id='bt-connect' onclick="openRfcomm();">Connect</button>
            <button id='bt-disconnect' onclick="closeRfcomm();">Disconnect</button>
        </div>  
        Connection Status: <span id="connect_status"></span><br />
    </body>
    </html>




.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`