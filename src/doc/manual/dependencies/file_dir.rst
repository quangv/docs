.. _file_folder_configuration:

===============================
File and Folder Structure
===============================

The Monaca application is organized with the following folder and file configurations: 

*For Cordova 5.2 or lower*

================ ============================================================================================================================
``android/``       Storage folder for Android application settings 
``chrome/``        Storage folder for Chrome application settings 
``ios/``           Storage folder for iOS application settings 
``www/``           Storage folder for the main body of the application 
``config.xml``	   Cordova configuration file
================ ============================================================================================================================

*For Cordova 6.2 or higher*

================ ============================================================================================================================
``chrome/``        Storage folder for Chrome application settings 
``plugins/``       Storage folder for additional plugins
``res/``           Resources folder for Android, iOS and Winrt
``www/``           Storage folder for the main body of the application 
``config.xml``	   Cordova configuration file
================ ============================================================================================================================



android Folder
===============================

Android application settings files are stored inside the ``android`` folder. 

=============================== =================================================================================================================================
``AndroidManifest.xml``           Manifest file used when running Android applications
=============================== =================================================================================================================================

For more information about how to use this file, please see :doc:`../../reference/config/android_configuration`. 

.. note:: For Cordova 6.2 or higher, ``AndroidManifest.xml`` file is removed from Monaca framework. Therefore, in order to config Android application settings, use :ref:`custom_config_plugin`. 

chrome Folder
===============================

Chrome application settings files are stored inside the ``chrome`` folder. 

=============================== =================================================================================================================================
``background.js``                 A JavasSript file used when running Chrome applications
``manifest.json``                 A Manifest file used when running Chrome applications
=============================== =================================================================================================================================



ios Folder
===============================

iOS application settings files are stored inside the ``ios`` folder. 

+------------------------------------------+-----------------------------------------------------------------+
| ``MonacaApp-Info.plist``                 | :file:`Info.plist` file used when running iOS applications      |
+------------------------------------------+-----------------------------------------------------------------+

For more information about how to use this file, please see :doc:`../../reference/config/ios_configuration`. 

.. note:: For Cordova 6.2 or higher, ``MonacaApp-Info.plist`` file is removed from Monaca framework. Therefore, in order to config iOS application settings, use :ref:`custom_config_plugin`.


www Folder
===============================

Files of the application's main body are stored here. Files and folders can be arranged freely within this ``www`` folder, but the following files and folders have special significance. 

================ ================================================================================================================================================
``index.html``     The first page to be displayed when the application starts up. The startup file can be changed.
``components/``    The folder created by Monaca for all JS/CSS components used in the project.
================ ================================================================================================================================================


index.html
^^^^^^^^^^^^^^^^^^^^^^^^

The :file:`index.html` file is the starting point for your application. At startup, the information contained in this file is usually the very first thing that will be read.

components Folder
^^^^^^^^^^^^^^^^^^^^^^^^

The folder ``www/components/`` is for all JS/CSS components used in the project. However, the following two files exist in that folder by default regardless of what kinds of components you have added for your project.

+------------------------+-----------------------------------------------------------+
| ``loader.js``          |  A JavaScript file used by Monaca to load the components  |
+------------------------+-----------------------------------------------------------+
| ``loader.css``         |  A style sheet file used by Monaca for the components     |            
+------------------------+-----------------------------------------------------------+


The :file:`loader.js` and :file:`loader.css` files must be read from an HTML file. 

Each component will create its own folder within (one level below) ``www/components/`` folder. 

config.xml File
===============================

The :file:`config.xml` file is a settings file controlling various settings of Cordova. Please refer to the following documentations regarding how to edit :file:`config.xml` file for Android and iOS:

- :ref:`config.xml for Android <config_xml_android>`
- :ref:`config.xml for iOS <config_xml_ios>`

.. note:: For Cordova 6.2 or higher, ``config.xml`` file is also used to config either Android or iOS application settings. Please refer to :ref:`custom_config_plugin`.


.. seealso::

  *See Also*

  - :ref:`custom_config_plugin`
  - :ref:`ios_configuration_file`
  - :ref:`android_configuration_file`
