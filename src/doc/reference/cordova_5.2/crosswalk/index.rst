.. _cordova_crosswalk:

=====================================
Crosswalk Plugin (Android Only)
=====================================

.. rst-class:: right-menu


.. raw:: html

  <div>
    <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview#130-august-28-2015">1.3.0</a></div>   
    <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
    <br/>
  </div>

.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview>`_.


This plugin makes your Cordova application uses the `Crosswalk WebView <https://crosswalk-project.org/>`__ instead of the System WebView. 

What is Crosswalk?
================================================

There are many versions of Android from many manufacturers, this makes it very difficult to develop a Cordova app that works consistently across all versions of Android. WebView version affects display and some operations on a device. Until Android 4.4, WebView upgrade can only be done through OS upgrade. When most of these devices cannot be upgraded, they are stuck using outdated Android WebViews. Crosswalk can solve this problem.

Crosswalk is a web runtime based on Google Chromium and has better HTML5 feature support compared to the default WebView available in Android. By upgrading the version of Crosswalk, Chromium version will also be upgraded. This insures that your app works consistently, regardless of the device manufacturer or Android version found in your customer's Android 4.0+ device.

Plugin ID
======================================

::
  
  cordova-plugin-crosswalk-webview

Supported Platforms
================================================

-  Android 4.0.0 or higher
-  Cordova 5.2 or higher

Adding the Plugin in Monaca
================================================

In order to use this plugin, you need to enable ``Crosswalk`` plugin in Monaca Cloud IDE first.

1. From Monaca Cloud IDE, go to :menuselection:`Config --> Cordova Plugins`.

2. Enable the Crosswalk WebView Engine (see the screenshot below).
  
  .. figure:: ../images/crosswalk/1.png  
      :width: 600px
      :align: left

  .. rst-class:: clear

3. After enabling the Crosswalk WebView Engine, you can also change its version by clicking on :guilabel:`Settings` button.

  .. figure:: ../images/crosswalk/2.png  
      :width: 600px
      :align: left

  .. rst-class:: clear

4. Then, the following dialog will appear. After finishing your configuration, click OK.

  .. note:: You can change both plugin version or Crosswalk version. However, not all version combination between the two are applicable. 

  .. figure:: ../images/crosswalk/3.png  
      :width: 600px
      :align: left

  .. rst-class:: clear

Pros and Cons of Crosswalk Plugin
================================================

.. rst-class:: wide-table

  +--------------------------------------------------------------+--------------------------------------------------------------+
  | Advantages                                                   | Disadvantages                                                |
  +==============================================================+==============================================================+
  | - WebView installed on each device has the same version. The | - Building a Crosswalk app results in 2 APK files: one arm   |    
  |   problem due to different operations of API has been solved.|   and one for x86 CPU architecture. Both of them need to be  |
  |                                                              |   uploaded to GooglePlay.                                    |
  |                                                              |                                                              |
  | - The latest version of WebView (Android 4 is not supported) | - When there is bugs in Crosswalk (Chromium), all devices    |   
  |   is being used, performance improvement is expected.        |   will be having the same bugs.                              |
  |                                                              |                                                              |
  |                                                              | - App size can be +20MB bigger.                              |
  |                                                              |                                                              |
  |                                                              | - When there is a serious bug occurs in Crosswalk, the app   |    
  |                                                              |   might stop working until it is solved.                     |
  |                                                              |                                                              |
  |                                                              | - If there is vulnerability occurrs in Crosswalk(Chromium),  |
  |                                                              |   there will be a warning in Google Play that the app may be |
  |                                                              |   publicly unavailable.                                      |
  |                                                              |                                                              |
  |                                                              | - For Android 5.0 or higher, WebView is made as another app, |
  |                                                              |   so it will always needed to be updated. Therefore,         |
  |                                                              |   Crosswalk’s WebView version maybe out of dated.            |
  +--------------------------------------------------------------+--------------------------------------------------------------+

.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`