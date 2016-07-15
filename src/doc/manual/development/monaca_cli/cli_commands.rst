.. _monaca_cli_commands:

===============================
Monaca CLI Commands
===============================

.. rst-class:: right-menu



========================================= =======================================================================================
Commands                                   Description
========================================= =======================================================================================
:ref:`monaca_login`                        signs in to Monaca Cloud.
:ref:`monaca_create`                       creates a new Monaca project locally from a template.
:ref:`monaca_clone`                        clones a project from Monaca Cloud.
:ref:`monaca_import`                       imports a project from Monaca Cloud.
:ref:`monaca_upload`                       uploads a project to Monaca Cloud.
:ref:`monaca_download`                     downloads a project from Monaca Cloud.
:ref:`monaca_plugin`                       manages installed plugins of a project.
:ref:`monaca_debug`                        serves a single project to Monaca Debugger.
:ref:`monaca_preview`                      serves a single project to browser.
:ref:`monaca_remote_build`                 builds a project remotely on Monaca Cloud.
:ref:`monaca_proxy`                        configures proxy to use when connecting to Monaca Cloud.
:ref:`monaca_logout`                       signs out from Monaca Cloud.
========================================= =======================================================================================

.. _monaca_login:

.. rst-class:: function-reference

monaca login
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Signs in to the Monaca Cloud. You will be prompted to input your Monaca account information (username and password).

:dfn:`$ monaca login`

Example
  Here is an example when you login to Monaca Cloud with Monaca CLI:

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

Creates a new Monaca project locally at a specified path. The command downloads a list of available templates and then displays a list for the user to choose from. The specified project will be created in a directory given by the user.

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

Clones a project from the Monaca Cloud. The command downloads a list of available projects and then displays a list for the user to choose from. The project will be downloaded to a directory specified by the user. Also a link is created with corresponding monaca cloud project. User can later sync this project with monaca cloud.

.. note:: If you clone a project into your local PC from Monaca Cloud, the cloned project keeps cloud synced information. In other words, if you make changes to this project locally and upload (using :ref:`monaca_upload`) them to Monaca Cloud, they will overwrite older files of the same project.

:dfn:`$ monaca clone`


Example
  Here is an exmaple of how to clone a project called ``Memo Application`` from Monaca Cloud into "CloneMemoProject" folder on your local PC.

  .. figure:: images/cli_commands/clone.png
      :width: 600px
      :align: left
  
  .. rst-class:: clear
      

.. rst-class:: function-reference


.. _monaca_import:

.. rst-class:: function-reference

monaca import
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Imports a project from the Monaca Cloud. The command downloads a list of available projects and then displays a list for the user to choose from. The project will be downloaded to a directory specified by the user.

.. note:: If you import a project into your local PC from Monaca Cloud, the imported project doesn't keep cloud synced information. In other words, if you make changes to this project locally and upload (using :ref:`monaca_upload`) them to Monaca Cloud, this project will be uploaded as a new project in Monaca Cloud.

:dfn:`$ monaca import`
  
Example
  Here is an exmaple of how to import a project called ``Memo Application`` from Monaca Cloud into "ImportedMemoApplication" folder on your local PC.

  .. figure:: images/cli_commands/import.png
      :width: 600px
      :align: left
  
  .. rst-class:: clear


.. rst-class:: function-reference


.. _monaca_upload:

.. rst-class:: function-reference

monaca upload
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uploads the current project to Monaca Cloud. The project files will be compared with the remote files so only the changed and new files will be uploaded.

.. note:: This command works differently for different types of projects:
          
          - new/imported project: this command will upload this whole project as a new project in Monaca Cloud.
          - cloned project: this command will overwrite the same project in Monaca Cloud.


:dfn:`$ monaca upload`

Options
  =========================================== ===========================================================================================================
  ``--delete``                                  deletes those files on Monaca cloud which are not existed locally.
  ``--force``                                   doesn't ask user for permission to continue.
  ``--dry-run``                                 simulates the upload operation and provides details of which files will be      
                                                uploaded. No actual upload operation is done. 
  =========================================== ===========================================================================================================


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

Downloads updates/changes (of the synced project) made in Monaca Cloud. 

.. note:: This command will overwrite the changes into the local project. If your local project is not existed in Monaca Cloud, you can't use this command.

