=====================================================================
Page Handling
=====================================================================

.. rst-class:: right-menu


In Monaca the unique functions for transitioning between pages are provided. By using these, the behavior like native apps such as slide animations can be realized. These functions need to be called after ``deviceready`` event.

========================================= ===============================================================================================================
Method/Property                             Description
========================================= ===============================================================================================================
:ref:`monaca.pushPage()<m.pushPage>`        Go to another HTML page                    
:ref:`monaca.popPage()<m.popPage>`          Go back to the previous page
:ref:`monaca.home()<m.home>`                Go to an index.html
:ref:`monaca.load()<m.load>`                Open a URL in the same page
:ref:`monaca.clearPageStack()<m.clearPS>`   Clear previous page stack
:ref:`monaca.queryParams<m.queryParams>`    Get the parameters attached by the transition functions
========================================= ===============================================================================================================


.. _m.pushPage:

.. rst-class:: function-reference

monaca.pushPage - Go to another HTML Page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Go to a new page. A transition animation and parameters can be specified.

:dfn:`monaca.pushPage(filename, [options, [queryParams]])`

Parameter
  ========================= =============================================================================================================================
  ``filename:String``        Destination file relative path.                    
  ``options:Object``         Object that may contain the following items:
                              
                             - ``animation``: Transition animation. Possible values: ``slideLeft`` (default), ``slideRight``, ``lift``, or ``false`` (no animation)
                             - ``clearStack``: Whether to clear page stack. If set to true, the caller page will not be added to the page stack.
  ``queryParams:Object``     Object to specify for next page.
  ========================= =============================================================================================================================

Return Value
  ============= ==================
    ``None``
  ============= ==================

Example
  This example shows how to go to :file:`next.html` with lift up animation and parameters.

  .. code-block:: javascript

    monaca.pushPage('next.html',
      { animation: 'lift', clearStack: false },
      { key1: 'value1', key2: 'value2' }
    );




.. _m.popPage:

.. rst-class:: function-reference

monaca.popPage - Go back to the previous page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Go back to the previous page. 

:dfn:`monaca.popPage([options])`

Parameter
  ======================== ==============================================================================================================================
   ``options:Object``       Object that may contain the following items:

                            - ``animation``: Transition animation. Possible values: ``slideLeft`` (default), ``slideRight``, ``lift``, or ``false`` (no animation)
  ======================== ==============================================================================================================================


Return Value
  ============= ==================
    ``None``
  ============= ==================

Example
  The following code will make a transition to the previous page when the button is clicked.

  .. code-block:: javascript

    monaca.popPage(
        {'animation': 'slideRight'}
    );

    monaca.home(
        {'animation': 'slideLeft'}
    );  


  Then, "onReactivate" event is called in order to return back to the previous page. You can intercept the event as shown in the example below:

  .. code-block:: javascript
  
      // A dialog will be displayed when returning back to the previous page by using popPage.
      window.onReactivate = function(){
        alert("onReactive!");
      }


  .. note:: ``window.onReactivate`` is called when the user creates a page transition by using ``monaca.popPage()`` or ``monaca.home()`` .

.. _m.home:

.. rst-class:: function-reference

monaca.home - Go to an index.html
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Go to an :file:`index.html`.

:dfn:`monaca.home()`

Parameter
  ============= ==================
    ``None``
  ============= ================== 

Return Value
  ============= ==================
    ``None``
  ============= ==================

.. _m.load:

.. rst-class:: function-reference

monaca.load - Open a URL in the same page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Loads the content of the new URL in the same page without creating a new page. 

:dfn:`monaca.load(filename, [options, [queryParams]])`

Parameter
  ========================== ============================================================================================================================
   ``filename:String``        Destination file relative path.
   ``options:Object``         Object that may contain the following items:

                               - ``animation``: Transition animation. Possible values: ``slideLeft`` (default), ``slideRight``, ``lift``, or ``false`` (no animation)
                               - ``clearStack``: Whether to clear page stack. If set to true, the caller page will not be added to page stack.

   ``queryParams:Object``     Object to specify for next page.
  ========================== ============================================================================================================================

Return Value
  ============= ==================
    ``None``
  ============= ==================

Example
  :file:`index.html`

  ::
    
    <input type="button" onclick="monaca.load('second-page.html?key1=value1&key2=value2', {},{'key3':'value3'})" value="load" />    

   
  :file:`second-page.html`
  
  ::

    ...
        <script type="text/javascript">
            window.alert(JSON.stringify(monaca.queryParams));
            document.write("queryParams is" + JSON.stringify(monaca.queryParams));
        </script>
    ...

.. _m.clearPS:


.. rst-class:: function-reference


monaca.clearPageStack - Clear previous page stack
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This function clears previous page stack.


:dfn:`monaca.clearPageStack([Param])`


Parameter
  ================== ===============================================================================================================================
  ``param:Boolean``   Possible values:

                       - ``true`` : clear all page stack
                       - ``false`` : clear one previous page
  ================== ===============================================================================================================================


Return Value
  ============= ==================
    ``None``
  ============= ==================

Example
  .. code-block:: javascript

    monaca.clearPageStack(true);


.. _m.queryParams:

.. rst-class:: function-reference

monaca.queryParams - Get the parameters attached by the transition functions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the attached parameters. Parameters passed to ``pushPage`` can be received by monaca.queryParams. monaca.queryParams is supported in Monaca Debugger version 1.3 or later. Only String argument is supported. The parameters can be passed in 3 different ways as mentioned below:

  - <a> tag
  - monaca.pushPage(func)
  - monaca.load(func)

:dfn:`monaca.queryParams :Object`

Parameter
  ============= ==================
    ``None``
  ============= ==================


Return Value
  ============= ========================================================================================================================================
  ``Object``     Containing attached parameters.
  ============= ========================================================================================================================================

Example
  :file:`index.html`

  ::

    <a href ="second-page.html?key1=value1&key2=value2">queryParams</a>


  :file:`second-page.html`

  ::

    ...
      <script type="text/javascript">
          document.writeln(JSON.stringify(monaca.queryParams));
          document.writeln("key1 = " + monaca.queryParams['key1'] );
          document.writeln("key2 = " + monaca.queryParams['key2'] );
      </script>
    ...


