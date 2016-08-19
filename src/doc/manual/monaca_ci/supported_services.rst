.. _supported_services:

============================================================================
Supported Services
============================================================================


Currently Supported Services
===================================

DeployGate
^^^^^^^^^^^^^^^^^^^^^^^^^

`DeployGate <https://deploygate.com/>`_ is a beta-app distribution platform. For more information, please refer to `DeployGate API documentation <https://deploygate.com/docs/api>`_.

Parameters
--------------------

You may need to use the following parameters in the recipe script.

+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| Param                | Description                                                                      | Remark                          |
+======================+==================================================================================+=================================+
|``token``             | Your API key. If you are going to use the API for automated build in your        | Stored in deploy service        |
|                      | organization, you may want to use organization's API key which shown on the      | settings. Automatically         |
|                      | organization page to upload the app independent from member/role management.     | populated.                      |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``file``              | App file binary                                                                  | Automatically populated.        |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``message``           | [Optional] Push message                                                          |                                 | 
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``distribution_key``  | [Optional] Target Distribution Key                                               |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``release_note``      | [Optional] Distribution message                                                  |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``disable_notify``    | [Optional](``iOS only``) If you set yes as a value, disable notify via email.    |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``visibility``        | [Optional] Set a new application's privacy setting by specifying ``private``     |                                 |
|                      | (default) or ``public``. If you are using Personal Free account, you have to     |                                 |
|                      | specify ``public`` to upload a new app since it doesn't have a slot for private  |                                 |
|                      | app. No effect when updating.                                                    |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+

HockeyApp
^^^^^^^^^^^^^^^^^^^^^^^^^

`HockeyApp <https://hockeyapp.net/>`_ is alson a beta-app distribution platform. For more information, please refer to `HockeyApp API documentation <https://support.hockeyapp.net/kb/api/api-apps>`_.

Parameters
--------------------

You may need to use the following parameters in the recipe script.

+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| Param                | Description                                                                      | Remark                          |
+======================+==================================================================================+=================================+
|``ipa``               | file data of the ``.ipa`` for iOS, ``.app.zip`` for OS X, or ``.apk`` file for   | Automatically populated.        |
|                      | Android.                                                                         |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``dsym``              | [Optional] file data of the ``.dSYM.zip`` file (iOS and OS X) or ``mapping.txt`` |                                 |
|                      | (Android). Please note that the extension has to be ``.dsym.zip``                |                                 |
|                      | (case-insensitive) for iOS and OS X and the file name has to be ``mapping.txt``  |                                 |
|                      | for Android.                                                                     |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``notes``             | [Optional] release notes as Textile or Markdown (after 5k characters note are    |                                 | 
|                      | truncated).                                                                      |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| ``notes_type``       | [Optional] type of release notes:                                                |                                 |
|                      |                                                                                  |                                 |
|                      |   - ``0`` for Textile                                                            |                                 |
|                      |   - ``1`` for Markdown                                                           |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| ``notify``           | [Optional] notify testers (can only be set with full-access tokens):             |                                 |
|                      |                                                                                  |                                 |
|                      |   - ``0`` to not notify testers                                                  |                                 |
|                      |   - ``1`` to notify all testers that can install this app                        |                                 |
|                      |   - ``2`` to notify all testers                                                  |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| ``status``           | [Optional] download status (can only be set with full-access tokens):            |                                 |
|                      |                                                                                  |                                 |
|                      |   - ``1`` to not allow users to download the version                             |                                 |
|                      |   - ``2`` to make the version available for download                             |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
|``tags``              | [Optional] restrict download to comma-separated list of tags                     |                                 | 
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| ``teams``            | [Optional] restrict download to comma-separated list of team IDs. For example:   |                                 |
|                      |                                                                                  |                                 |
|                      |   - ``teams=12,23,42`` with 12, 23, and 42 being the database IDs of your teams  |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| ``users``            | [Optional] restrict download to comma-separated list of user IDs. For example:   |                                 |
|                      |                                                                                  |                                 |
|                      |   - ``users=1224,5678`` with 1224 and 5678 being the database IDs of your users  |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| ``mandatory``        | [Optional] set version as mandatory:                                             |                                 |
|                      |                                                                                  |                                 |
|                      |   - ``0`` for not mandatory                                                      |                                 |
|                      |   - ``1`` for mandatory                                                          |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+
| ``release_type``     | [Optional] set the release type of the app:                                      |                                 |
|                      |                                                                                  |                                 |
|                      |   - ``2`` for alpha                                                              |                                 |
|                      |   - ``0`` for beta [default]                                                     |                                 |
|                      |   - ``1`` for store                                                              |                                 |
|                      |   - ``3`` for enterprise                                                         |                                 |
+----------------------+----------------------------------------------------------------------------------+---------------------------------+

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