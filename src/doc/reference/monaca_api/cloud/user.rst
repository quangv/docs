.. _user_api:

=================================
User
=================================

.. rst-class:: right-menu


In Monaca, you can add user account functionality to your app by using the following Monaca Backend JavaScript APIs. 


.. note:: In order to access Backend API, you need to load ``jQuery`` and register ``cloud.monaca.mobi`` in the whitelist by editing each OS's configuaration file. For more details, please refer to :ref:`Access Origin (Android) <access_origin_android>` and :ref:`Access Origin (iOS) <access_origin>`.


============================================================== ==========================================================================================
Method/Property                                                 Description
============================================================== ==========================================================================================
:ref:`monaca.cloud.User.register()<u.register>`                 Sign up a user
:ref:`monaca.cloud.User.validate()<u.validate>`                 Validate registration parameters.
:ref:`monaca.cloud.User.unregister()<u.unregister>`             Unregister the current user
:ref:`monaca.cloud.User.login()<u.login>`                       Sign in a user
:ref:`monaca.cloud.User.isAuthenticated()<u.isAuthenticated>`   Check whether a user has signed in or not
:ref:`monaca.cloud.User.autoLogin()<u.autoLogin>`               Sign in a user automatically
:ref:`monaca.cloud.User.logout()<u.logout>`                     Sign out a user
:ref:`monaca.cloud.User.updatePassword()<u.updatePass>`         Update password for the current user
:ref:`monaca.cloud.User.sendPasswordResetToken()<u.sendPass>`   Email a token of new password
:ref:`monaca.cloud.User.resetPasswordAndLogin()<u.resetPass>`   Reset password and relogin
:ref:`monaca.cloud.User.getProperty()<u.getProperty>`           Get a property value of a user
:ref:`monaca.cloud.User.getProperties()<u.getProperties>`       Get property values of a user
:ref:`monaca.cloud.User.saveProperty()<u.saveProperty>`         Update a property of a user
:ref:`monaca.cloud.User.saveProperties()<u.saveProperties>`     Update a properties of a user
:ref:`monaca.cloud.User._oid<u._oid>`                           Public identifier of a user
============================================================== ==========================================================================================

.. _u.register:

.. rst-class:: function-reference

User.register()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sign a user up with his/her username and password.

:dfn:`monaca.cloud.User.register(username: String, password: String, [properties: Object]) : $.Promise`

Parameter
  =============== ======================================================================================================================================
  ``username``     The username for the user.
  ``password``     The password for the user.
  ``properties``   Additional properties of the user. The object needs to be a valid JSON format. The key must not start with an underscore. This parameter is optional.
  =============== ======================================================================================================================================

Result Parameter of done() Callback
  =============== =================== =================================================================================================================
  ``user``        Object              - `_id` : {String}
                                      - `_username` : {String}
                                      - `_createdAt` : {Number} unixtime
                                      - `_updateAt` : {Number} unixtime
                                      - and other user-defined properties.
  =============== =================== =================================================================================================================

Requirement
  ============== ======================================================================================================================================
  ``username``    Must not be a duplicate name of an existing user. Must not include any space characters. Must not be shorter than ``X`` characters. Must not be longer than ``255`` characters. It can be an email address.
  ``password``    Must not include any space characters. Must not be shorter than ``Y`` characters. Must not be longer than ``80`` characters. 
  ``properties``  Key names must consist of **[a-zA-Z0-9_]** characters and must start with **[a-zA-Z]**. Data size must not exceed the size limit (``500KB``).
  ============== ======================================================================================================================================

  .. note:: X and Y values can be set in Settings page on Monaca Cloud IDE.

Return Value
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object    Use ``done()``, ``fail()`` and ``always()`` methods to process result.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``-32602``   Invalid params
  =========== =========================================================================================================================================

Example
  The following snippet shows how to create a new user account with the username ``"me@example.com"``, password ``"password"`` and age ``21``.

  .. code-block:: javascript

    monaca.cloud.User.register("me@example.com", "password", {age:21})
    .done(function(result)
    {
       console.log("Welcome, " + result.user._username);
       console.log("You are " + result.user.age + " years old.");
    }
    )
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _u.validate:

User.validate()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Validate registration parameters.

