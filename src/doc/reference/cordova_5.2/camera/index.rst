.. raw:: html

   <!---
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
   -->

=======================================
Camera Plugin
=======================================

.. rst-class:: right-menu


.. raw:: html

  <div>
    <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-camera/blob/master/RELEASENOTES.md#120-jun-17-2015">1.2.0</a></div>   
    <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
    <br/>
  </div>

.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/apache/cordova-plugin-camera>`_.

This plugin defines a global ``navigator.camera`` object, which provides
an API for taking pictures and for choosing images from the system's
image library.

Although the object is attached to the global scoped ``navigator``, it
is not available until after the ``deviceready`` event.

.. code-block:: javascript

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.camera);
    }

Plugin ID
=======================================

::
  
  cordova-plugin-camera


Adding the Plugin in Monaca
=======================================================

In order to use this plugin, please :ref:`enable <add_plugins>` ``Camera`` plugin in Monaca Cloud IDE.

.. _api_reference:

API Reference
=======================================================

camera.getPicture(successCallback, errorCallback, options) 
---------------------------------------------------------------------------------

Takes a photo using the camera, or retrieves a photo from the
device's image gallery. The image is passed to the success callback as a
base64-encoded ``String``, or as the URI for the image file.

The ``camera.getPicture`` function opens the device's default camera application that allows users to snap pictures by default - this
behavior occurs, when ``Camera.sourceType`` equals ``Camera.PictureSourceType.CAMERA``. Once the user snaps the photo, the camera application closes and the
application is restored.

If ``Camera.sourceType`` is ``Camera.PictureSourceType.PHOTOLIBRARY`` or
``Camera.PictureSourceType.SAVEDPHOTOALBUM``, then a dialog displays
that allows users to select an existing image. The ``camera.getPicture``
function returns a ``CameraPopoverHandle`` object, which
can be used to reposition the image selection dialog, for example, when
the device orientation changes.

The return value is sent to the ``cameraSuccess`` callback function, in
one of the following formats, depending on the specified
``cameraOptions``:

-  A ``String`` containing the base64-encoded photo image.

-  A ``String`` representing the image file location on local storage
   (default).

You can do whatever you want with the encoded image or URI, for example:

-  Render the image in an ``<img>`` tag, as in the example below

-  Save the data locally (``LocalStorage``,
   `Lawnchair <http://brianleroux.github.com/lawnchair/>`__, etc.)

-  Post the data to a remote server

**NOTE**: Photo resolution on newer devices is quite good. Photos
selected from the device's gallery are not downscaled to a lower
quality, even if a ``quality`` parameter is specified. To avoid common
memory problems, set ``Camera.destinationType`` to ``FILE_URI`` rather
than ``DATA_URL``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

- Android
- Blackberry10
- Browser
- Firefox OS
- Amazon Fire OS
- iOS
- Windows
- Windows Phone 8
- Ubuntu

-  :ref:`More examples <camera_getpicture_errata>`

-  :ref:`Quirks <amazon_fire_os_quirks>`

Kind
~~~~~~~~~~~~~~~~~~~

static method of :ref:`camera <api_reference>` 

+-------------------+--------------------------------------------------------+-----------------+
| Param             | Type                                                   | Description     |
+===================+========================================================+=================+
| successCallback   | :ref:`onSuccess <camera_onsuccess_function>`           |                 |
+-------------------+--------------------------------------------------------+-----------------+
| errorCallback     | :ref:`onError <camera_onerror_function>`               |                 |
+-------------------+--------------------------------------------------------+-----------------+
| options           | :ref:`CameraOptions <camera_cameraoptions_Object>`     | CameraOptions   |
+-------------------+--------------------------------------------------------+-----------------+

Example
~~~~~~~~~~~~~~~~~~~

camera.onSuccess: function

.. code:: js

    navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);


camera.cleanup()
---------------------------------------------------------------------------------

Removes intermediate image files that are kept in
temporary storage after calling
```camera.getPicture`` <camera.getPicture(successCallback, errorCallback, options)>`__. Applies only when
the value of ``Camera.sourceType`` equals
``Camera.PictureSourceType.CAMERA`` and the ``Camera.destinationType``
equals ``Camera.DestinationType.FILE_URI``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- iOS

