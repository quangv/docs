.. _android_configuration_file:

===================================================================================================
Android Configuration
===================================================================================================

.. rst-class:: right-menu


There are 2 ways to configure your Android apps:

1. :ref:`Configure via Monaca Cloud IDE <android_config_ide>`
2. :ref:`Configure via configuration files directly <android_config_files>`.


.. _android_config_ide:

Configuration via Monaca Cloud IDE
====================================

Android App Settings Page
^^^^^^^^^^^^^^^^^^^^^^^^^^

The Android App Settings page allows to set several commonly used parameter in Android app. Please follow the following instruction in order to access the Android App Setting page in Monaca Cloud IDE:

1. From Monaca Cloud IDE menu, go to :menuselection:`Config --> Android App Settings...`.

2. *Android App Configuration* page will appear as shown below. You can then start your configuration.

  .. image:: images/android/3.png
      :width: 600px

3. After finishing the configuration, please click :guilabel:`Save`.
   

Configurable Parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^

In the Android App Settings page, you can configure the parameters such as application information, icons, splash files, permissions and additional features. The following are the list of parameters can be configured via the page:

- *Allowed URL*: [Set to ``*`` by default] Specify URL(s) which can be accessed from your app. If set to ``*``, you can access all domains from your app.
- *Keep Running*: [Enable by default] Enable this if you want Cordova to keep running in the background. 
- *Disallow Overscroll*: [Enable by default] Enable this if you want to disable the glow when a user scrolls beyond the edge of the webview.
- *WebView Engine*: Specify the WebView engine between the default one and Crosswalk.
- *Display Time*: Specify the duration of showing splashscreen.
- *Screen Orientation*: Specify the screen orientation of the app.




.. _android_config_files:

Configuration via Configuration Files
=========================================

All the configuration parameters of an Android app are stored in the files as follows:
  
  - :ref:`config_xml_android`
  - :ref:`manifest_xml`

.. note::
  
  These configurations are critical to the Android app to run. Wrong configuration can prevent the app from running properly, please edit the file carefully.


.. _config_xml_android:

config.xml
^^^^^^^^^^^^^^^^^^^^^^^^^^

The :file:`config.xml` file is a settings file controlling various settings of Cordova. It's located under ``www`` folder inside your monaca project. 

.. figure:: images/android/2.png
    :width: 198px
    :align: center

Below are available elements and preferences you may need to configure:


.. _widget_android:

------------------------------------
*<widget>* element
------------------------------------

*version*

================= ======================================================================================================================================
  Attribute        ``version``
  Type             string
  Default          ``1.0.0``
  Description      a version number which is visible to users
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  <widget id="com.example.helloworld" version="1.0.0">
    ...
  </widget>


*android-versionCode*

================= ======================================================================================================================================
  Attribute        ``android-versionCode``
  Type             string
  Default          automatically set. When ``version`` attribute is ``"1.22.33"``, it will be 102233 (=1 * 10000 + 22 * 100 + 33). If the project uses 
                   Crosswalk, it will be ``2xxxxxx`` for ARM architecture and ``7xxxxxx`` for x86 architecture.
  Description      an internal version code. It is used only to determine whether one version is more recent than others. Higher number indicates a 
                   more recent version. This version number is not shown to users.
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  <widget id="com.example.helloworld" version="0.0.1" android-versionCode="7">
    ...
  </widget>


.. _content_android:

------------------------------------
*<content> element*
------------------------------------

================= ======================================================================================================================================
  Attribute        ``src``
  Type             string
  Default          ``indext.html``
  Description      the ``<content>`` element defines the app's starting page in the top-level web assets directory. You can change the starting page 
                   by changing the value of the ``src`` attribute to your preferred URL.
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  <widget id="com.example.helloworld" version="1.0.0">
    ...
    <content src="https://monaca.io/" /> 
  </widget>


.. _access_origin_android:

------------------------------------
*<access> element*
------------------------------------

