=====================================================================
Criteria
=====================================================================

.. rst-class:: right-menu


You can make query with Criteria object.


.. note:: In order to access Backend API, you need to load ``jQuery`` and register ``cloud.monaca.mobi`` in the whitelist by editing each OS's configuration file. For more details, please refer to :ref:`Access Origin (Android) <access_origin_android>` and :ref:`Access Origin (iOS) <access_origin>`.

=========================================== ============================================================================================================
Method/Property                              Description
=========================================== ============================================================================================================
:ref:`monaca.cloud.Criteria()<c.Criteria>`   Get a criteria object
:ref:`MonaQL<MonaQL>`                        Monaca Query Language
=========================================== ============================================================================================================


.. rst-class:: function-reference

.. _c.Criteria:

Criteria() - Make a Criteria object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get a criteria object with a specific name.

:dfn:`monaca.cloud.Criteria(query: String[, bindParams: Array]) : criteriaObject`

Parameter
  =============== =====================================================================================================================================
  ``query``        A query string written in :ref:`MonaQL<MonaQL>`
  ``bindParams``   Values to bind
  =============== =====================================================================================================================================


Return Value
  ====================================================== ===============================================================================================
  A criteria object is returned.
  ====================================================== ===============================================================================================


Example
  Below are samples of Criteria and :ref:`MonaQL<MonaQL>`.
  In MonaQL, ``?`` is a place holder. It is replaced with ``bindParams``.

  .. code-block:: javascript

    var Criteria0 = monaca.cloud.Criteria('a == 12 && (b == 34 || c == 56)');
    var Critetia1 = monaca.cloud.Criteria(
      'a == 12 && !(b == 34 || c == 56)'
    ); // a == 12 && (b != 34 && c != 56)
    
    var Critetia2 = monaca.cloud.Criteria(
      'name IN ["John", "Smith"]'
    ); // name == "John" || name == "Smith"
    var Critetia3 = monaca.cloud.Criteria(
      'name NIN ["John", "Smith"]'
    ); // name != "John" && name != "Smith"
    
    var Criteria4 = monaca.cloud.Criteria(
      'name == ? && age > ?',
      ["John", 20]
    ); // name == "John" && age > 20
    
    var names = ["John", "Smith"];
    var Criteria5 = monaca.cloud.Criteria(
      'name IN ?',
      [names]
    ); // name == "John" || name == "Smith"


.. rst-class:: function-reference

.. _MonaQL:

MonaQL - Monaca Query Language
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This is complete list of MonaQL operators and value types.

===================== ===================================================================================================================================
Operator              Description
===================== ===================================================================================================================================
``==``                Value equality
``!=``                Inequality
``>``                 Greater than
``>=``                Greater than or equal
``<``                 Less than
``<=``                Less than or equal
``IN``                Included in given array
``NIN``               Not included in given array
``()``                Make group
``!()``               Make group and reverse boolean value
``&&``                Logical AND
``||``                Logical OR
===================== ===================================================================================================================================

===================== =================================================================================================================================
Values                Description
===================== =================================================================================================================================
``123``, ``-123``     Integer
``1.23, -1.23``       Double
``"string"``          String(single quotation is not allowed)
``[1,2,3]``           Array
``null``              Null or property does not exist
``true``, ``false``   Boolean
``?``                 Place holder
===================== =================================================================================================================================

.. seealso::

  *See Also*

  - :ref:`backend_control_panel`
  - :ref:`backend_api_index`
  - :ref:`backend_database_memo`
  - :ref:`backend_management_api_index`
  - :ref:`backend_management_api_key`