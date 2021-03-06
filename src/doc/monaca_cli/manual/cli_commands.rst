.. _monaca_cli_commands:

===============================
Monaca CLI Commands
===============================


========================================= =======================================================================================
Commands                                   Description
========================================= =======================================================================================
:ref:`monaca_login`                        Signs into Monaca Cloud.
:ref:`monaca_create`                       Creates a new Monaca project locally from a template.
:ref:`monaca_clone`                        Clones a project from Monaca Cloud.
:ref:`monaca_import`                       Imports a project from Monaca Cloud.
:ref:`monaca_upload`                       Uploads a project to Monaca Cloud.
:ref:`monaca_download`                     Downloads a project from Monaca Cloud.
:ref:`monaca_plugin`                       Manages installed plugins of a project.
:ref:`monaca_transpile`                    Transpiles project source code.
:ref:`monaca_debug`                        Serves a single project to Monaca Debugger.
:ref:`monaca_preview`                      Serves a single project to browser.
:ref:`monaca_reconfigure`                  Generates default project configurations.
:ref:`monaca_remote_build`                 Builds a project remotely in Monaca Cloud.
:ref:`monaca_proxy`                        Configures proxy to use when connecting to Monaca Cloud.
:ref:`monaca_logout`                       Signs out from Monaca Cloud.
========================================= =======================================================================================

.. _monaca_login:

.. rst-class:: function-reference

monaca login
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Signs into Monaca Cloud. You will be prompted to input your Monaca account information (username and password).

:dfn:`$ monaca login`

Example
  Here is an example of how to log into Monaca Cloud with Monaca CLI:

  .. code-block:: bash

      $ monaca login
      Email address: demo@monaca.mobi
      Password: 
      Successfully signed in as demo@monaca.mobi.

.. rst-class:: function-reference


.. _monaca_create:

.. rst-class:: function-reference

monaca create
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Creates a new Monaca project locally at a specified path. You will be asked to choose a project template from a list of available templates provided by Monaca Cloud. The selected template will be created at the specified location.

:dfn:`$ monaca create path`

Parameters
  =============== ============================================================================================================
  ``path``         location where you want to store your project files 
  =============== ============================================================================================================

Example
  The following snippet shows how to create a new project based on a ``jQuery TODO App`` sample app under "DemoProject" folder:

  .. figure:: images/cli_commands/create.png
      :width: 600px
      :align: left
  
  .. rst-class:: clear


.. _monaca_clone:

.. rst-class:: function-reference

monaca clone
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Clones a project from the Monaca Cloud into your local PC at a specified location. You will be asked to select a project from a list of all your existing projects in Monaca Cloud and specify a location for the downloaded project. 

.. note:: If you clone a project into your local PC from Monaca Cloud, the cloned project keeps cloud synced information. In other words, if you make changes to this project locally and upload (using :ref:`monaca_upload`) them to Monaca Cloud, they will overwrite older files of the same project.

:dfn:`$ monaca clone`


Example
  Here is an example of how to clone a project called ``Memo Application`` from Monaca Cloud into "CloneMemoProject" folder on your local PC.

  .. figure:: images/cli_commands/clone.png
      :width: 600px
      :align: left
  
  .. rst-class:: clear
      

.. rst-class:: function-reference


.. _monaca_import:

.. rst-class:: function-reference

monaca import
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Imports a project from Monaca Cloud. You will be asked to select a project from a list of all your existing projects in Monaca Cloud and specify a location for the downloaded project. 

.. note:: If you import a project into your local PC from Monaca Cloud, the imported project doesn't keep cloud synced information. In other words, if you make changes to this project locally and upload (using :ref:`monaca_upload`) them to Monaca Cloud, this project will be uploaded as a new project in Monaca Cloud.

:dfn:`$ monaca import`
  
Example
  Here is an example of how to import a project called ``Memo Application`` from Monaca Cloud into "ImportedMemoApplication" folder on your local PC.

  .. figure:: images/cli_commands/import.png
      :width: 600px
      :align: left
  
  .. rst-class:: clear


.. rst-class:: function-reference


.. _monaca_upload:

.. rst-class:: function-reference

monaca upload
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uploads the current project files to Monaca Cloud. The project files will be compared with the corresponding remote files so that only the new and changed ones will be uploaded. The uploading process will be done in one of the following ways:

1. If the current project is a new/imported project, this command will upload the whole project as a new project in Monaca Cloud.
2. If the current project is a cloned project, this command will overwrite the same existing project in Monaca Cloud. In other words, only changed and new files will be uploaded.

.. note:: For ReactJS and Angular2 projects, ``monaca upload`` command will transpile the project before uploading them. 


:dfn:`$ monaca upload [options]`