:dfn:`monaca.cloud.User.validate(username: String, properties: Object) : $.Promise`

Parameter
  ================ ====================================================================================================================================
  ``username``      The username for the user.
  ``properties``    The properties of the user. The object is encoded and saved as JSON format.
  ================ ====================================================================================================================================

Return Value
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object    Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``-32602``    Invalid params
  =========== =========================================================================================================================================

Example
  The following code illustrates an example of a user validation by checking whether the username ``"me@example.com"`` already exists.

  .. code-block:: javascript
    
    monaca.cloud.User.validate("me@example.com")
    .done(function(result)
    {
       console.log("Validation passed!");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _u.unregister:

User.unregister()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Unregister the current user. The current user must be authenticated.

:dfn:`monaca.cloud.User.unregister(password: String) : $.Promise`

Parameter
  ============== ======================================================================================================================================
  ``password``    The password for the user.
  ============== ======================================================================================================================================

Return Value
  ================================= ===================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================= ===================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``-32602``    Invalid params
  ``11``       User login is required.
  =========== =========================================================================================================================================

Example
  The below snippet demonstrates how to unregister the current user whose password is ``"password"``.

  .. code-block:: javascript

    monaca.cloud.User.unregister("password")
    .done(function(result)
    {
       console.log("You are unregistered");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _u.login:

User.login()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sign in a user.

:dfn:`monaca.cloud.User.login(username: String, password: String) : $.Promise`


Parameter
  ============= =======================================================================================================================================
  ``username``   The username of the user.
  ``password``   The password of the user.
  ============= =======================================================================================================================================

Result Parameter of done() Callback
  =============== =================== =================================================================================================================
  ``user``        Object              - `_id` : {String}
                                      - `_username` : {String}
                                      - `_createdAt` : {Number} unixtime
                                      - `_updateAt` : {Number} unixtime
                                      - and other user-defined properties.
  =============== =================== =================================================================================================================

Return Value
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object      Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================


Errors Code
  Error is returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``-32602``    Invalid params
  =========== =========================================================================================================================================

Example
  The following is a typical example of how to login a user with a username ``"me@example.com"`` and password ``"password"``.

  .. code-block:: javascript

     monaca.cloud.User.login("me@example.com", "password")
     .done(function(result){
        console.log("Hello again, " + result.user._username);
     })
     .fail(function(err)
     {
        console.log("Err#" + err.code +": " + err.message);
     });


.. rst-class:: function-reference

.. _u.isAuthenticated:

User.isAuthenticated()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Return a boolean value whether the user has logged-in or not.

:dfn:`monaca.cloud.User.isAuthenticated() : Boolean`

Parameter
  =========== =============
  ``None``
  =========== =============

Return Value:
  =========== =========================================================================================================================================
  ``Boolean``  ``true`` if already authenticated, otherwise ``false``.
  =========== =========================================================================================================================================

Example
  .. code-block:: javascript

    if (false == monaca.cloud..User.isAuthenticated()) {
      // Go to login
    }


.. rst-class:: function-reference

.. _u.autoLogin:

User.autoLogin()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When the user restarts the app, this function automatically logs in the user.
It is required to enable auto-login feature with Monaca Cloud IDE.

:dfn:`monaca.cloud.User.autoLogin() : $.Promise`

Parameter
  =========== ===========
  ``None``
  =========== ===========

Result Parameter of done() Callback
  =============== =================== =================================================================================================================
  ``user``        Object              - `_id` : {String}
                                      - `_username` : {String}
                                      - `_createdAt` : {Number} unixtime
                                      - `_updateAt` : {Number} unixtime
                                      - and other user-defined properties.
  =============== =================== =================================================================================================================

Return Value
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``13``      Invalid operation (When auto-login feature is disabled).
  ``-32602``   Invalid params
  =========== =========================================================================================================================================


Example:
  The following code will enable automatic login for a user.

  .. code-block:: javascript

    monaca.cloud.User.autoLogin()
    .done(function(result)
    {
       console.log("Hello again, " + result.user._username);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _u.logout:

User.logout()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sign out the user. The user must be authenticated. When the user signs out, auto-login will be disabled.

:dfn:`monaca.cloud.User.logout() : $.Promise`


Parameter
  =========== ===========
  ``None``
  =========== ===========


Return Value:
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================


Errors Code
  Error is returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``-32602``    Invalid params
  ``11``       User login is required.
  =========== =========================================================================================================================================


Example
  The following example will show how to log out the current user.

  .. code-block:: javascript

    monaca.cloud.User.logout()
    .done(function(result)
    {
       console.log("You are successfully logged out");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });


.. rst-class:: function-reference

.. _u.updatePass:

User.updatePassword()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update password for the current user. The user must be authenticated.

:dfn:`monaca.cloud.User.updatePassword(oldPassword: String, newPassword: String) : $.Promise`

Parameter
  ================= ===================================================================================================================================
  ``oldPassword``     Old password.
  ``newPassword``     New password.
  ================= ===================================================================================================================================


Return Value:
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  ============ ========================================================================================================================================
  ``-32602``    Invalid params
  ``11``       User login is required.
  ============ ========================================================================================================================================

Example:
  The following code will update the password of a current user from ``"pass123"`` to ``"newPass123"``.

  .. code-block:: javascript

    monaca.cloud.User.updatePassword("oldPassword", "newPassword")
    .done(function(result)
    {
       console.log("Your password is successfully changed");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });

.. rst-class:: function-reference

.. _u.sendPass:

User.sendPasswordResetToken()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Send an email with a token to reset the password in case a user could not log in because of a forgotten password. Before sending this email, it is required to create an email template by using Monaca Cloud IDE in advance. Please refer to :ref:`backend_control_panel_mail_template_management` for how to create an email template.

:dfn:`monaca.cloud.User.sendPasswordResetToken(username: String, options: Object) : $.Promise`

Parameter
  ============== =====================================================================================================================================
  ``username``   the name of the user.                                                                                                               
  ``options``    - ``emailPropertyName``: Specify the name field which has the user's email address (default: ``_username``)                          
                 - ``templateName``: Specify a template to use (default: ``send_password_token``). The mail body must include ``"%PASSWORD_RESET_TOKEN%"`` which will be replaced with the token.                                                              
  ============== =====================================================================================================================================

Return Value:
  +------------------------------+-------------------------------------------------------------------------------------------------------------------+
  |`$.Promise <../other>`_ object| Use ``done()``, ``fail()`` and ``always()`` methods to get results.                                               |
  +------------------------------+-------------------------------------------------------------------------------------------------------------------+


Errors Code
  Errors are returned as :doc:`error` object.

  ============ ========================================================================================================================================
  ``-32602``    Invalid params
  ``13``       Invalid operation (When the user has already logged-in).
  ============ ========================================================================================================================================

Example
  The following snippet shows an example of how to send an email with the new token to a user called ``"username"`` with his registered email address registered with "email" field.

  .. code-block:: javascript

     monaca.cloud.User.sendPasswordResetToken("username", {emailPropertyName:"email"})
     .done(function()
     {
        console.log("An email was successfully sent.");
     })
     .fail(function(err)
     {
        console.log("Err#" + err.code +": " + err.message);
     });

.. rst-class:: function-reference

.. _u.resetPass:

User.resetPasswordAndLogin()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Reset the password of the current user and relogin with the new password.

:dfn:`monaca.cloud.User.resetPasswordAndLogin(username: String, newPassword: String, token: String) : $.Promise`

Parameter
  ================ ====================================================================================================================================
  ``username``      The username of the user.
  ``newPassword``   The new password.
  ``token``         The token which the user received via email, sent by User.sendPasswordResetToken().
  ================ ====================================================================================================================================

Result Parameter of done() Callback
  =============== =================== =================================================================================================================
  ``user``        Object              - `_id` : {String}
                                      - `_username` : {String}
                                      - `_createdAt` : {Number} unixtime
                                      - `_updateAt` : {Number} unixtime
                                      - and other user-defined properties.
  =============== =================== =================================================================================================================

Return Value
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``-32602``    Invalid params
  =========== =========================================================================================================================================

Example
  The following example demonstrates how to reset the password of a user and then login with the new password.

  .. code-block:: javascript

    monaca.cloud.User.resetPasswordAndLogin("username", "newPassword", "000000")
    .done(function(result)
    {
       console.log(result.user._username + ", your password is successfully changed.");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });


.. rst-class:: function-reference

.. _u.getProperty:

User.getProperty()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get a property value of the user. The user must be authenticated.

:dfn:`monaca.cloud.User.getProperty(name: String) : $.Promise`

Parameter
  =========== =========================================================================================================================================
  ``name``      A property name.
  =========== =========================================================================================================================================

Return Value
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Error is returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``11``       User login is required.
  =========== =========================================================================================================================================


Example:
  Refer to the following code for an example of how to get a property value of ``"age"`` of a user.

  .. code-block:: javascript

    monaca.cloud.User.login("me.@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.getProperty("age");
    })
    .then(function(age)
    {
       console.log(age);
    })

.. rst-class:: function-reference

.. _u.getProperties:

User.getProperties()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get an array of property values of the user. The user must be authenticated.

:dfn:`monaca.cloud.User.getProperties(names: Array) : $.Promise`

Parameter
  =========== =========================================================================================================================================
  ``names``     Properties names.
  =========== =========================================================================================================================================

Result Parameter of done() Callback
  ============================== =================== ==============================================================================================
  user-defined property name        Any                 
  ============================== =================== ==============================================================================================

Return Value:
  ================================ ===================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ===================================================================================================================

Errors Code
  Error is returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``11``       User login is required.
  =========== =========================================================================================================================================

Example:
  Below is how to get the values of 2 properties of a user.

  .. code-block:: javascript

    monaca.cloud.User.login("me@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.getProperties(["age", "icon"]);
    })
    .then(function(properties)
    {
       console.log(properties.age);
       console.log(properties.icon);
    })

.. rst-class:: function-reference

.. _u.saveProperty:

User.saveProperty()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update a property value of the user. The user must be authenticated.

:dfn:`monaca.cloud.User.saveProperty(name: String, value: String) : $.Promise`

Parameter
  =========== =========================================================================================================================================
  ``name``     Property name.
  ``value``    The value of the corresponding property name to be added or updated.
  =========== =========================================================================================================================================

Requirement
  =========== =========================================================================================================================================
  ``name``     Must consist of \[a\-zA\-Z0\-9\] characters and must start with \[a\-zA\-Z\].
  =========== =========================================================================================================================================

Return Value:
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``-32602``   Invalid params
  ``11``      User login is required.
  =========== =========================================================================================================================================

Example
  The following example illustrates how to add/update the user's nickname to ``"John"``. 

  .. code-block:: javascript

    monaca.cloud.User.login("me@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.saveProperty("nickname", "John");
    })
    .then(function()
    {
       cosole.log("Your nickname was changed");
    })


.. rst-class:: function-reference

.. _u.saveProperties:

User.saveProperties()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update an array of property values of a user. The user must be authenticated.

:dfn:`monaca.cloud.User.saveProperties(properties: Object) : $.Promise`

Parameter
  =============== =====================================================================================================================================
  ``properties``   Additional properties of a user to be added/updated.
  =============== =====================================================================================================================================

Return Value:
  ================================ ====================================================================================================================
  `$.Promise <../other>`_ object     Use ``done()``, ``fail()`` and ``always()`` methods to get results.
  ================================ ====================================================================================================================

Errors Code
  Errors are returned as :doc:`error` object.

  =========== =========================================================================================================================================
  ``-32602``    Invalid params
  ``11``       User login is required.
  =========== =========================================================================================================================================

Example
  The following example illustrates how to add/update 2 properties (``nickname`` & ``email``) of a user. 

  .. code-block:: javascript

    monaca.cloud.User.login("me@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.saveProperties({"nickname":"John", "email":"john@example.com"});
    })
    .then(function()
    {
       cosole.log("Your nickname and email were changed");
    })

.. rst-class:: function-reference

.. _u._oid:

User._oid
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Public identifier of a user. When the user has logged-in, ``monaca.cloud.User._oid`` is a long string. Otherwise, oid is ``null``.

:dfn:`monaca.cloud.User._oid`

Example
  .. code-block:: javascript

    var oid = monaca.cloud.User._oid;


.. seealso::

  *See Also*

  - :ref:`user_management`
  - :ref:`backend_control_panel`
  - :ref:`backend_api_index`
  - :ref:`backend_database_memo`
  - :ref:`backend_management_api_index`
  - :ref:`backend_management_api_key`
