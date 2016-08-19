.. _supported_services:

============================================================================
Supported Services
============================================================================


Currently Supported Services
===================================

DeployGate
^^^^^^^^^^^^^^^^^^^^^^^^^

DeployGate is a beta-app distribution platform. For more information, please refer to `DeployGate API documentation <https://deploygate.com/docs/api>`_.

Parameters
--------------------

You may need to use the following parameters in the recipe script.

+----------------------+--------------------------------------------------------------------------------------------------------------------+
| Param                | Description                                                                                                        |
+======================+====================================================================================================================+
|``token``             | Your API key. If you are going to use the API for automated build in your organization, you may want to use        |
|                      | organization's API key which shown on the organization page to upload the app independent from member/role         |
|                      | management.                                                                                                        |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``file``              | App file binary                                                                                                    |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``message``           | (Optional) Push message                                                                                            | 
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``distribution_key``  | (Optional) Target Distribution Key                                                                                 |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``release_note``      | (Optional) Distribution message                                                                                    |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``disable_notify``    | (Optional)(iOS only) If you set yes as a value, disable notify via email.                                          |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``visibility``        | (Optional) Set a new application's privacy setting by specifying private(default) or public. If you are using      |
|                      | Personal Free account, you have to specify public to upload a new app since it doesn't have a slot for private app.| 
|                      | No effect when updating.                                                                                           |
+----------------------+--------------------------------------------------------------------------------------------------------------------+

HockeyApp
^^^^^^^^^^^^^^^^^^^^^^^^^

DeployGate is a beta-app distribution platform. For more information, please refer to `HockeyApp API documentation <https://support.hockeyapp.net/kb/api/api-apps>`_.

Parameters
--------------------

You may need to use the following parameters in the recipe script.

+----------------------+--------------------------------------------------------------------------------------------------------------------+
| Param                | Description                                                                                                        |
+======================+====================================================================================================================+
|``token``             | Your API key. If you are going to use the API for automated build in your organization, you may want to use        |
|                      | organization's API key which shown on the organization page to upload the app independent from member/role         |
|                      | management.                                                                                                        |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``file``              | App file binary                                                                                                    |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``message``           | (Optional) Push message                                                                                            | 
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``distribution_key``  | (Optional) Target Distribution Key                                                                                 |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``release_note``      | (Optional) Distribution message                                                                                    |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``disable_notify``    | (Optional)(iOS only) If you set yes as a value, disable notify via email.                                          |
+----------------------+--------------------------------------------------------------------------------------------------------------------+
|``visibility``        | (Optional) Set a new application's privacy setting by specifying private(default) or public. If you are using      |
|                      | Personal Free account, you have to specify public to upload a new app since it doesn't have a slot for private app.| 
|                      | No effect when updating.                                                                                           |
+----------------------+--------------------------------------------------------------------------------------------------------------------+


Upcoming Supported Services
===================================

Test Flight
^^^^^^^^^^^^^^^^^^^^^^^^^

Appetize.io
^^^^^^^^^^^^^^^^^^^^^^^^^




.. seealso::

  *See Also*

  - :ref:`monaca_ci_overview`
  - :ref:`json_sample`
  - :ref:`troubleshooting`