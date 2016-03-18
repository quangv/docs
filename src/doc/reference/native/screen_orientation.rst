
.. rst-class:: function-reference

.. _screen_orientation:

--------------------------------
ScreenOrientation
--------------------------------

.. rst-class:: right-menu



By defining ScreenOrientation in :file:`.ui` file ,it is possible to control the screen orientation of your app. You can specify multiple values.


Description
  ====================== ==============================================================================================================
  ``screenOrientation``     The direction in which the screen can be rotated.
  ====================== ==============================================================================================================

Supported Parameters
  ====================== ==============================================================================================================
    ``inherit``              not specified (default)
    ``landscape``            display in landscape view
    ``portrait``             display in portrait view
  ====================== ==============================================================================================================


Example
  .. code-block:: javascript


    {
      "top" : { ... },
      "bottom" : { ... },
      "style": {
          "screenOrientation": "landscape,portrait"
      }
    }


.. seealso::

  *See Also*

  - :ref:`native_control`
  - :ref:`toolbar_component`
  - :ref:`hardware_key`
  - :ref:`background`
  - :ref:`tabbar_component`
  - :ref:`control_from_Javascript`