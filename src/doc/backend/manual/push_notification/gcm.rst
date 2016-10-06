.. _android_app_push_settings:

================================================
Android App Push Notification Settings
================================================

.. rst-class:: right-menu

Overview 
================================================

Monaca sends push notifications via FCM (Firebase Cloud Messaging). FCM is a cross-platform messaging solution that lets you reliably deliver messages at no cost. Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user reengagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4KB to a client app.

In this page, we will show what you need to do in order to enable push notifications service for Android applications with Monaca. 

.. note:: You are required to have a Google account for this configuration. 


Step 1: Get API Key from Firebase Console
================================================

In order to integrate Monaca with FCM, API key is required. Please follow the instruction below to get an API key from the Firebase Console:

1. Go to `Firebase Console <https://console.firebase.google.com/>`_. and sign in with a valid Google account. 

2. Click on :guilabel:`CREATE NEW PROJECT`.

  .. figure:: images/gcm/9.png
    :width: 700px
    :align: left

  .. rst-class:: clear

3. Input a project's name and choose your country/region. Then, click :guilabel:`CREATE PROJECT`.

  .. figure:: images/gcm/1.png
    :width: 483px
    :align: left

  .. rst-class:: clear

4. Once your project is created, go to :guilabel:`Project settings` from the left menu.

  .. figure:: images/gcm/2.png
    :width: 700px
    :align: left

  .. rst-class:: clear

5. In the Settings page, go to :guilabel:`CLOUD MESSAGING`. Then, you will be able to see the ``Server Key`` and ``Sender ID`` which will be used in Monaca later. The ``Server Key`` is used as an API key for the push notification and the ``Sender ID`` represents a sender. 

  .. figure:: images/gcm/10.png
    :width: 700px
    :align: left

  .. rst-class:: clear


Step 2: Configure FCM Parameters in Monaca
===================================================

1. From the Backend Panel in Monaca Cloud IDE, go to :menuselection:`Push Notification --> Backend Settings --> Push Configuration`.

  .. figure:: images/gcm/7.png
    :width: 600px
    :align: left

  .. rst-class:: clear

2. Under Android section, input the Sender ID and Server API Key and click :guilabel:`Save`. Now, the Android push notification is enabled and ready to use.

  .. figure:: images/gcm/8.png
    :width: 600px
    :align: left