Options
  ====================== ===========================================================================================================
  ``--delete``             Deletes the project files in Monaca Cloud which do not exist locally.
  ``--force``              Doesn't ask users for permission to continue the uploading process.
  ``--dry-run``            Simulates the uploading operation and provides details of which files will be uploaded. No actual uploading operation is done. 
  ====================== ===========================================================================================================


Example
  Navigate to your project folder. Then, type ``monaca upload`` command with various options and see how it works.

  .. figure:: images/cli_commands/upload.png
      :width: 600px
      :align: left
  
  .. rst-class:: clear


.. rst-class:: function-reference


.. _monaca_download:

.. rst-class:: function-reference

monaca download
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Downloads updates/changes (of the corresponding synced project) made in Monaca Cloud into the local project. 

.. note:: This command will overwrite the changes into the local project. If your local project does not exist in Monaca Cloud, you can't use this command.


:dfn:`$ monaca download [options]`

Options
  ==================== ===========================================================================================================
  ``--delete``            Deletes those files locally which do not exist in Monaca Cloud.
  ``--force``             Doesn't ask users for permission to continue.
  ``--dry-run``           Simulates the downloading operation and provides details of which files will be downloaded. No actual downloading operation is done. 
  ==================== ===========================================================================================================

Example
  Navigate to your project folder. Then, type ``monaca download`` command with various options and see how it works.

  .. figure:: images/cli_commands/download.png
      :width: 600px
      :align: left
  
  .. rst-class:: clear

.. rst-class:: function-reference


.. _monaca_plugin:

.. rst-class:: function-reference

monaca plugin
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Manages plugins of a project such as adding new plugins, listing and removing installed plugins.


:dfn:`$ monaca plugin [options]`
  
Options
  =========================================== ==============================================================================================
  ``add <plugin>``                              Adds a plugin.
  ``rm <plugin>``                               Removes a plugin.
  ``ls|list``                                   Lists currently installed plugins.
  ``search <query>``                            Searches the plugin directory.
  =========================================== ==============================================================================================

Example
  Navigate to your project folder and type the command below and see how it works:

  .. code-block:: bash

      $ monaca plugin add org.apache.cordova.camera
      $ monaca plugin rm org.apache.cordova.camera
      $ monaca plugin search keyboard
      $ monaca plugin ls


.. rst-class:: function-reference

.. _monaca_transpile:

.. rst-class:: function-reference

monaca transpile
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Transpiles projects that are transpilable such as ReactJS and Angular2 projects. For transpilable projects, the transpiling process is automatically included in some commands such as ``monaca upload``, ``monaca preview``, ``monaca debug`` and ``monaca remote build``.

:dfn:`$ monaca transpile [options]`

Options:
  =========================================== ==============================================================================================
    ``--generate-config``                       Creates transpile configuration files for transpilable projects, in case they are missing. 
    ``--install-dependencies``                  Installs the missing dependencies needed for transpiling.
  =========================================== ==============================================================================================

Example
  Navigate to your transpilable project folder and use ``monaca transpile`` command. Then, the transpiling will begin.

  .. code-block:: bash

      $ monaca transpile

      Running Transpiler...
      Build completed in 71.835s

      ....


.. rst-class:: function-reference

.. _monaca_preview:

.. rst-class:: function-reference

monaca preview
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Starts a local web server that serves the ``www`` assets. The command will watch the file system for changes and reload the browser when a change occurs.

.. note:: For ReactJS and Angular2 projects, ``monaca preview`` command will transpile the project in memory before launching the previewer. Additionally, if the preview is still running and you make a change, the transpile process should be triggered and the previewer will be served with the new files.

:dfn:`$ monaca preview [options]`

Options:
  =========================================== ==============================================================================================
    ``--port``, ``-p``                                  HTTP port to listen to (default value is 8000)
    ``--no-open``                                       Starts a local web server without opening a browser.
  =========================================== ==============================================================================================

Example
  Navigate to your project folder and use ``monaca preview`` command. Then, a browser will be opened running your project.

  .. figure:: images/cli_commands/preview.png
    :width: 600px
    :align: left
    
  .. figure:: images/cli_commands/preview_window.png
    :width: 600px
    :align: left
        
    Preview Window
    
  .. rst-class:: clear

  .. note:: In order to stop ``monaca preview`` process, press :guilabel:`Ctrl+c`.

.. rst-class:: function-reference

.. _monaca_debug:

.. rst-class:: function-reference

monaca debug
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Debugs one or more applications on a device and receives code changes instantly. This command starts a web server for Monaca Debugger to connect to. It also starts broadcasting messages to tell debuggers in the local network to connect to it. When a debugger is connected, it will send file system changes to the debugger.

.. note:: For ReactJS and Angular2 projects, ``monaca debug`` command will transpile the project before serving the files to Monaca Debugger. Additionally, if the debug is still running and you make a change, the transpile process should be triggered and the debugger will be served with the new files.

