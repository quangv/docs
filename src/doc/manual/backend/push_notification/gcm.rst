.. _android_app_push_settings:

================================================
Android App Push Notification Settings
================================================

.. rst-class:: right-menu

Overview 
================================================

Monaca sends push notifications via GCM (Google Cloud Messaging). GCM is a mechanism offered by Google to send push notifications to Android applications. 

In this page, we will show what you need to do in order to enable push notifications service for Android applications with Monaca. 


.. note:: You are required to have a Google account for this configuration. 


Step 1: Enable GCM in the Google API Console
================================================

In this example, we assume that you haven't registered your application to Google Developer Console yet.

1. Go to `Google API Console <https://console.developers.google.com/>`_. and sign in with a valid Google account. 

2. Click on :guilabel:`Create a project`.

  .. figure:: images/gcm/9.png
    :width: 700px
    :align: left

  .. rst-class:: clear

3. Input the project's name and click :guilabel:`Create`. After the project is successfully created, the project Overview page will appear.

  .. figure:: images/gcm/1.png
    :width: 500px
    :align: left

  .. rst-class:: clear

4. From the Overview page, select :guilabel:`Google Cloud Messaging` under :guilabel:`Mobile APIs`.

  .. figure:: images/gcm/2.png
    :width: 700px
    :align: left

  .. rst-class:: clear

5. Click :guilabel:`Enable`.

  .. figure:: images/gcm/10.png
    :width: 700px
    :align: left

  .. rst-class:: clear

Step 2: Obtain the Sender ID and Server API Key
=====================================================


Find Sender ID
^^^^^^^^^^^^^^^^^^

Sender ID is the Project Number which can be found in Settings page as shown below:


1. Click on Google APIs menu.

  .. figure:: images/gcm/11.png
    :width: 250px
    :align: left

  .. rst-class:: clear

2. Go to :guilabel:`IAM & Admin`.

  .. figure:: images/gcm/12.png
    :width: 700px
    :align: left

  .. rst-class:: clear

3. Then, go to :guilabel:`Settings`. There you can find the project number.

  .. figure:: images/gcm/3.png
    :width: 700px
    :align: left

  .. rst-class:: clear


Find Server API Key
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. From the API Manager page, go to :guilabel:`Credentials`. 

2. Click :guilabel:`Create credentials` and choose :guilabel:`API key`.

  .. figure:: images/gcm/4.png
    :width: 700px
    :align: left

  .. rst-class:: clear

3. Select :guilabel:`Server key`. 

4. Name your Server key and click :guilabel:`Create`.

  .. figure:: images/gcm/5.png
    :width: 700px
    :align: left

  .. rst-class:: clear


5. Then, Server API key will be created and displayed as shown below. Copy it. You will need to use this key in Monaca Cloud IDE later. 

Step 3: Configure GCM Parameters in Monaca
===================================================

1. From the Backend Panel in Monaca Cloud IDE, go to :menuselection:`Push Notification --> Backend Settings --> Push Configuration`.

  .. figure:: images/gcm/7.png
    :width: 600px
    :align: left

  .. rst-class:: clear

2. Under Android section, input the Sender ID and Server API Key and click :guilabel:`Save`. Then, the setup processes for Android app notifications are completed. 

  .. figure:: images/gcm/8.png
    :width: 600px
    :align: left



