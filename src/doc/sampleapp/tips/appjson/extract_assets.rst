
=====================================================
How to Load Media Files (Android Built App Only)
=====================================================

Android external process (eg. Media Player) cannot access asset files. Thus, media files cannot be played by Android Media Player.

``LocalFileBootloader`` lets Android Media Player access asset files. It is disabled by default. If you want to enable ``localFileBootloader``, please edit :file:`app.json` file and set ``extractAssets`` to "true".

Firstly, let's show hidden files by clicking the button on the top right corner of the Project tree panel as shown below. Then, tick the ``show hidden files`` checkbox.

	.. image:: images/show_hidden_files.png

Then, :file:`app.json` file will be displayed under ``www`` folder. After that, please add this code into :file:`app.json`.

.. code-block:: javascript

  "loader": {
      "android": {
        "extractAssets": true //default value is "false"
      }
    }


When ``extractAssets`` is set to "true", ``localFileBootloader`` will automatically run and copy asset files into a folder which can be accessed by Android Media Player.

.. note:: You should be aware of the following disadvantages while enabling this feature:

  - When the app starts for the first time, it may take some time to copy the asset files.
  - This may increase the space needed for the application.
