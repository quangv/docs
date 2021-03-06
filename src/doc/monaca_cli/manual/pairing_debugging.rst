.. _cli_pairing_debugging:

==========================================
Pairing and Debugging
==========================================

In order to debug Monaca app with Monaca CLI, you need to pair your host PC (running Monaca CLI) with your device (running Monaca Debugger) first. 

Before connecting Monaca Debugger to your host PC, please pay attention to the following points:

1. Monaca Debugger and the host PC have to connect to the same network connection (LAN or Wi-Fi). Some public networks do not allow connections between clients; therefore, pairing cannot be done in this case.
2. Use the same Monaca account for both Monaca Debugger and the host PC.
3. Disable the host PC's firewall.


.. _cli_pairing:

Start Pairing
===============================

1. Launch Monaca Debugger app on your device and sign in using your Monaca account information. Make sure you are using the same account information you are using with Monaca CLI.

2. In the command window on your PC, navigate to your project folder and use :ref:`monaca_debug` command to connect to your Monaca Debugger:

  .. code-block:: bash

        $ monaca debug

3. Then, a popup message prompting you to pair Monaca Debugger with the host PC will appear. After this, your application should be running on the debugger.

  .. figure:: images/pairing_debugging/1.png
      :width: 250px
      :align: left

  .. rst-class:: clear

4. If your pairing is successful, your local project’s name will appear under Local Projects in Monaca Debugger. However, if you fail the pairing, please refer to :ref:`troubleshoot_pair`.

  .. figure:: images/pairing_debugging/2.png
      :width: 250px 
      :align: left

  .. rst-class:: clear


Stop Pairing
===============================

There are two ways to stop the pairing:

1. From the PC
^^^^^^^^^^^^^^^^^^^^

In the same command window on your PC which you are running :ref:`monaca_debug` command, please use the following command to stop the pairing/break the debug process between your PC and Monaca Debugger:

  .. code-block:: bash

        ctrl + c


2. From Monaca Debugger
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. click on the toggle menu on the top-left corner and go to :guilabel:`Local Computers` button.

2. Then, the connected PC will be shown. Click on the "Information" icon of the connected PC (see the screenshot below).

  .. figure:: images/pairing_debugging/3.png
    :width: 250px
    :align: left

  .. rst-class:: clear

3. The information of the connected PC will be shown here. Click :guilabel:`Unpair this computer` button to disconnect from the selected PC. Once it is unpaired, you can't debug your local Monaca projects with this debugger anymore unless you pair it again.



.. _cli_debug_app:


Debugging Monaca Apps with Monaca CLI
=======================================================

Please refer to :ref:`debugger_with_local_tools`. 


.. seealso::

  *See Also*

  - :ref:`monaca_cli_tutorial`
  - :doc:`cli_commands`
  - :doc:`overview`
  - :doc:`build_publish`