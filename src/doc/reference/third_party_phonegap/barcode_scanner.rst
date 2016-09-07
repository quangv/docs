.. _barcode_scanner_plugin:

-------------------------------------------
BarcodeScanner Plugin
-------------------------------------------


Enable Plugin in Monaca
===========================

1. From the IDE menu, go to :menuselection:`File --> Manage Cordova Plugins` or :menuselection:`Config --> Manage Cordova Plugins`.

2. Click :guilabel:`Enable` button of the BarcodeScanner to add it into your project.

  .. image:: images/barcode_scanner/1.png  
         :width: 700px


BarcodeScanner Demo
===========================

.. code-block:: html

    <!DOCTYPE HTML>
  	<html>
  	<head>
	    <title>Barcode Scanner DEMO</title>

	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, user-scalable=no">
	    <script src="components/loader.js"></script>
	    <link rel="stylesheet" href="components/loader.css"> 

	    <script type="text/javascript">

	    function scanBarcode() {
	        window.plugins.barcodeScanner.scan( function(result) {
	                alert("We got a barcode\n" +
	                          "Result: " + result.text + "\n" +
	                          "Format: " + result.format + "\n" +
	                          "Cancelled: " + result.cancelled);
	            }, function(error) {
	                alert("Scanning failed: " + error);
	            }
	      	);

	    }
	    </script>
  	</head>

  	<body>
    	<hr> BarcodeReader DEMO <hr><br>
    	<input type="button" onClick ="scanBarcode()" value ="Scan" />
  	</body>
  	</html>

  
.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`
