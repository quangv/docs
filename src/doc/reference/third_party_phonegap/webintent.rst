.. _web_intent_plugin:

-----------------------------------
WebIntent Plugin (Android)
-----------------------------------

.. rst-class:: right-menu

   

Using WebIntent plugin, Monaca apps can start another application installed in the devices. The following sample will start an app that will display a map.


Enable Plugin in Monaca
===========================

1. From the IDE menu, go to :menuselection:`File > Manage Cordova Plugins` or :menuselection:`Config > Manage Cordova Plugins`.

2. Click :guilabel:`Enable` button of the WebIntent to add it into your project.

  .. image:: images/webintent/1.png  
         :width: 600px


.. note:: It's available only to Android platform.

WebIntent Plugin Demo
===========================


.. code-block:: html

  <!DOCTYPE HTML>
  <html>
  <head>
    <title>WebIntent DEMO</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">

    <script type="text/javascript">
      function startActivity() {
        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: 'geo:0, 0?q=' + 'dummy address'},
          function() {},
          function() {alert('Failed to open URL via Android Intent')}
      );
    }
    </script>    
  </head>
  <body>
    <hr> WebIntent test <hr><br>
    <input type="button" onClick ="startActivity()" value ="startActivity()" /><br>
  
  </body>
  </html>


Using ``"url"`` attribute of the ``"startActivity"`` function, an app can specify the target app to be launched. Here are some examples:

.. literalinclude:: webintent/en/index.html
   :language: javascript



.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`