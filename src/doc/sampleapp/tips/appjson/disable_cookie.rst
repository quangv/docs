
=============================
Disable Cookies
=============================

Monaca supports Cookies with Android 3.0+ and iOS 6.0+ devices. By default, Cookies are enabled. However, it is not recommended to use cookies as data storage because cookies are OS's Webview dependent. Therefore, the data storage using cookies cannot be permanently stored. Instead of using cookies, please use other types of storage such as :doc:`../storage` or `Storage <http://docs.monaca.mobi/reference/phonegap_34/en/storage/storage/>`_.

To disable Cookies, please edit :file:`app.json` file and set ``disableCookie`` to "true".

Firstly, let's show hidden files by clicking the button on the top right corner of the Project tree panel as shown below. Then, check the "show hidden files" checkbox.

  .. image:: images/show_hidden_files.png
    :width: 200px

The :file:`app.json` file is located in the ``www`` folder. Next, add this code into the :file:`app.json` file.

.. code-block:: javascript

  {
    "security":
    {
      "disableCookie": true 
    }
  }
