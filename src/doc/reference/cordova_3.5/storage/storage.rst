Storage
==============

.. rst-class:: right-menu


.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <http://docs.phonegap.com/en/3.5.0/cordova_storage_storage.md.html#Storage>`_.

An overview of storage options for Cordova.

Several storage APIs are available for Cordova applications. See
`html5rocks <http://www.html5rocks.com/en/features/storage>`__. for a
more complete overview and examples.

LocalStorage
------------

Also known as *web storage*, *simple storage*, or by its alternate
*session storage* interface, this API provides synchronous key/value
pair storage, and is available in underlying WebView implementations.
Refer to `the W3C spec <http://www.w3.org/TR/webstorage/>`__ for
details.

**Windows Phone 7 Quirk**: Dot notation is *not* available, so be sure
to use ``setItem`` or ``getItem`` rather than access keys directly from
the storage object, as in ``window.localStorage.someKey``.

WebSQL
------

This API is available in the underlying WebView. The `Web SQL Database
Specification <http://dev.w3.org/html5/webdatabase/>`__ offers more
full-featured database tables accessed via SQL queries.

The following platforms support WebSQL:

-  Android
-  iOS

Plugin-Based Options
--------------------

In addition to the storage APIs listed above, the `File
API <https://github.com/apache/cordova-plugin-file/blob/master/README.md>`__
allows you to cache data on the local file system. Other `Cordova
plugins <http://plugins.cordova.io/>`__ provide similar storage options.
