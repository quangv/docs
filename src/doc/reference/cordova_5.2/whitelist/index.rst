
.. raw:: html

   <!--
   # license: Licensed to the Apache Software Foundation (ASF) under one
   #         or more contributor license agreements.  See the NOTICE file
   #         distributed with this work for additional information
   #         regarding copyright ownership.  The ASF licenses this file
   #         to you under the Apache License, Version 2.0 (the
   #         "License"); you may not use this file except in compliance
   #         with the License.  You may obtain a copy of the License at
   #
   #           http://www.apache.org/licenses/LICENSE-2.0
   #
   #         Unless required by applicable law or agreed to in writing,
   #         software distributed under the License is distributed on an
   #         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   #         KIND, either express or implied.  See the License for the
   #         specific language governing permissions and limitations
   #         under the License.
   -->

.. _cordova_whitelist:

======================================
Whitelist Plugin (Android Only)
======================================

.. rst-class:: right-menu


.. raw:: html

  <div>
    <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-whitelist/blob/master/RELEASENOTES.md#100-mar-25-2015">1.0.0</a></div>   
    <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
    <br/>
  </div>

.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/apache/cordova-plugin-whitelist>`_.

This plugin implements a Whitelist policy for navigating the application WebView on Cordova 4.0.



Plugin ID
======================================

::
  
  cordova-plugin-whitelist

Supported Platforms
================================================

- Android 4.0 or higher
- Cordova 5.2 or higher



Adding the Plugin in Monaca
================================================

Starting from Cordova 5.2, Whitelist plugin is automatically added in Monaca app. It can't be removed.


Permission Settings
================================================

.. rst-class:: function-reference

Page Transition (Navigation Whitelist)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It controls which URLs the WebView itself can be navigated to. It applies to top-level navigations and iframes for non-http(s) schemes. For ``<a>`` tag or ``window.open('','_self')``, users are able to designate the page in Apps’s WebView.
If no designation is specified, ``allow-intent`` in http(s) is being designated, the external browswer page will be opened. If there is no ``allow-intent``, nothing will happen.

:dfn:`<allow-navigation href="*" />`

Parameter
  +----------------+----------------------------------------------------------------------------------------------------------------+
  |``href``        | default: ``"*"`` : Allow permission for all addresses.                                                         |
  +----------------+----------------------------------------------------------------------------------------------------------------+


Example
  To allow others URLs, you must add ``<allow-navigation>`` tags to your ``config.xml`` file:

  .. code-block:: xml

      <!-- Allow links to example.com -->
      <allow-navigation href="http://example.com/*" />

      <!-- Wildcards are allowed for the protocol, as a prefix
           to the host, or as a suffix to the path -->
      <allow-navigation href="*://*.example.com/*" />

      <!-- A wildcard can be used to whitelist the entire network,
           over HTTP and HTTPS. -->
      <allow-navigation href="*" />

      <!-- The above is equivalent to these three declarations -->
      <allow-navigation href="http://*/*" />
      <allow-navigation href="https://*/*" />
      <allow-navigation href="data:*" /> 


.. rst-class:: function-reference

External Applicaton Call (Intent Whitelist)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Permission setting for External Browser or Mail application. If nothing is specified, nothing will happen.

It controls which URLs the app is allowed to ask the system to open. By default, no external URLs are allowed. It equates to sending an intent of type BROWSEABLE. This whitelist does not apply to plugins, only hyperlinks and calls to ``window.open()``.

:dfn:`<allow-intent href="*" />`

Parameter
  +----------------+----------------------------------------------------------------------------------------------------------------+
  |``href``        | default: ``""`` : No external URLs are allowed.                                                                |
  +----------------+----------------------------------------------------------------------------------------------------------------+

Example
  In ``config.xml``, add ``<allow-intent>`` tags, like this:

  .. code-block:: xml

      <!-- Allow links to web pages to open in a browser -->
      <allow-intent href="http://*/*" />
      <allow-intent href="https://*/*" />

      <!-- Allow links to example.com to open in a browser -->
      <allow-intent href="http://example.com/*" />

      <!-- Wildcards are allowed for the protocol, as a prefix
           to the host, or as a suffix to the path -->
      <allow-intent href="*://*.example.com/*" />

      <!-- Allow SMS links to open messaging app -->
      <allow-intent href="sms:*" />

      <!-- Allow tel: links to open the dialer -->
      <allow-intent href="tel:*" />

      <!-- Allow geo: links to open maps -->
      <allow-intent href="geo:*" />

      <!-- Allow all unrecognized URLs to open installed apps
           *NOT RECOMMENDED* -->
      <allow-intent href="*" />


.. rst-class:: function-reference

Content (Network Request Whitelist)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It controls which network requests (images, XHRs, etc) are allowed to be made (via Cordova native hooks). Content permission can be defined for content to call in the page (images, css, javascript). To define the permission, simply define ``<access origin>`` and CSP (Content Security Policy). Without any ``<access>`` tags, only requests to ``file://`` URLs are allowed. 

.. note:: Android also allows requests to ``https://ssl.gstatic.com/accessibility/javascript/android/`` by default, since this is required for TalkBack to function properly.

.. note::

    We suggest you use a :ref:`content_security_policy`, which is more secure. This whitelist is mostly historical for webviews which do not support CSP.

:dfn:`<access origin="*" />`

Parameter
  +----------------+----------------------------------------------------------------------------------------------------------------+
  |``origin``      | default: ``"*"`` : Allow permission for all addresses.                                                         |
  +----------------+----------------------------------------------------------------------------------------------------------------+

Example
  In ``config.xml``, add ``<access>`` tags, like this:

  .. code-block:: xml

      <!-- Allow images, xhrs, etc. to google.com -->
      <access origin="http://google.com" />
      <access origin="https://google.com" />

      <!-- Access to the subdomain maps.google.com -->
      <access origin="http://maps.google.com" />

      <!-- Access to all the subdomains on google.com -->
      <access origin="http://*.google.com" />

      <!-- Enable requests to content: URLs -->
      <access origin="content:///*" />

      <!-- Don't block any requests -->
      <access origin="*" />



.. rst-class:: function-reference

.. _content_security_policy:

Content Security Policy
----------------------------

Controls which network requests (images, XHRs, etc) are allowed to be made (via webview directly).

The network request whitelist (see above) is not able to filter all types of requests (e.g. ``<video>`` & WebSockets are not blocked). So, in addition to the whitelist, you should use a `Content Security Policy <http://content-security-policy.com/>`__ ``<meta>`` tag on all of your pages.

