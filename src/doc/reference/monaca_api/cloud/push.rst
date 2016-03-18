.. _push_notification_api:

=====================================================================
Push Notification
=====================================================================

.. rst-class:: right-menu


The following JavaScript API is used to handle the push notifications.

================================================= ========================================================================================================
Method                                             Description
================================================= ========================================================================================================
:ref:`monaca.cloud.Push.setHandler()<p.Handler>`   Set JavaScript handler when receiving push notification
================================================= ========================================================================================================

  

.. _p.Handler:

.. rst-class:: function-reference

Push.setHandler - Set JavaScript handler when receiving push notification
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set push handler which is called when an application receives a push notification.


  :dfn:`monaca.cloud.Push.setHandler(callback: Function) : void`


Parameter
  ================ ==================================================================================================================================
   ``callback``     Callback function to handle incoming push notification. Additional data will be set at the first argument.
  ================ ==================================================================================================================================

Return Value
  ============= ==================
    ``None``
  ============= ==================

Example
  The following code shows a simple function to display the data received from the push notification in the console log.

  .. code-block:: javascript


    monaca.cloud.Push.setHandler(function(data) {
      console.log(data.item_a);
      console.log(data.item_b);
    });

.. seealso::

  *See Also*

  - :ref:`Send Push Notification using Monaca<push_notification_manual>`
  - :ref:`Push Notification API for Backend Management API<push_notification_for_backend_management_api>`
  - :ref:`backend_control_panel`
  - :ref:`backend_api_index`
  - :ref:`backend_database_memo`
  - :ref:`backend_management_api_index`
  - :ref:`backend_management_api_key`
