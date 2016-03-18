.. _MonacaSkeleton-Info.plist:

===================================================================================================
iOS Configuration
===================================================================================================

.. rst-class:: right-menu


There are 2 ways to configure your iOS apps:

1. :ref:`Configure via Monaca Cloud IDE <ios_config_ide>`
2. :ref:`Configure via configuration files directly <ios_config_files>`.


.. _ios_config_ide:

Configuration via Monaca Cloud IDE
====================================

iOS App Settings Page
^^^^^^^^^^^^^^^^^^^^^^^^^^


The iOS App Settings page allows to set several commonly used parameter in iOS app. Please follow the following instruction in order to access the iOS App Setting page in Monaca Cloud IDE:

1. From Monaca Cloud IDE menu, go to :guilabel:`Config` > :guilabel:`iOS App Settings...`.

  .. image:: images/ios/ide_1.png
      :width: 250px

2. *iOS App Configuration* page will appear as shown below. You can then start your configuration.

  .. image:: images/ios/ide_2.png
      :width: 600px

3. After finishing the configuration, please click :guilabel:`Save` button.

Configurable Parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^

In the iOS App Settings page, you can configure the parameters such as application information, icons, splash files, permissions and additional features. The following are the list of parameters can be configured via the page:

- *Allowed URL*: Specify URL(s) which can be accessed from your app. If set to ``*``, you can access all domains from your app. (Set to ``*`` by default)
- *Disallow Overscroll*: [Enable by default] Enable this if you want to disable the glow when a user scrolls beyond the edge of the webview.
- *Enable Viewport Scale*: [Enable by default] If you disable this feature, the viewport meta tag which is set inside your app will be ignored. 
- *Fade Splash Screen*: [Enable by default]
- *Show Splash Screen*: Show splash screen at start of the app.

.. _ios_config_files:

Configuration via Configuration Files
=========================================

All the configuration parameters of an iOS app are stored in the files as follows:

  - :ref:`info_plist`
  - :ref:`config_xml_ios` 
    
.. note::

  These configurations are critical to the iOS app to run. Wrong configuration can prevent the app from running properly, please edit the file carefully.


.. _info_plist:

MonacaApp-Info.plist
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can configure your iOS app in :file:`MonacaApp-Info.plist` file. For information on ``plist`` file, please refer to `Information Property List Files (Apple) <http://developer.apple.com/library/ios/documentation/general/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html>`_. This file is located under ``ios`` folder inside your monaca project as shown below:


.. figure:: images/ios/1.png
    :width: 250px
    :align: center


:file:`MonacaApp-Info.plist` (Excerpt)

::

  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

  <plist>
    <dict>
      <key>key</key>
      <value-type>value</value-type>
        ...
      <key>key</key>
      <array>
        <value-type>value</value-type>
        <value-type>value</value-type>
      </array>
      ...
    </dict>
  </plist>

  

Inside :file:`MonacaApp-Info.plist` file, there are 3 main types of elements:

- *<key>*: Defines value (plistObject) and a combination of application configuration information.
- *<array>*: You can have the array of values (plistObject).
- *<dict>*: Key and combination of value (plistObject) are defined here.
 

For example:

::

  <plist>
    <dict>      
      ...
      <key>XXX</key>
        <string>The value(plistObject) corresponding to key(XXX)</sting>
        ...
      <key>YYY</key>
        <array>
          <string>The 1st value(plistObject) corresponding to key(YYY)</string>    
          <string>The 2nd value(plistObject) corresponding to key(YYY)</string>            
          <string>The 3rd value(plistObject) corresponding to key(YYY)</string>  
          <string>The 4th value(plistObject) corresponding to key(YYY)</string>  
        </array>
      ...
    </dict>
  </plist>

  

*Type List of Values (plistObject)*

=============== =======================================================
Types              Description
=============== =======================================================
string          String data type representing text. 
date            Date data type representing date and time.
Integer         Integer number
real            Floating data type representing a decimal number. 
data            Data type
true            true boolean
false           false boolean
=============== =======================================================

*List of Keys*

