==================================
Mailer
==================================

.. rst-class:: right-menu


Mailer allows to send emails to the users.

==================================================================== ====================================================================================
Method                                                                Description
==================================================================== ====================================================================================
:ref:`monaca.cloud.Mailer.sendMail()<m.sendMail>`                      Send an email to a recipient
==================================================================== ====================================================================================

.. rst-class:: function-reference

.. _m.sendMail:

Mailer.sendMail() - Send an Email to a Recipient
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Send an email to a recipient.

:dfn:`Mailer.sendMail(userOid, templateName, substituteParams , [options]) : $.Promise`

Parameter
  ============================= ======== ================================================================================================================
  ``userOid``                    String   The recipient user's oid.
  ``templateName``               String   The template Name.
  ``substituteParams``           Object   The placeholder names parameters used in the template.
  ``options.emailPropertyName``  Object   The property name to use for the email address (default: ``_username``).
  ============================= ======== ================================================================================================================

Return Value
  =============================== =======================================================================================================================
  `$.Promise <../other>`_ object   Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  =============================== =======================================================================================================================

Errors Code
  The error is returned as an :doc:`error` object.

  ============ ==========================================================================================================================================
  ``-32602``    Invalid params
  ``-32603``    Internal error (When the server failed to send mail)
  ``11``       User login is required.
  ============ ==========================================================================================================================================

*Example*

  The following sample denotes how to send an email using the ``"template_a"`` template. In this case, the ``"name"`` parameter is replaced by ``"John"`` in the message.

  .. code-block:: javascript

    var username = 'John';
    monaca.cloud.Mailer.sendMail("userOidA", "template_a", {"name": username})
      .done
      (
        function() 
        { /* What to do after sending an email is success. */ }
      );


.. seealso::

  *See Also*

  - :ref:`backend_control_panel`
  - :ref:`backend_api_index`
  - :ref:`backend_database_memo`
  - :ref:`backend_management_api_index`
  - :ref:`backend_management_api_key`