================= ======================================================================================================================================
  Attribute        ``origin``
  Type             string
  Default          ``*``
  Description      it is used to declare access to specific network domains. If set to ``*``, you can access all domains from your app.
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  ...
  <access origin="*" />
  ...


------------------------------------
*<preference> element*
------------------------------------

The ``<preference>`` tag sets various options as pairs of name/value attributes. Each preference's name is case-insensitive. Many preferences are unique to specific platforms, as listed at the top of this page. The following sections detail preferences that apply to more than one platform.


------------------------------------
*KeepRunning*
------------------------------------

================= ======================================================================================================================================
  Attribute        ``value``
  Type             boolean
  Default          ``true``
  Description      determines whether Cordova will keep running in the background or not.
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  ...
  <preference name="KeepRunning" value="false" />
  ...

.. _disallow_over_scroll_android:

------------------------------------
*DisallowOverscroll*
------------------------------------

================= ======================================================================================================================================
  Attribute        ``value``
  Type             boolean
  Default          ``false``
  Description      sets to ``true`` if you don't want the interface to display any feedback when users scroll past the beginning or end of content.
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  ...
  <preference name="DisallowOverscroll" value="true"/>
  ...


------------------------------------
*Fullscreen*
------------------------------------

================= ======================================================================================================================================
  Attribute        ``value``
  Type             boolean
  Default          ``false``
  Description      allows you to hide the status bar at the top of the screen.
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  ...
  <preference name="Fullscreen" value="true" />
  ...


------------------------------------
*SplashScreenDelay*
------------------------------------

================= ======================================================================================================================================
  Attribute        ``value``
  Type             number
  Default          ``3000``
  Description      sets the default delay of how long the splashscreen appears in milliseconds. This should be the worst-case expected start time. 
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  ...
  <preference name="SplashScreenDelay" value="10000" />
  ...


------------------------------------
*LogLevel*
------------------------------------

================= ======================================================================================================================================
  Attribute        ``value``

  Type             string

  Default          ``ERROR``

  Description      sets the minimum log level through which log messages from your application will be filtered. There are 5 valid values such as: 
                   ``ERROR``, ``DEBUG``, ``WARN``, ``INFO`` and ``VERBOSE``.
================= ======================================================================================================================================

- Example:

.. code-block:: xml

  ...
  <preference name="loglevel" value="DEBUG" />
  ...

------------------------------------
*AndroidPersistentFileLocation*
------------------------------------

================= ======================================================================================================================================
  Attribute        ``value``

  Type             string

  Default          ``Internal``

  Description      sets where to store Android persistent files. There are 2 valid values such as: 
                      
                      - ``Internal``: will put persistent files under the user's application internal storage directory.
                      - ``Compatibility``: will put persistent files under storage root.
================= ======================================================================================================================================

.. note:: If your application has previously been shipped to users, using an older (pre- 3.0.0) version of this plugin, and has stored files in the persistent filesystem, then you should set the preference to Compatibility if your config.xml does not specify a location for the persistent filesystem. Switching the location to "Internal" would mean that existing users who upgrade their application may be unable to access their previously-stored files, depending on their device.

- Example:

.. code-block:: xml

  ...
  <preference name="AndroidPersistentFileLocation" value="Internal" />
  ...



-----------------------------------------------
*ScreenOrientation* (Cordova 5.2 or Higher)
-----------------------------------------------

================= ======================================================================================================================================
  Attribute        ``value``

  Type             string

  Default          ``default``

  Description      sets screen orientation for devices. There are 3 valid values such as: 
                      
                      - ``default``: will use system default screen orientation.
                      - ``landscape``: set screen orientation to landscape mode.
                      - ``portrait``: set screen orientation to portrait mode.
================= ======================================================================================================================================

- Global Settings:

.. code-block:: xml

  <widget>
        ....
        <preference name="orientation" value="default"/>
        ....
  </widget>


- Platform Specific Settings:

