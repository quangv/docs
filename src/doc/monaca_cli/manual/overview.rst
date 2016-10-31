.. _cli_overview:

==========================================
Monaca CLI Overview
==========================================


Introduction
=========================

Monaca CLI is one of the local deveopment environments which can be used to develop Monaca apps locally. Monaca CLI provides command line interface for using Monaca Cloud from your local PC. With Monaca CLI, you can:

- Create new local projects, import or clone existing projects in Monaca Cloud into your host PC.
- Develope Monaca apps with any local code editors you prefer.
- Debug your app with inspector integration.
- Support transpiler options for transpilable projects such as ReactJS and Angular2 projects.
- Remote build your projects without any setups locally. 


Getting Started
=========================

Prerequisite
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You are required to have `Node.js <https://nodejs.org/>`_ installed on your PC in order to install Monaca CLI. 

.. _install_monaca_cli:

Step 1: CLI Installation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use the following command to install Monaca CLI:

  .. code-block:: bash

      $ npm install -g monaca

On some systems you may have to prefix the command with ``sudo`` because of permission issue:

  .. code-block:: bash

      $ sudo npm install -g monaca
        

.. note:: In order to check the currently installed Monaca CLI's version, use ``monaca`` command. Moreover, if you want to update Monaca CLI, just re-install it using the above command.


Step 2: Following CLI Tutorial
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

After successfully installed Monaca CLI, please follow :ref:`our simple and easy tutorial on how to use Monaca CLI <monaca_cli_tutorial>`.


.. seealso::

  *See Also*

  - :ref:`monaca_cli_tutorial`
  - :doc:`cli_commands`
  - :doc:`pairing_debugging`
  - :doc:`build_publish`