=====================================================================
Viewport Settings
=====================================================================

.. rst-class:: right-menu


Forget about viewport complications and let :file:`monaca.viewport.js` take care of it. The library will detect your phone and write the appropriate view port meta tag for you. 

================================== ======================================================================================================================
Method                              Description
================================== ======================================================================================================================
:ref:`monaca.viewport()<viewport>`  Set Viewport
================================== ======================================================================================================================

.. rst-class:: function-reference

General
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In the iOS browser, the virtual width of the screen can be emulated. This is useful for mobile web. Although the viewport tag is supported in Android, the width property is not supported. Thus, Monaca IDE Manual will not support viewport on Android. The following sections will show how the viewport can be controlled easily by using :file:`monaca.viewport.js`. 


Supported Devices and Browsers
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Android 2.3
* Opera 11.62
* Firefox 11.0
* Chrome 18.0.1025.151
* Safari 5.1.5

.. rst-class:: function-reference

How to Use
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Example
  This is the simplest example. The viewport meta tag can be manipulated by using "monaca.viewport()" function. Please call this function in the head element. 

  ::

   <html>
      <head>
      <script>
          monaca.viewport({width : "device-width"});
      </script>
      ...

In case of Android and Monaca IDE Manual, not only the appropriate meta tag is taken care of, but also JavaScript and CSS viewport emulation. 


.. warning:: You can set either numerical number or "device-width" as the value of :file:`monaca.viewport()` function. 


How Does It Work?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This is what happened when the above code is included in your Monaca page. 

In case of iOS, the following meta tag will be written:

::

  <meta name="viewport" content="width=640" />

In case of Android:

.. code-block:: html

  <meta name="viewport" content="width=device-width:target-densitydpi=device-dpi" />

After that, a scale value will be calculated from the Window's width and set as HTML's body tag zoom property by using JavaScript. Later when the width of the window changes (screen orientation change...), the scale will be recalculated and the zoom property will be reset properly. 

In case of Monaca IDE Manual, the complete meta tag will be written in advance, and the viewport emulation can be controlled the same way as in Android.


.. note:: Monaca's GitHub repository is located at: `https://github.com/monaca/monaca.js <https://github.com/monaca/monaca.js>`_ . Feel free to download the files you like to use and upload them to the IDE. 


.. rst-class:: function-reference

Troubleshooting
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*Q*: I can not change the font size.

- Monaca viewport will not work if :file:`webkit-text-size-adjust` in CSS is set to ``none``. In this case, please set its value to ``auto`` or ``100%``. 


*Q*: I can not change the size of the CheckBox and RadioButton via :file:`monaca.viewport()` function. 

- :file:`monaca.viewport()` function can not change the size of the CheckBox and RadioButton. Please use CSS or some JS library to create the UI. 


*Q*: When I use :file:`monaca.viewport()` and ``background-attachement:fixed``, the extra parts appears. 

- Specifying :file:`monaca.viewport()` and ``background-attachement:fixed`` at the same time may cause some problems. please do not use :file:`monaca.viewport()` and ``background-attachement:fixed`` simultaneously.



.. rst-class:: function-reference

.. _viewport:

monaca.viewport - Set Viewport
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set viewport.

:dfn:`monaca.viewport(object)`

Parameter
  ============ ========= ================================================================================================================================
  ``object``    Object     Object that may contain the following items:
  ``width``     String     Set virtual device screen width.
  ============ ========= ================================================================================================================================

Return Value
  ===================== ================================================================================================================================
  ``None``
  ===================== ================================================================================================================================

