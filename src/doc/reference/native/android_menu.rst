.. _native_menu_android:

=============================
Native Menu (Android)
=============================

.. rst-class:: right-menu


In Android, native menu can be manipulated using :file:`monaca.js`. The menus are displayed when Menu button is pressed.

Menu File (app.menu)
-----------------------------

Define all the menus used in your app here in JSON format. Put the definition in the :file:`app.menu` file under :guilabel:`www` folder. 

.. literalinclude:: @android_menu/index.html
   :language: javascript

  

The above snippet defines 2 menus. There are several attributes you can use as shown in the table below:

===================== ======================================================================================= ===============
Attribute                Meaning                                                                               Value             
===================== ======================================================================================= ===============
name                  Menu item's display name                                                                 String         
action                The code to run when the menu is pressed                                                 String         
image                 Specify the image of the menu item. The path of the image is relative to "www" folder.    String         
===================== ======================================================================================= ===============

UI File Integration
--------------------------------

You may include the defined menu in any page's UI file. The extension of a UI file is ``.ui``. The UI file name must start with its HTML page file name but with ``.ui`` extension and its content is in JSON format.

For instance, to attach a UI file to :file:`index.html` page, just create a file named :file:`index.ui`.

Then, you can include the defined menu in the UI file as shown below:


.. literalinclude:: @android_menu/index1.html
   :language: javascript


.. note:: ``"default"`` menu definition is applied to all pages.


Example of Menu Definition
--------------------------------

*app.menu*:

.. literalinclude:: @android_menu/index2.html
   :language: javascript


*index.ui*:

.. literalinclude:: @android_menu/index3.html
   :language: javascript

  
*index.html*:

.. literalinclude:: @android_menu/index4.html
   :language: html


More detail Example:

:download:`Native Menu Example <download/android_menu/menu.zip>`


.. seealso::

  *See Also*

  - :ref:`native_control`
  - :ref:`toolbar_component`
  - :ref:`hardware_key`
  - :ref:`screen_orientation`
  - :ref:`background`
  - :ref:`tabbar_component`
  - :ref:`control_from_Javascript`