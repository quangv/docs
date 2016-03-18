.. _hardware_key:

--------------------------------
Hardware Key
--------------------------------

.. rst-class:: right-menu


.. image:: images/hardwarekey/hardwarekey1.png
  :align: left
  :width: 360px

.. rst-class:: clear


By setting a function to ``onTapBackButton`` , the execution called when the back button is pushed can be defined.

``onTapBackButton`` can be defined as ``event`` in the ui file. 

.. code-block:: javascript

    {
    	"top" : {
        	"container" : "toolbar"
    	},
    	"bottom": {
        	"container" : "toolbar"
    	},
    	"event" : {
        	"onTapBackButton" : "alert('Android Back button was pressed!');"
    	}
    }


.. seealso::

  *See Also*

  - :ref:`native_control`
  - :ref:`toolbar_component`
  - :ref:`tabbar_component`
  - :ref:`screen_orientation`
  - :ref:`background`
  - :ref:`native_menu_android`
  - :ref:`control_from_Javascript`