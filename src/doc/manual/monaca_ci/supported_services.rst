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

`Appetize.io <https://appetize.io/>`_ is alson a beta-app distribution platform. For more information, please refer to `Appetize.io documentation <https://appetize.io/docs>`_.

Parameters
--------------------

You may need to use the following parameters in the recipe script.

+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
| Param                   | Description                                                                   | Remark                          |
+=========================+===============================================================================+=================================+
|``url``                  | (string) a publicly accessible link to your ``.zip``, ``.tar.gz``, or ``.apk``|                                 |
|                         | file.                                                                         |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``platform``             | (string) valid values are: ``ios`` or ``android``.                            | Automatically populated.        |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
| ``file``                | specify a file location on the local filesystem, rather than using the field  | Automatically populated.        |
|                         | url. All other field names are identical. To delete a field, set it to an     |                                 |
|                         | empty string.                                                                 |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``fileType``             | [Optional](string) the type of file that the url points to. Valid values are  |                                 |
|                         | ``zip``, ``tar.gz`` or ``apk``. Default values is ``zip`` for ios and ``apk`` |                                 |
|                         | for android.                                                                  |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
| ``timeout``             | [Optional](number) the number of seconds to wait until automatically ending   |                                 |
|                         | the session due to user inactivity. Valid values are: ``30``, ``60``, ``90``, |                                 |
|                         | ``120``,``180``, ``300`` or ``600``. Default value is ``120``.                |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``disableHome``          | [Optional](boolean) disables the home button on the iOS simulator.            |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``disabled``             | [Optional](boolean) disables streaming for this app.                          |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``protectedByAccount``   | [Optional](boolean) allows only logged-in users with the same account to      |                                 |
|                         | stream the app.                                                               |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``useLastFrame``         | [Optional](boolean) show the last image on the screen in the simulator after  |                                 |
|                         | session ends.                                                                 |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``buttonText``           | [Optional](string) customize the message prompting the user to start the      |                                 |
|                         | session. The default value is ``"Tap to play"``.                              |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``postSessionButtonText``| [Optional](string) customize the message prompting the user to restart the    |                                 |
|                         | session. The default value is ``"Tap to play"``.                              |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``launchUrl``            | [Optional](string) specify a deep link to bring your users to a specific      |                                 |
|                         | location when your app is launched.                                           |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+
|``note``                 | [Optional](string) a note for your own purposes which will appear on your     |                                 |
|                         | management dashboard.                                                         |                                 |
+-------------------------+-------------------------------------------------------------------------------+---------------------------------+

.. seealso::

  *See Also*

  - :ref:`monaca_ci_overview`
  - :ref:`json_sample`