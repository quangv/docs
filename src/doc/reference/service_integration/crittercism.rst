.. _crittercism:

-----------------------------
Crittercism
-----------------------------

.. rst-class:: right-menu



`Crittercism <http://www.crittercism.com/>`__ is used to monitor and provide detailed analysis of your app. This service is available for both iOS and Android.



.. note:: Crittercism service integration is available for all Monaca users. However, if you want to use the latest Repro plugin via `Github <https://github.com/crittercism/PhoneGap>`_, you can :ref:`import <import_cordova_plugin>` it. In order to import this plugin, you need to subscribe to a valid plan. Please refer to `Pricing <https://monaca.mobi/en/pricing>`_. 

Add Crittercism Service to Monaca
=======================================

1. For Monaca Cloud IDE, go to :menuselection:`Config --> Service Integration` or go to :menuselection:`Build Settings --> Service Integration` for Monaca Localkit.

2. Click :guilabel:`Detail` button of Crittercism service.

3. Then, click :guilabel:`Install` button to add it into your project.

4. You will be asked to confirm the setup. Click :guilabel:`OK` to start the installation.


Remove Crittercism Service from Monaca
=======================================

1. For Monaca Cloud IDE, go to :menuselection:`Config --> Manage Cordova Plugins` or go to :menuselection:`Build Settings --> Cordova Plugins` for Monaca Localkit.

2. Look for Crittercism plugin and click :guilabel:`Remove` button.

Configure Crittercism Service in Monaca
================================================

You are required to have the Crittercism App ID in order to use Crittercism with Monaca. In order to get this App ID, please do as follows:

1. Register your app with Crittercism.

2. You can find Crittercism App ID by going to :guilabel:`App Settings` from Crittercism App Dashboard.

  .. figure:: images/crittercism/1.png  
      :width: 600px
      :align: left

  .. rst-class:: clear


3. After you get the Crittercism App ID, go to :menuselection:`Config --> Manage Cordova Plugins` from Monaca Cloud IDE.

4. Select Crittercism's :guilabel:`Settings` button and input the Crittercism App ID.

  .. code-block:: javascript

      ANDROID_APP_ID=xxxxxxxxxxxxxxxxxxxxxxxx
      IOS_APP_ID=yyyyyyyyyyyyyyyyyyyyyyyy

  .. note:: In Crittercism、Android & iOS platforms will be managed separately. However in Monaca, it is managed as one app; therefore, App ID has to be set differently. If users want to build only one platform, they can just set the App ID for that platform.

Usage
==========================

.. note:: In order to use Crittercism's APIs, except ``setLogUnhandedExceptionAsCrash`` API, users need to subscribe to Professional Plus Plan in Crittercism. Please refer to `Crittercism Pricing <http://www.crittercism.com/plans/>`__. 


JavaScript Error Crash
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Unhandled JavaScript exceptions are normally reported to the Handled Exceptions area of the Crittercism server because the app itself doesn’t crash. Use the ``setLogUnhandledExceptionAsCrash`` API to request Crittercism to report unhandled JavaScript exceptions to the Crash Reports area of the Crittercism server instead.

.. code-block:: javascript

    document.addEventListener("deviceready",onDeviceReady,false);
    function onDeviceReady() {
        Crittercism.setLogUnhandledExceptionAsCrash(true);
    }

Handled Exception
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use the ``logHandledException`` API to track error conditions that do not necessarily cause a crash. The argument ``e`` has ``name``, ``message`` and ``stack`` as its properties.

.. code-block:: javascript

    try {
      JSON.parse(“this is not valid json”);
    } catch (e) {
      Crittercism.logHandledException(e);
    }
    

Transaction Logs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Transactions allow companies to track key interactions or user flows in their app such as login, account registration, and in app purchase. If a crash occurs, all in-flight transactions will automatically be crashed and reported with the crash.

Here is an example of how to show the success or failed transaction logs:

.. code-block:: javascript

    Crittercism.beginTransaction(“transaction_name”);
    var success = doYourTask();
    if (success) {
      Crittercism.endTransaction(“transaction_name”);
    } else {
      Crittercism.failTransaction(“transaction_name”);
    }



Breadcrumb
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use the ``leaveBreadcrumb`` API to write to a chronological log that is reported with crashes and handled exceptions. A breadcrumb is a developer-defined text string (up to 140 characters) that allows developers to capture app run-time information. Example breadcrumbs may include variable values, progress through the code, user actions, or low memory warnings.

.. code-block:: javascript

    Crittercism.leaveBreadcrumb("User tapped a button");

Set username
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Setting a username will allow the ability to monitor app performance for each user. Once a username is set, the Crittercism portal’s “Search by User” feature may be used to lookup a list of crashes and errors a specific user has experienced. It is recommended to set a username to a value that can be tied back to your customer support system.

.. code-block:: javascript

    Crittercism.setUsername(“MyName”);


.. note:: For more information on how to use Crittercism, please refer to `PhoneGap Integration Guide with Crittercism <http://docs.crittercism.com/development_platforms/phonegap.html/>`_.



Show Crash Reports
==========================

In order to check the Crash Log of your app:

1. Log into Crittercism.

2. Select on your app and click on :guilabel:`Crash Reports`.

  .. figure:: images/crittercism/2.png  
      :width: 600px
      :align: left

  .. rst-class:: clear

.. note:: For further information regarding the usage of Crittercism with Monaca, please contact us `here <http://www.asial.co.jp/en/contactus.php>`_. 
