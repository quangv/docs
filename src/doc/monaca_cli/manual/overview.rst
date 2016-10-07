.. _cli_overview:

==========================================
Monaca CLI Overview
==========================================


Monaca CLI provides command line interface for using Monaca Cloud from your host PC. With Monaca CLI, you can:

- Create new local projects, import or clone existing projects in Monaca Cloud into your host PC.
- Debug your app with inspector integration.
- Support transpiler options for transpilable projects such as ReactJS and Angular2 projects.
- Remote build your projects without any setups locally. 


Getting Started
=========================

.. _install_monaca_cli:

Step 1: Installation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. note:: You are required to have `Node.js <https://nodejs.org/>`_ installed on your PC in order to install Monaca CLI. 

Use the following command to install Monaca CLI:

  .. code-block:: bash

      $ npm install -g monaca

On some systems you may have to prefix the command with ``sudo`` because of permission issue:

  .. code-block:: bash

      $ sudo npm install -g monaca
        

.. note:: In order to check the currently installed Monaca CLI's version, use ``monaca`` command. Moreover, if you want to update Monaca CLI, just re-install it using the above command.


Step 2: Creating a New Project and Run on Browser
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. note:: you can also :ref:`import<monaca_import>` or :ref:`clone<monaca_clone>` your existing projects from Monaca Cloud.

1. Create a new project by using the command below:

  .. code-block:: bash

        $ monaca create PROJECT_DIRECTORY

2. Choose a project template. Please see the example below:

  .. figure:: images/overview/create.png
      :width: 600px
      :align: left
  
  .. rst-class:: clear    

3. Run it on the browser.

  .. code-block:: bash

        $ cd PROJECT_DIRECTORY
        $ monaca preview
  
.. _connect_to_debugger:

Step 3: Connecting to Monaca Debugger
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Use :ref:`monaca_debug` command to connect to your Monaca Debugger:

  .. code-block:: bash

        $ monaca debug

2. Then, a popup message, prompting you to pair Monaca Debugger with the host PC, will appear in the debugger. This message will only be displayed if it’s the first time you are connecting to the device. After this, your application should be running on the debugger.

.. note:: Before connecting Monaca Debugger to the host PC, please pay attention to the following points:

        1. Monaca Debugger and the host PC have to connect to the same WiFi network.
        2. Use the same Monaca account for both Monaca Debugger and the host PC.
        3. Disable the host PC's firewall.


.. seealso::

  *See Also*

  - :ref:`monaca_cli_tutorial`
  - :doc:`cli_commands`
  - :doc:`pairing_debugging`
  - :doc:`build_publish`