.. rst-class:: wide-table

  ================================ ================ ==========================================================================================================================================================
  key                              plistObject Type Description   
  ================================ ================ ==========================================================================================================================================================                              
  CFBundleDevelopmentRegion        string           Defines a native language of the developer. If the language of the user cannot be found, this value will be used as default. 
  CFBundleDisplayName              string           Define a name of the application. It is a fully qualified name of the class that you extend from Application class.
  CFBundleExecutable               string           Defines the application executable file. 
  CFBundleIconFile                 string           Defines application icon file name. 
  CFBundleIconFiles                <array>string    Defines icon file names used for iOS 3.2 or later. The correct file will be chosen depending on the size of the device screen resolution. 
  CFBundleIdentifier               string           Specifies a unique identifier for your application. The identifier must be a Uniform Type Identifier (UTI) as ":file:`com.monaca.MyApp`".
  CFBundleInfoDictionaryVersion    string           Is the current version number of :file:`MonacaApp-Info.plist` file. 
  CFBundleName                     string           Is a short display name of the app. It is limited to 16 characters at most. 
  CFBundlePackageType              string           Is a 4-digit code used to describe application type. Set this value to "APPL" for application project. 
  CFBundleShortVersionString       string           Specifies the version number of your application. 
  CFBundleSignature                string           Is a 4-digit code used to identify the app developer. 
  CFBundleVersion                  string           Is a build version number of the application. 
  LSRequiresIPhoneOS               true             Indicates whether the application can only be run on iPhone or not.
  UISupportedInterfaceOrientations <array>string    Specifies screen orientations for iPhone that are supported by the application. For iPad, use "UISupportedInterfaceOrientations~ipad".
  BackupWebStorage                 string           Set to ``cloud`` to allow the web storage data to be backed up to iCloud, Set to ``none`` to not allow any backups of web storage. default is ``cloud``
  ================================ ================ ==========================================================================================================================================================


Here are some keys and values you may need to configure in your iOS apps:

.. _UISupportedInterfaceOrientations:

-----------------------------------------------------
*UISupportedInterfaceOrientations*
-----------------------------------------------------

Is used to set the screen orientation of your app:

- Settings for iPhone

::

  ...
    <key>UISupportedInterfaceOrientations</key>
      <array>
        <string>UIInterfaceOrientationLandscapeLeft</string>
        <string>UIInterfaceOrientationLandscapeRight</string>
        <string>UIInterfaceOrientationPortraitUpsideDown</string>
        <string>UIInterfaceOrientationPortrait</string>
      </array>
  ...


- Settings for iPad
  
::

  ...
    <key>UISupportedInterfaceOrientations~ipad</key>
      <array>
        <string>UIInterfaceOrientationLandscapeLeft</string>
        <string>UIInterfaceOrientationLandscapeRight</string>
        <string>UIInterfaceOrientationPortraitUpsideDown</string>
        <string>UIInterfaceOrientationPortrait</string>
      </array>
  ...


*List of Orientation Values*

+-----------------------------------------+---------------------------------------------------------------------------------+
|Value                                    |Description                                                                      |
|                                         |                                                                                 |
+=========================================+=================================================================================+
|UIInterfaceOrientationLandscapeLeft      |Landscape orientation aligned to the left side of the Home button.               |
+-----------------------------------------+---------------------------------------------------------------------------------+
|UIInterfaceOrientationLandscapeRight     |Landscape orientation aligned to the right side of the Home button.              |
+-----------------------------------------+---------------------------------------------------------------------------------+
|UIInterfaceOrientationPortraitUpsideDown |Portrait orientation                                                             |
+-----------------------------------------+---------------------------------------------------------------------------------+
|UIInterfaceOrientationPortrait           |Portrait orientation in opposite direction from the normal portrait orientation. |
+-----------------------------------------+---------------------------------------------------------------------------------+


You can download a sample screen orientation file below:

:download:`Screen Orientation File <download/UISupportedInterfaceOrientations.zip>`


.. _UIStatusBarHidden:
.. _UIViewControllerBasedStatusBarAppearance:

------------------------------------
Statusbar Setting
------------------------------------

.. rst-class:: wide-table

  ============================================= =================================================================================================
  *UIStatusBarHidden*                             - *Type:* boolean
                                                  - *Default:* ``false``
                                                  - *Description:* if set to ``true``, the status bar at the top of the application will be hidden. 
                                                  - *Note:* If *UIStatusBarHidden* set to ``true`` and *UIViewControllerBasedStatusBarAppearance* set to ``false``, the status bar at the top of the app will be hidden.

  *UIViewControllerBasedStatusBarAppearance*      - *Type:* boolean
                                                  - *Default:* ``false``
                                                  - *Description:* if set to ``true``, the status bar at the top of the application will be hidden. 
                                                  - *Note:* set to ``true`` in order to use :ref:`status_bar_plugin`.
  ============================================= =================================================================================================