.. code-block:: xml

  <widget>
        ...
        <platform name="android">
          <preference name="orientation" value="default"/>
        </platform>
       ...
  </widget>


.. _manifest_xml:

AndroidManifest.xml
^^^^^^^^^^^^^^^^^^^^^^^^^^

Basic behaviour of Android applications can be configured by editing :file:`AndroidManifest.xml` file. It is located under ``android`` folder inside your monaca project as shown below:

.. figure:: images/android/1.png
    :width: 198px
    :align: center


:file:`AndroidManifest.xml` (Main elements)

.. code-block:: xml

  <?xml version="1.0" encoding="utf-8"?>
  <manifest>

    <uses-permission />
    <uses-sdk />
    <uses-feature />  
    <supports-screens />  

    <application>
      <activity>
          <intent-filter>
              <action />
              <category />
          </intent-filter>
      </activity>
    </application>

  </manifest>




------------------------------------
*<manifest>*
------------------------------------

Is the root element of :file:`AndroidManifest.xml` file. The child element of ``<manifest>`` is ``<application>`` and it must contain :file:`xlmns:android` and ``package`` attributes. 

.. code-block:: xml

  <manifest xmlns:android="http://schemas.android.com/apk/res/android"
      android:versionCode="%%%VERSION_CODE%%%"
      android:versionName="%%%VERSION_NAME%%%" package="%%%PACKAGE_NAME%%%">
  </manifest>

===================== ==================================================================================================================================
Attribute              Description
===================== ==================================================================================================================================
xmlns:android          an Android namespace attribute. This attribute must always have this value: ``http://schemas.android.com/apk/res/android``.
android:versionCode    an internal version number. It is used only to determine whether one version is more recent than others. Higher number indicates 
                       a more recent version. This version number is not shown to users.
android:versionName    a version number which is visible to users. 
===================== ==================================================================================================================================

------------------------------------
*<uses-sdk>*
------------------------------------

Is API level settings of the application. This element is contained in ``<manifest>``.

.. code-block:: xml

  <uses-sdk android:minSdkVersion="14" android:targetSdkVersion="22" />

========================= ===============================================================================================================================
Attribute                  Description
========================= ===============================================================================================================================
android:minSdkVersion      minimum API level required for the application to run. Android uses this value to determine whether the application can be installed in a device.
android:targetSdkVersion   API level that the application targets. 
========================= ===============================================================================================================================


------------------------------------
*<uses-permission>*
------------------------------------

Is permission settings. The permission is granted When the application is installed. This element is contained in ``<manifest>``

*Permissions for Camera*

.. code-block:: xml

  <uses-permission android:name="android.permission.CAMERA"></uses-permission>


====================== ==================================================================================================================================
Attribute               Description
====================== ==================================================================================================================================
android:name            name of the permissions to be granted for the Android system. The name of the permission can be defined as Camera, Network and etc. 
====================== ==================================================================================================================================

.. _permissions:

------------------------------------
*How to Define <uses-permission>*
------------------------------------

``<components/loader.js>`` needs ``ACCESS_NETWORK_STATE`` permission to run. You may exclude this file from ``<uses-permission>`` if it's not necessary for your application. 

