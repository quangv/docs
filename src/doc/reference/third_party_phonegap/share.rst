.. _share_plugin:

-----------------------------
Share Plugin (Android)
-----------------------------


Share plugin lets an app to share data with other apps like Gmail, DropBox, etc. 

    
Enable Plugin in Monaca
===========================

1. From the IDE menu, go to :menuselection:`File --> Manage Cordova Plugins` or :menuselection:`Config --> Manage Cordova Plugins`.

2. Click :guilabel:`Enable` button of the Share to add it into your project.

  .. image:: images/share/1.png  
         :width: 700px


.. note:: It's available only to Android platform.

Methods
=====================

+------------------+-----------------------------------------------------------------------------------+
|Function Name     |Description                                                                        |
|                  |                                                                                   |
+==================+===================================================================================+
|show(func)        |Show a list of apps for user to choose and share the data when an app is selected. |
+------------------+-----------------------------------------------------------------------------------+


Share Plugin Demo
===========================

.. code-block:: html

  <!DOCTYPE HTML>
  <html>

  <head>
    <title>Cordova - Share Plugin Demo</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">

    <script type="text/javascript">
  
      function shareDemo() {
        window.plugins.share.show(
            {
                subject: 'Subject test',
                text: 'text http://phonegap-fan.com/'
            },
            function() {}, // Success function
            function() {alert('Share failed')} // Failure function
        );
      }
    </script>
  </head>

  <body bgcolor="#ffffff">
    <hr> Share Plugin Demo<hr><br>
    <input type="button" onClick ="shareDemo()" value ="shareDemo" />
  </body>
  </html>


.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`