Kind
~~~~~~~~~~~~~~~~~~~

static method of :ref:`camera <api_reference>` 

Example
~~~~~~~~~~~~~~~~~~~

.. code:: js

    navigator.camera.cleanup(onSuccess, onFail);

    function onSuccess() {
        console.log("Camera cleanup success.")
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

.. _camera_onerror_function:

camera.onError : function
---------------------------------------------------------------------------------

Callback function that provides an error message.

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`camera <api_reference>`

+-----------+----------+--------------------------------------------------------+
| Param     | Type     | Description                                            |
+===========+==========+========================================================+
| message   | string   | The message is provided by the device's native code.   |
+-----------+----------+--------------------------------------------------------+


.. _camera_onsuccess_function:

camera.onSuccess : function 
---------------------------------------------------------------------------------

Callback function that provides the
image data.

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`camera <api_reference>`

+-------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Param       | Type     | Description                                                                                                                                |
+=============+==========+============================================================================================================================================+
| imageData   | string   | Base64 encoding of the image data, *or* the image file URI, depending on :ref:`cameraOptions <camera_cameraoptions_Object>`  in effect.    |
+-------------+----------+--------------------------------------------------------------------------------------------------------------------------------------------+

Example
~~~~~~~~~~~~~~~~~~~

.. code:: js

    // Show image
    //
    function cameraCallback(imageData) {
       var image = document.getElementById('myImage');
       image.src = "data:image/jpeg;base64," + imageData;
    }


.. _camera_cameraoptions_Object:

camera.CameraOptions : Object 
-------------------------------------

Optional parameters to customize the
camera settings. :ref:`Quirks <amazon_fire_os_quirks>`

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`Camera <api_reference>`

Properties
~~~~~~~~~~~~~~~~~~~

+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name                 | Type                                                           | Default     | Description                                                                                                                                                                                                   |
+======================+================================================================+=============+===============================================================================================================================================================================================================+
| quality              | number                                                         | 50          | Quality of the saved image, expressed as a range of 0-100, where 100 is typically full resolution with no loss from file compression. (Note that information about the camera's resolution is unavailable.)   |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| destinationType      | :ref:`DestinationType <camera_destinationtype>`                | FILE\_URI   | Choose the format of the return value.                                                                                                                                                                        |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| sourceType           | :ref:`PictureSourceType <camera_picturesourcetype>`            | CAMERA      | Set the source of the picture.                                                                                                                                                                                |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| allowEdit            | Boolean                                                        | true        | Allow simple editing of image before selection.                                                                                                                                                               |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| encodingType         | :ref:`EncodingType <camera_encodingtype>`                      | JPEG        | Choose the returned image file's encoding.                                                                                                                                                                    |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| targetWidth          | number                                                         |             | Width in pixels to scale image. Must be used with ``targetHeight``. Aspect ratio remains constant.                                                                                                            |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| targetHeight         | number                                                         |             | Height in pixels to scale image. Must be used with ``targetWidth``. Aspect ratio remains constant.                                                                                                            |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| mediaType            | :ref:`MediaType <camera_mediatype>`                            | PICTURE     | Set the type of media to select from. Only works when ``PictureSourceType`` is ``PHOTOLIBRARY`` or ``SAVEDPHOTOALBUM``.                                                                                       |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| correctOrientation   | Boolean                                                        |             | Rotate the image to correct for the orientation of the device during capture.                                                                                                                                 |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| saveToPhotoAlbum     | Boolean                                                        |             | Save the image to the photo album on the device after capture.                                                                                                                                                |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| popoverOptions       | :ref:`CameraPopoverOptions <camera_popover_options>`           |             | iOS-only options that specify popover location in iPad.                                                                                                                                                       |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| cameraDirection      | :ref:`Direction <camera_direction>`                            | BACK        | Choose the camera to use (front- or back-facing).                                                                                                                                                             |
+----------------------+----------------------------------------------------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


Camera
=========================================

.. _camera_destinationtype:

Camera.DestinationType : enum
---------------------------------------------------------------------------------

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`camera <api_reference>`

Property
~~~~~~~~~~~~~~~~~~~

+-----------+----------+--------+--------------------------------------------------------------------------+
| Name      | Type     | Default| Description                                                              |
+===========+==========+========+==========================================================================+
| DATA_URL  | number   | 0      | Return base64 encoded string                                             |
+-----------+----------+--------+--------------------------------------------------------------------------+
| FILE_URI  | number   | 1      | Return file uri (content://media/external/images/media/2 for Android)    |
+-----------+----------+--------+--------------------------------------------------------------------------+
| NATIVE_URI| number   | 2      | Return native uri (eg. asset-library://... for iOS)                      |
+-----------+----------+--------+--------------------------------------------------------------------------+

.. _camera_encodingtype:

Camera.EncodingType : enum
---------------------------------------------------------------------------------

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`camera <api_reference>`

Property
~~~~~~~~~~~~~~~~~~~

+-----------+----------+--------+-----------------------------+
| Name      | Type     | Default| Description                 |
+===========+==========+========+=============================+
| JPEG      | number   | 0      | Return JPEG encoded image   |
+-----------+----------+--------+-----------------------------+
| PNG       | number   | 1      | Return PNG encoded image    |
+-----------+----------+--------+-----------------------------+


.. _camera_mediatype:

Camera.MediaType : enum
---------------------------------------------------------------------------------

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`camera <api_reference>`

Property
~~~~~~~~~~~~~~~~~~~

+-----------+----------+--------+---------------------------------------------------------------------------------------------------+
| Name      | Type     | Default| Description                                                                                       |
+===========+==========+========+===================================================================================================+
| PICTURE   | number   | 0      | Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType |
+-----------+----------+--------+---------------------------------------------------------------------------------------------------+
| VIDEO     | number   | 1      | Allow selection of video only, ONLY RETURNS URL                                                   |
+-----------+----------+--------+---------------------------------------------------------------------------------------------------+
| ALLMEDIA  | number   | 2      | Allow selection from all media types                                                              |
+-----------+----------+--------+---------------------------------------------------------------------------------------------------+

.. _camera_picturesourcetype:

Camera.PictureSourceType : enum
---------------------------------------------------------------------------------

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`camera <api_reference>`

Property
~~~~~~~~~~~~~~~~~~~

+----------------+----------+-------------+-------------------------------------------------------------------------+
| Name           | Type     | Default     | Description                                                             |
+================+==========+=============+=========================================================================+
| PHOTOLIBRARY   | number   | 0           | Choose image from picture library (same as SAVEDPHOTOALBUM for Android) |
+----------------+----------+-------------+-------------------------------------------------------------------------+
| CAMERA         | number   | 1           | Take picture from camera                                                |
+----------------+----------+-------------+-------------------------------------------------------------------------+
| SAVEDPHOTOALBUM| number   | 2           | Choose image from picture library (same as PHOTOLIBRARY for Android)    |
+----------------+----------+-------------+-------------------------------------------------------------------------+

.. _camera_popover_arrow_direction:

Camera.PopoverArrowDirection : enum
---------------------------------------------------------------------------------

Matches iOS UIPopoverArrowDirection constants to specify arrow location on popover.

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`camera <api_reference>`

Property
~~~~~~~~~~~~~~~~~~~

+-------------+----------+----------+
| Name        | Type     | Default  |
+=============+==========+==========+
| ARROW_UP    | number   | 0        |
+-------------+----------+----------+
| ARROW_DOWN  | number   | 2        |
+-------------+----------+----------+
| ARROW_LEFT  | number   | 4        |
+-------------+----------+----------+
| ARROW_RIGHT | number   | 8        |
+-------------+----------+----------+
| ARROW_ANY   | number   | 15       |
+-------------+----------+----------+

.. _camera_direction:

Camera.Direction : enum
---------------------------------------------------------------------------------

Kind
~~~~~~~~~~~~~~~~~~~

static typedef of :ref:`camera <api_reference>`

Property
~~~~~~~~~~~~~~~~~~~

+-----------+----------+-----------+-----------------------------+
| Name      | Type     |   Default | Description                 |
+===========+==========+===========+=============================+
| BACK      | number   |   0       | Use the back-facing camera  |
+-----------+----------+-----------+-----------------------------+
| FRONT     | number   |   1       | Use the front-facing camera |
+-----------+----------+-----------+-----------------------------+

.. _camera_popover_options:

CameraPopoverOptions 
-----------------------------

iOS-only parameters that specify the anchor
element location and arrow direction of the popover when selecting
images from an iPad's library or album. Note that the size of the
popover may change to adjust to the direction of the arrow and
orientation of the screen. Make sure to account for orientation changes
when specifying the anchor element location.

+--------------+------------------------------------------------------------------------+--------------+------------------------------------------------------------------------------+
| Param        | Type                                                                   | Default      | Description                                                                  |
+==============+========================================================================+==============+==============================================================================+
| [x]          | Number                                                                 | 0            | x pixel coordinate of screen element onto which to anchor the popover.       |
+--------------+------------------------------------------------------------------------+--------------+------------------------------------------------------------------------------+
| [y]          | Number                                                                 | 32           | y pixel coordinate of screen element onto which to anchor the popover.       |
+--------------+------------------------------------------------------------------------+--------------+------------------------------------------------------------------------------+
| [width]      | Number                                                                 | 320          | width, in pixels, of the screen element onto which to anchor the popover.    |
+--------------+------------------------------------------------------------------------+--------------+------------------------------------------------------------------------------+
| [height]     | Number                                                                 | 480          | height, in pixels, of the screen element onto which to anchor the popover.   |
+--------------+------------------------------------------------------------------------+--------------+------------------------------------------------------------------------------+
| [arrowDir]   | :ref:`PopoverArrowDirection <camera_popover_arrow_direction>`          | ARROW\_ANY   | Direction the arrow on the popover should point.                             |
+--------------+------------------------------------------------------------------------+--------------+------------------------------------------------------------------------------+

.. _camera_popover_handle:

CameraPopoverHandle
-----------------------------

A handle to an image picker popover.

Supported Platforms
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- iOS

Example
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
    { 
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
    });

    // Reposition the popover if the orientation changes.
    window.onorientationchange = function() {
        var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
        cameraPopoverHandle.setPosition(cameraPopoverOptions);
    }


.. _camera_getpicture_errata:

``camera.getPicture`` Errata
-----------------------------------

Example 
~~~~~~~~~~~~~~~~~~~

Take a photo and retrieve it as a base64-encoded image:

::

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

Take a photo and retrieve the image's file location:

::

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

Preferences (iOS)
~~~~~~~~~~~~~~~~~~~

-  **CameraUsesGeolocation** (boolean, defaults to false). For capturing
   JPEGs, set to true to get geolocation data in the EXIF header. This
   will trigger a request for geolocation permissions if set to true.

   ::

       <preference name="CameraUsesGeolocation" value="false" />

.. _amazon_fire_os_quirks:

Amazon Fire OS Quirks 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Amazon Fire OS uses intents to launch the camera activity on the device
to capture images, and on phones with low memory, the Cordova activity
may be killed. In this scenario, the image may not appear when the
cordova activity is restored.

.. _android_quirks:

Android Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Android uses intents to launch the camera activity on the device to
capture images, and on phones with low memory, the Cordova activity may
be killed. In this scenario, the image may not appear when the Cordova
activity is restored.

Browser Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Can only return photos as base64-encoded image.

.. _firefox_os_quirks:

Firefox OS Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Camera plugin is currently implemented using `Web
Activities <https://hacks.mozilla.org/2013/01/introducing-web-activities/>`__.

iOS Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Including a JavaScript ``alert()`` in either of the callback functions
can cause problems. Wrap the alert within a ``setTimeout()`` to allow
the iOS image picker or popover to fully close before the alert
displays:

::

    setTimeout(function() {
        // do your thing here!
    }, 0);

Windows Phone 7 Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Invoking the native camera application while the device is connected via
Zune does not work, and triggers an error callback.

Tizen Quirks
~~~~~~~~~~~~~~~~~~~

Tizen only supports a ``destinationType`` of
``Camera.DestinationType.FILE_URI`` and a ``sourceType`` of
``Camera.PictureSourceType.PHOTOLIBRARY``.

``CameraOptions`` Errata 
-------------------------

Amazon Fire OS Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Any ``cameraDirection`` value results in a back-facing photo.

-  Ignores the ``allowEdit`` parameter.

-  ``Camera.PictureSourceType.PHOTOLIBRARY`` and
   ``Camera.PictureSourceType.SAVEDPHOTOALBUM`` both display the same
   photo album.

Android Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Any ``cameraDirection`` value results in a back-facing photo.

-  **``allowEdit`` is unpredictable on Android and it should not be
   used!** The Android implementation of this plugin tries to find and
   use an application on the user's device to do image cropping. The
   plugin has no control over what application the user selects to
   perform the image cropping and it is very possible that the user
   could choose an incompatible option and cause the plugin to fail.
   This sometimes works because most devices come with an application
   that handles cropping in a way that is compatible with this plugin
   (Google Plus Photos), but it is unwise to rely on that being the
   case. If image editing is essential to your application, consider
   seeking a third party library or plugin that provides its own image
   editing utility for a more robust solution.

-  ``Camera.PictureSourceType.PHOTOLIBRARY`` and
   ``Camera.PictureSourceType.SAVEDPHOTOALBUM`` both display the same
   photo album.

-  Ignores the ``encodingType`` parameter if the image is unedited (i.e.
   ``quality`` is 100, ``correctOrientation`` is false, and no
   ``targetHeight`` or ``targetWidth`` are specified). The ``CAMERA``
   source will always return the JPEG file given by the native camera
   and the ``PHOTOLIBRARY`` and ``SAVEDPHOTOALBUM`` sources will return
   the selected file in its existing encoding.

BlackBerry 10 Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Ignores the ``quality`` parameter.

-  Ignores the ``allowEdit`` parameter.

-  ``Camera.MediaType`` is not supported.

-  Ignores the ``correctOrientation`` parameter.

-  Ignores the ``cameraDirection`` parameter.

Firefox OS Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Ignores the ``quality`` parameter.

-  ``Camera.DestinationType`` is ignored and equals ``1`` (image file
   URI)

-  Ignores the ``allowEdit`` parameter.

-  Ignores the ``PictureSourceType`` parameter (user chooses it in a
   dialog window)

-  Ignores the ``encodingType``

-  Ignores the ``targetWidth`` and ``targetHeight``

-  ``Camera.MediaType`` is not supported.

-  Ignores the ``correctOrientation`` parameter.

-  Ignores the ``cameraDirection`` parameter.

iOS Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  When using ``destinationType.FILE_URI``, photos are saved in the
   application's temporary directory. The contents of the application's
   temporary directory is deleted when the application ends.

-  When using ``destinationType.NATIVE_URI`` and ``sourceType.CAMERA``,
   photos are saved in the saved photo album regardless on the value of
   ``saveToPhotoAlbum`` parameter.

Tizen Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  options not supported

-  always returns a FILE URI

Windows Phone 7 and 8 Quirks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Ignores the ``allowEdit`` parameter.

-  Ignores the ``correctOrientation`` parameter.

-  Ignores the ``cameraDirection`` parameter.

-  Ignores the ``saveToPhotoAlbum`` parameter. IMPORTANT: All images
   taken with the wp7/8 cordova camera API are always copied to the
   phone's camera roll. Depending on the user's settings, this could
   also mean the image is auto-uploaded to their OneDrive. This could
   potentially mean the image is available to a wider audience than your
   app intended. If this a blocker for your application, you will need
   to implement the CameraCaptureTask as documented on msdn :
   http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh394006.aspx
   You may also comment or up-vote the related issue in the `issue
   tracker <https://issues.apache.org/jira/browse/CB-2083>`__

-  Ignores the ``mediaType`` property of ``cameraOptions`` as the
   Windows Phone SDK does not provide a way to choose videos from
   PHOTOLIBRARY.


.. seealso::

  *See Also*

  - :ref:`third_party_cordova_index`
  - :ref:`cordova_core_plugins`