.. rst-class:: wide-table

  =============================== ========================================================== ======================================================================
  Permission name                 Description                                                  Standard System Permissions      
  =============================== ========================================================== ======================================================================
  Access Coarse Location          Allows an app to access current location of a device.      <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"></uses-permission>

  Access Fine Location            Allows an app to use location-based services of a device.  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"></uses-permission>    

  Access Network State            Allows an app to access the Network state.                 <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"></uses-permission> 

  Access Location Extra Commands  Allows an app to access extra location provider commands.  <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />

  Bluetooth                       Allows an app to connect to paired bluetooth devices.      <uses-permission android:name="android.permission.BLUETOOTH"></uses-permission>

  Bluetooth (Admin)               Allows an app to discover and pair bluetooth devices.      <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"></uses-permission>

  Camera                          Allows an app to use the Camera.                           <uses-permission android:name="android.permission.CAMERA"></uses-permission>

  Flashlight                      Allows access to the flashlight                            <uses-permission android:name="android.permission.FLASHLIGHT" />

  Internet                        Allows an app to use Internet connection.                  <uses-permission android:name="android.permission.INTERNET"></uses-permission>

  Modify Audio Setting            Allows an app to change global audio settings.             <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"></uses-permission>

  Read Phone State                Allows read-only access to the phone state.                <uses-permission android:name="android.permission.READ_PHONE_STATE"></uses-permission>

  Receive SMS                     Allows an app to intercept SMS messages.                   <uses-permission android:name="android.permission.RECEIVE_SMS"></uses-permission>

  Record Audio                    Allows an app to record audio.                             <uses-permission android:name="android.permission.RECORD_AUDIO"></uses-permission>

  Read Contacts                   Allows an app to read the contacts.                        <uses-permission android:name="android.permission.READ_CONTACTS"></uses-permission>

  Vibrate                         Allows an app to use the Vibrator.                         <uses-permission android:name="android.permission.VIBRATE"></uses-permission>

  Write Contacts                  Allows an app the write access to the contacts.            <uses-permission android:name="android.permission.WRITE_CONTACTS"></uses-permission>

  Write External Storage          Allows an app the write access to External Storage.        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses-permission>
  =============================== ========================================================== ======================================================================

------------------------------------
*<uses-feature>*
------------------------------------

Declares hardware or software features used by the application. For instance. If the application requires Camera feature, the user whose device has no camera cannot install the application. This element is contained in ``<manifest>``.

The code below specifies that the application needs Camera feature. 

.. code-block:: xml

  <uses-feature android:name="android.hardware.camera" android:required="true" />


==================== ==================================================================================================================================
Attribute              Description
==================== ==================================================================================================================================
android:name           feature name
android:required       a boolean value that specifies whether the application requires the feature set in ``android:name``. If you set the value to 
                       ``true``, you are indicating that the application cannot function without the feature. If you set it to ``false``, it means that 
                       the application prefers to use the feature, but can still function without the feature.
==================== ==================================================================================================================================

------------------------------------
*<application>*
------------------------------------

Is an Application tag. This element is contained in ``<manifest>``.

.. code-block:: xml

  <application android:icon="@drawable/icon"
               android:label="%%%APPLICATION_NAME%%%" 
               android:name="mobi.monaca.framework.MonacaApplication">
  </application>

========================== ==============================================================================================================================
Attribute                   Description
========================== ==============================================================================================================================
android:name                defines a name of the application. It is a fully qualified name of the class that you extend from Application class.
android:icon                an icon for the entire application as well as a default icon for each of the application's components
android:label               a label for the entire application
android:theme               an Application level theme
android:screenOrientation   application level Orientation settings
========================== ==============================================================================================================================


------------------------------------
*<intent-filter>*
------------------------------------

Defines the process of intent filter. This element is contained in ``<activity>``. The child ``<action>`` element must be defined. 

.. code-block:: xml

  <intent-filter>
      <action android:name="android.intent.action.MAIN" />
      <category android:name="android.intent.category.LAUNCHER" />  
  </intent-filter>


------------------------------------
*<action>*
------------------------------------

Specifies an action for an intent filter. The element is contained in ``<intent-filter>``.

====================== ==================================================================================================================================
Attribute                Description
====================== ==================================================================================================================================
android:name             action name
====================== ==================================================================================================================================



------------------------------------
*<category>*
------------------------------------

Specifies the category of the intent filter. The element is contained in ``<intent-filter>``. 

====================== ==================================================================================================================================
Attribute                Description
====================== ==================================================================================================================================
android:name             category name
====================== ==================================================================================================================================




.. seealso::

  *See Also*

  - :ref:`file_folder_configuration`
  - :ref:`MonacaSkeleton-Info.plist`