:dfn:`$ monaca debug [options]`

Options:
  =========================================== ==============================================================================================
    ``paths``                                  List of directories. Omit it to serve the current directory.
    ``--port``                                 HTTP port to listen to (default value is 8001)
  =========================================== ==============================================================================================

Example
  Navigate to your project folder and use ``monaca debug`` command. Then, you should be able to see that project name in Monaca Debugger under *Local Projects* section. Click on that project in order to run it. Please try to make some changes to the project and save them. You should be able to see those changes reflect instantly.

  .. code-block:: bash

      $ cd MyProjectFolder/ImportRssProject
      $ monaca debug


  When running this command, you should be prompted to pair your debugger with your local PC or see the notification of successful network connection (see the screenshots). Otherwise, please refer to :ref:`troubleshoot_pair`.
     
  .. figure:: images/cli_commands/1.png
    :width: 250px
    :align: left

    Pairing Dialog  
    
  .. figure:: images/cli_commands/2.png
    :width: 250px
    :align: left
        
    Network Connection Notification
    
  .. rst-class:: clear



.. note:: In order to stop ``monaca debug`` process, press :guilabel:`Ctrl+c`.

.. rst-class:: function-reference


.. _monaca_reconfigure:

.. rst-class:: function-reference

monaca reconfigure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Generates default project configurations and files. Running it without arguments will generate everything.

:dfn:`$ monaca reconfigure [options]`

Options:
  =========================================== ==============================================================================================
    ``--transpile``                             Generates transpile configuration files (for both dev and prod).
    ``--dependencies``                          Installs required build dependencies.
    ``--components``                            Generates ``components`` folder.
  =========================================== ==============================================================================================

Example
  Navigate to your transpilable project folder and try ``monaca reconfigure`` command with various parameters.

  .. code-block:: bash

      $ monaca reconfigure
      $ monaca reconfigure --transpile --components

.. rst-class:: function-reference


.. _monaca_remote_build:

.. rst-class:: function-reference

monaca remote build
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Builds the project in Monaca Cloud. If your project does not exist in Monaca Cloud yet, it will be automatically uploaded to the cloud first before the build starts. However, if your project already exists in Monaca Cloud, all its local updates/changes will be uploaded to the cloud first before the build starts. 

Please refer to :ref:`build_index` for more information on how to:

- config build settings for each platform
- types of build
- build the application for each platform
- get/install the built apps

:dfn:`$ monaca remote build <platform> [options]`

Options:
  =========================================== ==============================================================================================
    ``platform``                                Builds for specific platform. It can be: ``ios``, ``android`` or ``windows``.
    ``--build-type``                            Chooses the build type. It can be: 

                                                  - ``debug`` (for iOS, Android and Windows. It is default option.)
                                                  - ``test`` (for iOS only)
                                                  - ``release`` (for iOS and Android)

    ``--output``                                The path in which the built file will be stored (specify also the filename)
    ``--android_webview``                       If the platform is ``android``. It can be: ``default`` or ``crosswalk``.
    ``--android_arch``                          Required if ``--android_webview`` is ``crosswalk``. It can be: ``x86`` or ``arm``.
    ``--browser``                               Opens the build process in a browser (see the screenshots below).
  =========================================== ==============================================================================================

Example
  Navigate to your project folder and try to use this command with different options:

  .. code-block:: bash

      $ monaca remote build ios
      $ monaca remote build ios --build-type=debug
      $ monaca remote build android --build-type=debug --android_webview=crosswalk --android_arch=arm
      $ monaca remote build --browser


.. figure:: images/cli_commands/4.png
  :width: 600px
  :align: center

.. figure:: images/cli_commands/5.png
  :width: 600px
  :align: center

.. rst-class:: function-reference


.. _monaca_proxy:

.. rst-class:: function-reference

monaca proxy
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Configures proxy to use when connecting to Monaca Cloud. 

:dfn:`$ monaca proxy <command>`

Parameters
  =========================================== ==============================================================================================
    ``set <URL:PORT_NUMBER>``                  Sets a proxy server.
    ``rm``                                     Removes a proxy server.
  =========================================== ==============================================================================================

Example
  Navigate to your project folder and type the command below:

  .. code-block:: bash

      $ monaca proxy set http://my.proxy.com:8080
      $ monaca proxy rm


.. rst-class:: function-reference


.. _monaca_logout:

.. rst-class:: function-reference

monaca logout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Signs out from Monaca Cloud and removes stored login token.

:dfn:`$ monaca logout`

Example
  Here is an example of how you logout from Monaca Cloud with Monaca CLI:

  .. code-block:: bash

      $ monaca logout
      Signing out from Monaca Cloud...
      You have been signed out.
      Removed Monaca Debugger pairing information.