:dfn:`$ monaca download`

Options
  =========================================== ===========================================================================================================
  ``--delete``                                  deletes those files locally which are not existed on Monaca Cloud.
  ``--force``                                   doesn't ask user for permission to continue.
  ``--dry-run``                                 simulates the download operation and provides details of which files will be 
                                                downloaded. No actual download operation is done. 
  =========================================== ===========================================================================================================

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
  ``add <plugin>``                              adds a plugin.
  ``rm <plugin>``                               removes a plugin.
  ``ls|list``                                   lists currently installed plugins.
  ``search <query>``                            searches the plugin directory.
  =========================================== ==============================================================================================

Example
  Navigate to your project folder and type the command below:

  .. code-block:: bash

      $ monaca plugin add org.apache.cordova.camera
      $ monaca plugin rm org.apache.cordova.camera
      $ monaca plugin search keyboard
      $ monaca plugin ls


.. rst-class:: function-reference

.. _monaca_preview:

.. rst-class:: function-reference

monaca preview
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Starts a local web server that serves the ``www`` assets. The command will watch the file-system for changes and reload the browser when a change occurs.

:dfn:`$ monaca preview [option]`

Options:
  =========================================== ==============================================================================================
    ``--port``, ``-p``                                  HTTP port to listen to (default value is 8000)
    ``--no-open``                                       starts a local web server without opening a browser
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

:dfn:`$ monaca debug [option]`

Options:
  =========================================== ==============================================================================================
    ``paths``                                  list of directories. omit it to serve the current directory.
    ``--port``                                 HTTP port to listen to (default value is 8001)
  =========================================== ==============================================================================================

Example
  Navigate to your project folder and use ``monaca debug`` command. Then, you should be able to see that project name in Monaca Debugger under *Local Projects* section. Click on that project in order to run it. Please try to make some changes to the project and save them. You should be able to see those changes reflect instantly.

  .. code-block:: bash

      $ cd MyProjectFolder/ImportRssProject
      $ monaca debug


.. note:: In order to stop ``monaca debug`` process, press :guilabel:`Ctrl+c`.

.. note:: When runnig this command, you should be prompted to pair your debugger with your local PC or see the notification of successful network connection (see the screenshots). Otherwise, please refer to :ref:`troubleshoot_pair`.
     

.. figure:: images/cli_commands/1.png
  :width: 250px
  :align: left

  Pairing Dialog  
  
.. figure:: images/cli_commands/2.png
  :width: 250px
  :align: left
      
  Network Connection Notification
  
.. rst-class:: clear


.. rst-class:: function-reference


.. _monaca_remote_build:

.. rst-class:: function-reference

monaca remote build
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Builds the project on Monaca Cloud. If your project is not existed in Monaca Cloud yet, it will be automatically uploaded to the cloud first before the build starts. However, if your project is alreayd existed in Monaca Cloud, all its local updates/changes will be uploaded to the cloud first before the build starts. 

Please refer to :ref:`build_index` for more information on how to:

- config build settings for each platform
- types of build
- build the application for each platform
- get/install the built apps. 

:dfn:`$ monaca remote build <platform> [options]`

Options:
  =========================================== ==============================================================================================
    ``platform``                                builds for specific platform. It can be: ``ios``, ``android`` or ``windows``.
    ``--build-type``                            chooses the build type. It can be: 

                                                  - ``debug`` (for iOS, Android and Windows. It is default option.)
                                                  - ``test`` (for iOS only)
                                                  - ``release`` (for iOS and Android)

    ``--output``                                the path in which the built file will be stored (specify also the filename).
    ``--android_webview``                       if the platform is ``android``. It can be: ``default`` or ``crosswalk``.
    ``--android_arch``                          required if ``--android_webview`` is ``crosswalk``. It can be: ``x86`` or ``arm``.
    ``--browser``                               opens the build process in a browser (see the screenshots below).
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
    ``set <URL:PORT_NUMBER>``                  sets a proxy server.
    ``rm``                                     removes a proxy server.
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
  Here is an example when you logout from Monaca Cloud with Monaca CLI:

  .. code-block:: bash

      $ monaca logout
      Signing out from Monaca Cloud...
      You have been signed out.
      Removed Monaca Debugger pairing information.




