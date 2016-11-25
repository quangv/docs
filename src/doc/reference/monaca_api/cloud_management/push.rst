.. _push_notification_for_backend_management_api:

=================================
Push Notification
=================================

.. note:: For release and ad-hoc builds on Cordova 6.2 platform, please select the release build option when sending push notifications.


Below are Monaca Backend Management APIs for Push Notifications. 

=============================== =========================================================================================================================
Method                           Description
=============================== =========================================================================================================================
:ref:`Push.send()<p.send>`       Send Push Notification
:ref:`Push.status()<p.status>`   Get Push Notification Status
=============================== =========================================================================================================================

.. _p.send:

.. rst-class:: function-reference

Push.send - Send Push Notification
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Send push notification to applications.

:dfn:`Push.send`

Parameter
  ======================== ================== ==============================================================================================================================================================
  ``pushProjectId``         string             :ref:`push_project_id`
  ``platform``              string             User's platform which can be ``"android"`` or ``"ios"``
  ``target``                string             Type of end user which is ``"app"``.
  ``buildType``             string             Build type of the application which can be ``"debug"`` , ``"release"`` or ``"adhoc"``.
  ``title``                 string             Title (Android only)
  ``message``               string             Message to send
  ``badge``                                    Badge (iOS only)
  ``json``                  json               JSON Data
  ``userOidList``           array of string    Filter target users by their IDs. (Optional)
              
                                               * In Javascript, these IDs are the values of :ref:`monaca.cloud.User.oid<u._oid>`.
                                               * In :doc:`../cloud_management/`, there IDs are the values of ``"_id"`` property of each data from the  :ref:`User.list()<u_list>` function.
  
  ``userQuery``             string             Filter target users by a :ref:`MonaQL<MonaQL>` query for user properties. (Optional)
                                     
                                               **e.g.** 'country == "US" && age > 20' 

  ``userQueryBindParams``    array             Replace the placeholders in userQuery by its values. (Optional)
                                     
                                               **e.g.** ["US", 20] when userQuery is 'country == ? && age > ?'

  ``deviceIdList``          array of string    Filter target devices by its IDs. (Optional)
                                     
                                               * In Javascript, these IDs are the return values of :ref:`monaca.getDeviceId()<getDeviceId>`.
  ======================== ================== ==============================================================================================================================================================

  .. note:: Please note that ``deviceIdList``, ``userOidList`` and ``userQuery`` cannot be used at the same time.

Return Value
  ================ ===================================================================================================================================
  ``queueIdList``    A list of push queue id
  ================ ===================================================================================================================================

Error Code
  Errors are returned as :doc:`../cloud/error` object.

  ============ =======================================================================================================================================
  ``-32602``    Invalid params
  ============ =======================================================================================================================================

.. rst-class:: function-reference


.. _p.status:

.. rst-class:: function-reference

Push.status - Get Push Notification Status
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get push notification status.

:dfn:`Push.status`

Parameter
  ===================== ================ ==============================================================================================================
  ``pushProjectId``         string             :ref:`push_project_id`
  ``queueId``               string             Push queue ID (get this id from ``queueIdList``)
  ===================== ================ ==============================================================================================================

Return Value
  =================== ================================================================================================================================
  ``status``           Status (``finish``, etc.)
  ``numTarget``        Number of all recipients
  ``numPushed``        Number of success recipients
  ``numFailed``        Number of failed recipients
  ``createdAt``        Created time
  ``pushStartedAt``    Started time
  ``pushFinishedAt``   Finished time (regardless of success or failure)
  =================== ================================================================================================================================

Error Code
  Errors are returned as :doc:`../cloud/error` object.

  ============= ======================================================================================================================================
  ``-32602``     Invalid params
  ============= ======================================================================================================================================

.. rst-class:: function-reference


.. _push_project_id:

Push Project ID
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Push project ID is an unique identifier for sending push notification to your app. You can easily find this ID with the following instruction:

1. Go to *Monaca Backend* by clicking on a :guilabel:`cloud` icon in Monaca Cloud IDE. 
2. Then, click on :guilabel:`setting` icon and choose :guilabel:`Backend Settings...`. (See below screenshot)

  .. image:: ../images/cloud_management/backend_setting.png
    :width: 200px

3. You will see a Backend Settings panel on the right side of the screen. Next, click on :guilabel:`Push Notification`. Scroll down to the bottom of this page to see Push project ID of the current application. (See below)

  .. image:: ../images/cloud_management/push_projectID.png
    :width: 500px


.. seealso::

  *See Also*

  - :ref:`Push Notification API<push_notification_api>`
  - :ref:`Send Push Notification from Monaca<push_notification_manual>`
  - :ref:`backend_control_panel`
  - :ref:`backend_api_index`
  - :ref:`backend_database_memo`
  - :ref:`backend_management_api_index`
  - :ref:`backend_management_api_key`
