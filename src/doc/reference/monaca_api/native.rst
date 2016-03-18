.. _native_control:

=====================================================================
Native Control
=====================================================================

.. rst-class:: right-menu


We will describe the unique functions provided by Monaca, which control Native UI Component in Monaca. By using these for example, you can update and get Native UI Component's style definition. For more details about Native UI Component please refer :doc:`../native/index`

====================================== ==================================================================================================================
Method/Property                         Description
====================================== ==================================================================================================================
:ref:`monaca.updateUIStyle()<ud.UI>`    Update UI Component style
:ref:`monaca.retriveUIStyle()<rt.UI>`   Get UI Component style
====================================== ==================================================================================================================

.. _ud.UI:

.. rst-class:: function-reference

monaca.updateUIStyle - Update the style definition of the UI components
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update the style definition of the UI components. 

:dfn:`monaca.updateUIStyle(id, style, value)`

Parameter
  =========== ========== ===============================================================================================================================
  ``id``       String      Component ID you want to update
  ``style``    String      specify the style name
  ``value``    String      specify the new value
  =========== ========== ===============================================================================================================================

Return Value
  ===================== ===============================================================================================================================
  ``None``
  ===================== ===============================================================================================================================

Example
  The following code will update the toolbar's title when the button is clicked. 

  ::

    <script>
      function renameToolbar() 
      {
        monaca.updateUIStyle("toolbar-id", "title", "new title");
      }
    </script>
    <input type="button" onclick="renameToolbar()" value="Change Title" />


.. _rt.UI:

.. rst-class:: function-reference

monaca.retrieveUIStyle - Get the style information of the UI component
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the style information of the UI component. 

:dfn:`monaca.retrieveUIStyle(id, style, function(value) { ... })`

Parameter
  ============================ =========== =============================================================================================================
  ``id``                        String      Component ID you want to update
  ``style``                     String      Specify the style name
  ``function(value) { .. }``    Function    The callback function with the retrieved value populated in the argument
  ============================ =========== =============================================================================================================

Return Value
  ============================ ========================================================================================================================
  ``None``
  ============================ ========================================================================================================================

Example
  The following code will alert the style values of the toolbar's title when the button is clicked.

  ::

    <script>
      function getToolbarTitle() 
      {
        monaca.retrieveUIStyle("toolbar-id", "title", function(value) 
        {
          alert(value);
        });
      }
    </script>
    <input type="button" onclick="getToolbarTitle()" value="Display Title" />

  The following code will retrieve the style value of the search box and show it in the alert dialog.

  ::

    <script>
      function retrieveSearchBoxValue()
      {
        monaca.retrieveUIStyle("searchBox", "value", function(a)
        {
          alert(a);
        });
      }
    </script>
    <a href="javascript:void(0);" onclick="retrieveSearchBoxValue();">
      Display the value
    </a>

.. seealso::

  *See Also*

  - :ref:`native_components`
  - :ref:`ui_definition`