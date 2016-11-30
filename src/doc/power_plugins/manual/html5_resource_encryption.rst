.. _html5_resource_encryption_plugin:

----------------------------------------------------------
Monaca HTML5 Resource Encryption
----------------------------------------------------------


This plugin provides the encryption function for HTML5 assets bundled up with the built app in Monaca and the decoding function for application execution time.

.. note:: This plugin is available to Enterprise users only.

The plugin has different features depending on the Cordova version of your project:

- :ref:`cordova_6_2_projects`
- :ref:`cordova_5_2_and_lower_projects`


.. _cordova_6_2_projects:

For Cordova 6.2 Projects
==================================================

The plugin for Cordova 6.2 projects has two additional features:

1. Developers can choose the encrypted directories other than www. For example, “www/data, www/js” etc.
2. The decryption can now be done manually. In other words, the encrypted folder can't be read unless the decrypt function is called.

Supported Platforms
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- Cordova 6.2
- iOS 7 or higher
- Android 6.0 or higher

Encryption Scheme
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

====================================== =======================================================================
Encryption Method                        AES
Key Length                               256bit
====================================== =======================================================================


Enabling the Plugin in Monaca Cloud IDE
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. From Monaca Cloud IDE menu, go to :menuselection:`File --> Manage Cordova Plugins` or :menuselection:`Config --> Manage Cordova Plugins`.

2. Click :guilabel:`Enable` button of the ``Encrypt`` plugin.

  .. figure:: images/html5_resource_encryption/5.png  
      :width: 700px
      :align: left

  .. rst-class:: clear

3. Find the newly added plugin under the *Enabled Plugins* section. Then, hover the plugin and click :guilabel:`Configure` button.

  .. figure:: images/html5_resource_encryption/6.png
      :width: 700px
      :align: left

  .. rst-class:: clear

4. Enter parameter(s) for this plugin. Then, click :guilabel:`OK` button. Available parameters are as follows:

  +-------------------+--------------------------------------------------------------------------------------------------------------+
  | Parameter         | Description                                                                                                  |
  +===================+==============================================================================================================+
  | SECRET            | [Required] (String) Password/secret for the encryption.                                                      |
  +-------------------+--------------------------------------------------------------------------------------------------------------+
  | TARGETS           | [Optional] (String) Target folder of the project files to be encrypted. Default folder is ``www``.           |
  +-------------------+--------------------------------------------------------------------------------------------------------------+
  | AUTO_DECRYPT      | [Optional] (Boolean) Auto decryption options:                                                                |
  |                   |                                                                                                              |
  |                   |   - ``1``: (default) for enabling auto decryption                                                            |
  |                   |   - ``0``: for disabling auto decryption                                                                     |
  +-------------------+--------------------------------------------------------------------------------------------------------------+
  
  .. figure:: images/html5_resource_encryption/7.png
      :width: 510px
      :align: left

  .. rst-class:: clear


Manual Decryption
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can also manually decrypt the configured target folder. The target folder is encrypted and can't be read until the ``monaca.Encrypt.setDecryptHash()`` function is executed. In other words, it can not be read with the script tag in :file:`index.html` file.

Please follow the steps below on how to use manual decryption:

Step 1: Enabling the Manual Decryption Option
----------------------------------------------------------

In order to enable manual decryption, please set ``AUTO_DECRYPT`` to ``0`` in the plugin configuration (Step 4 in the previous section). 

  .. figure:: images/html5_resource_encryption/11.png
      :width: 512px
      :align: center

  .. rst-class:: clear


Step 2: Getting the Hash Code for Decryption
----------------------------------------------------------

A hash code is required when calling ``monaca.Encrypt.setDecryptHash()`` function to decrypt the target folder(s). In order to find the hash code, please do as follows:

1. Build your project.
2. Once your build is completed, click on :guilabel:`Download` button.

  .. figure:: images/html5_resource_encryption/8.png
      :width: 700px
      :align: left

  .. rst-class:: clear

3. Click on :guilabel:`here` (as shown in the screenshot below). Then, the build log will be shown. 

  .. figure:: images/html5_resource_encryption/10.png
      :width: 604px
      :align: left

  .. rst-class:: clear

5. Copy the build log and paste it in any text editor and find the hash code which looks like this:

  .. code-block:: javascript

      ...
      Hash : [4c716d***************************************************ae9f720d]
      ...

Step 3: Calling the Decryption Function
----------------------------------------------------------

Once you have the hash code, you can start using the decryption function. The function needs to be called inside the ``deviceready`` event. For example:

.. code-block:: javascript
                                  
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        monaca.Encrypt.setDecryptHash(
            function() {alert('SUCESS');},
            function() {alert('FAIL');},
        "4c716d***************************************************ae9f720d"); // Hash code for decryption
    }

.. note:: In the above example, the hash code is embedded directly in the function. For security concern, you can also hide it by loading the value from the server and use it under a parameter.

App Store Submission
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this plugin, we use the encryption library of iOS SDK. Therefore, in order to release the built app embedded this plugin to the AppStore, you need to set 2 options when you submit your app for a review. Under the Export Compliance section, please choose "Yes" for both questions as shown in the screenshot below:

.. figure:: images/html5_resource_encryption/4.png
  :width: 630px
  :align: center

.. rst-class:: clear

.. _cordova_5_2_and_lower_projects:

For Cordova 5.2 or Lower Projects
==================================================
  
Supported Platforms
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- Cordova 5.2 or lower
- iOS 7 or higher
- Android 4.0 or higher

Encryption Scheme
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

====================================== =======================================================================
Encryption Method                        AES
Key Length                               256bit
====================================== =======================================================================


Enabling the Plugin in Monaca Cloud IDE
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. From Monaca Cloud IDE menu, go to :menuselection:`File --> Manage Cordova Plugins` or :menuselection:`Config --> Manage Cordova Plugins`.

2. Click :guilabel:`Enable` button of the ``Encrypt`` plugin.

  .. figure:: images/html5_resource_encryption/1.png  
      :width: 700px
      :align: left

  .. rst-class:: clear

3. Next, you need to setup the encryption password. Find the newly added plugin under the *Enabled Plugins* section. Then, hover the plugin and click :guilabel:`Config` button.

  .. figyre:: images/html5_resource_encryption/2.png
      :width: 700px
      :align: left

  .. rst-class:: clear

4. Enter the password for this encryption. Then, click :guilabel:`OK` button.

  .. figure:: images/html5_resource_encryption/3.png
      :width: 400px
      :align: left

  .. rst-class:: clear


App Store Submission
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this plugin, we use the encryption library of iOS SDK. Therefore, in order to release the built app embedded this plugin to the AppStore, you need to set 2 options when you submit your app for a review. Under the Export Compliance section, please choose "Yes" for both questions as shown in the screenshot below:

.. figure:: images/html5_resource_encryption/4.png
  :width: 630px
  :align: center

.. rst-class:: clear



.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`