Support for CSP within the system webview starts with KitKat (but is available on all versions using Crosswalk WebView).

:dfn:`<meta http-equiv="Content-Security-Policy" content="default-src *; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">`

.. note:: When upgrading from Cordova 3.5/4.2, it will not be applied by default. If the setting isn't applied, there will be errors but application will work fine. To stop the errors, users need to add the above meta tag to HTML.

Example
  Here are some example CSP declarations for your ``.html`` pages:

  .. code-block:: xml

      <!-- Good default declaration:
          * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
          * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
          * Disables use of eval() and inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
              * Enable inline JS: add 'unsafe-inline' to default-src
              * Enable eval(): add 'unsafe-eval' to default-src
      -->
      <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *">

      <!-- Allow everything but only from the same origin and foo.com -->
      <meta http-equiv="Content-Security-Policy" content="default-src 'self' foo.com">

      <!-- This policy allows everything (eg CSS, AJAX, object, frame, media, etc) except that 
          * CSS only from the same origin and inline styles,
          * scripts only from the same origin and inline styles, and eval()
      -->
      <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">

      <!-- Allows XHRs only over HTTPS on the same domain. -->
      <meta http-equiv="Content-Security-Policy" content="default-src 'self' https:">

      <!-- Allow iframe to https://cordova.apache.org/ -->
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src 'self' https://cordova.apache.org">



.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`