.. _config_xml_ios:

config.xml
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The :file:`config.xml` file is a settings file controlling various settings of Cordova. It's located under ``www`` folder inside your monaca project. 

.. figure:: images/android/2.png
    :width: 250px
    :align: center
    

Below are available preferences you may need to configure:

.. _content_ios:

------------------------------------
*Content*
------------------------------------

================= ======================================================================================================================================
*Type*             string
*Default*          ``indext.html``
*Description*      The ``<content>`` element defines the app's starting page in the top-level web assets directory. You can change the starting page by changing the value of the ``src`` attribute to your preferred URL.
================= ======================================================================================================================================

::

  <?xml version="1.0" encoding="UTF-8"?>
  <widget xmlns="http://www.w3.org/ns/widgets" id="com.example.helloworld" version="1.0.0">
    ...
    <content src="https://monaca.io/" /> 
  </widget>


.. _disallow_over_scroll:

------------------------------------
*DisallowOverScroll*
------------------------------------

================= ======================================================================================================================================
*Type*              boolean
*Default*           ``false``
*Description*       Set to ``true`` if you want to disable the rubber-band scrolling for WebView.
================= ======================================================================================================================================

::

  ...
  <preference name="DisallowOverscroll" value="false" />
  ...


.. _enable_viewport_scale:

------------------------------------
*EnableViewportScale*
------------------------------------

================= ======================================================================================================================================
*Type*              boolean
*Default*           ``false``
*Description*       Set to ``true`` to prevent viewport scaling through a meta tag.
================= ======================================================================================================================================

::

  ...
  <preference name="EnableViewportScale" value="false" />
  ...

.. _auto_hide_splashscreen:

------------------------------------
*AutoHideSplashScreen*
------------------------------------

================= ======================================================================================================================================
*Type*             boolean
*Default*          ``true``
*Description*      Set to ``false`` to control the splashscreen when it's hidden through a JavaScript API.
================= ======================================================================================================================================

::

  ...
  <preference name="AutoHideSplashScreen" value="true" />
  ...

.. _backup_web_storage:

------------------------------------
*BackupWebStorage*
------------------------------------

================= ======================================================================================================================================
*Type*             string
*Default*          ``cloud``
*Description*      There are 3 valid values:

                      - ``none``: disable any backups of web storage.
                      - ``cloud``: allow the web storage data to be backed up to iCloud.
                      - ``local``: allow only local backups (iTunes sync).
================= ======================================================================================================================================

::

  ...
  <preference name="BackupWebStorage" value="cloud" />
  ...


.. _webview_deceleration_speed:

------------------------------------
*UIWebViewDecelerationSpeed*
------------------------------------

================= ======================================================================================================================================
*Type*             string
*Default*          ``normal``
*Description*      Controls the deceleration speed of momentum scrolling. There are 2 valid values:

                      - ``normal``: is the default speed for most native apps
                      - ``fast``: is the default speed for Mobile Safari.
================= ======================================================================================================================================

::

  ...
  <preference name="UIWebViewDecelerationSpeed" value="normal" />
  ...


.. _access_origin:

------------------------------------
*access origin*
------------------------------------

================= ======================================================================================================================================
*Type*             string
*Default*          ``*``
*Description*      Controls access to specific network domains. If set to ``*``, you can access all domains from your app.
================= ======================================================================================================================================

::

  ...
  <access origin="*" />
  ...



.. _screen_orientation:

--------------------------------------------
*ScreenOrientation* (Cordova 5.2 or Higher)
--------------------------------------------

================= ======================================================================================================================================
*Type*             string
*Default*          ``default``
*Description*      There are 4 valid values:

                      - ``all``: to specify both portrait & landscape mode you would use the platform specific value all
                      - ``default``: screen orientation will be applied according to system default.
                      - ``landscape``: set screen orientation to landscape mode.
                      - ``portrait``: set screen orientation to portrait mode.
================= ======================================================================================================================================

::

  <widget>
        ...
        <platform name="ios">
          <preference name="Orientation" value="all"/>
        </platform>
       ...
 </widget>


It is also possible to apply the setting for all devices at once; however, you can only apply default, landscape and portrait in value. "all" is not possible for Global Preferences.

::

  <widget>
        ...
  <preference name="Orientation" value="portrait" />
       ...
 </widget>


.. note::
  For android/windows, "default" means all direction, but in iOS only portrait will be applied.


.. seealso::

  *See Also*

  - :ref:`file_folder_configuration`
  - :ref:`android_configuration_file`