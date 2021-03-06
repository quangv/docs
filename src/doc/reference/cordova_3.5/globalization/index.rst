Globalization Plugin 
========================================================

.. rst-class:: right-menu


.. raw:: html

  <div>
    <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-globalization/blob/master/RELEASENOTES.md#028-jun-05-2014">0.2.8</a></div>   
    <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
    <br/>
  </div>

.. note:: 
    
    This document is based on the original Cordova docs available at `Cordova Docs <https://github.com/apache/cordova-plugin-globalization/blob/master/README.md>`_.

This plugin obtains information and performs operations specific to the user's locale and timezone.

Plugin ID
-----------------------

::
  
  org.apache.cordova.globalization

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please enable ``org.apache.cordova.globalization`` plugin in Monaca Cloud IDE. Please refer to :ref:`standard_plugins` docs for how to enable the plugin in Monaca. 

Objects
-------

-  GlobalizationError

Methods
-------

-  navigator.globalization.getPreferredLanguage
-  navigator.globalization.getLocaleName
-  navigator.globalization.dateToString
-  navigator.globalization.stringToDate
-  navigator.globalization.getDatePattern
-  navigator.globalization.getDateNames
-  navigator.globalization.isDayLightSavingsTime
-  navigator.globalization.getFirstDayOfWeek
-  navigator.globalization.numberToString
-  navigator.globalization.stringToNumber
-  navigator.globalization.getNumberPattern
-  navigator.globalization.getCurrencyPattern

navigator.globalization.dateToString
------------------------------------

Returns a date formatted as a string according to the client's locale and timezone.

.. code-block:: javascript

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);

Description
~~~~~~~~~~~

Returns the formatted date ``String`` via a ``value`` property accessible from the object passed as a parameter to the ``successCallback``.

The inbound ``date`` parameter should be of type ``Date``.

If there is an error formatting the date, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.FORMATTING\_ERROR``.

The ``options`` parameter is optional, and its default values are:

.. code-block:: javascript

    {formatLength:'short', selector:'date and time'}

The ``options.formatLength`` can be ``short``, ``medium``, ``long``, or ``full``.

The ``options.selector`` can be ``date``, ``time`` or ``date and time``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

If the browser is set to the ``en\_US`` locale, this displays a popup dialog with text similar to ``date: 9/25/2012 4:21PM`` using the default options:

.. code-block:: javascript

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );


navigator.globalization.getCurrencyPattern
------------------------------------------

Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.

.. code-block:: javascript

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);

Description
~~~~~~~~~~~

Returns the pattern to the ``successCallback`` with a ``properties`` object as a parameter. That object should contain the following properties:

-  **pattern**: The currency pattern to format and parse currency values. The patterns follow `Unicode Technical Standard #35 <http://unicode.org/reports/tr35/tr35-4.html>`__. *(String)*

-  **code**: The ISO 4217 currency code for the pattern. *(String)*

-  **fraction**: The number of fractional digits to use when parsing and formatting currency. *(Number)*

-  **rounding**: The rounding increment to use when parsing and formatting. *(Number)*

-  **decimal**: The decimal symbol to use for parsing and formatting. *(String)*

-  **grouping**: The grouping symbol to use for parsing and formatting. *(String)*

The inbound ``currencyCode`` parameter should be a ``String`` of one of the ISO 4217 currency codes, for example 'USD'.

If there is an error obtaining the pattern, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.FORMATTING\_ERROR``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale and the selected currency is United States Dollars, this example displays a popup dialog with text similar to the results that follow:

.. code-block:: javascript

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );

Expected result:

::

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,

navigator.globalization.getDateNames
------------------------------------

Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.

.. code-block:: javascript

    navigator.globalization.getDateNames(successCallback, errorCallback, options);

Description
~~~~~~~~~~~

Returns the array of names to the ``successCallback`` with a ``properties`` object as a parameter. That object contains a ``value`` property with an ``Array`` of ``String`` values. The array features names starting from either the first month in the year or the first day of the week, depending on the option selected.

If there is an error obtaining the names, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.UNKNOWN\_ERROR``.

The ``options`` parameter is optional, and its default values are:

.. code-block:: javascript

    {type:'wide', item:'months'}

The value of ``options.type`` can be ``narrow`` or ``wide``.

The value of ``options.item`` can be ``months`` or ``days``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this example displays a series of twelve popup dialogs, one per month, with text similar to ``month: January``:

.. code-block:: javascript

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );

navigator.globalization.getDatePattern
--------------------------------------

Returns a pattern string to format and parse dates according to the client's user preferences.

.. code-block:: javascript

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);

Description
~~~~~~~~~~~

Returns the pattern to the ``successCallback``. The object passed in as a parameter contains the following properties:

-  **pattern**: The date and time pattern to format and parse dates. The patterns follow `Unicode Technical Standard #35 <http://unicode.org/reports/tr35/tr35-4.html>`__. *(String)*

-  **timezone**: The abbreviated name of the time zone on the client. *(String)*

-  **utc\_offset**: The current difference in seconds between the client's time zone and coordinated universal time. *(Number)*

-  **dst\_offset**: The current daylight saving time offset in seconds between the client's non-daylight saving's time zone and the client's daylight saving's time zone. *(Number)*

If there is an error obtaining the pattern, the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.PATTERN\_ERROR``.

The ``options`` parameter is optional, and defaults to the following values:

.. code-block:: javascript

    {formatLength:'short', selector:'date and time'}

The ``options.formatLength`` can be ``short``, ``medium``, ``long``, or ``full``. The ``options.selector`` can be ``date``, ``time`` or ``date and time``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this example displays a popup dialog with text such as ``pattern: M/d/yyyy h:mm a``:

.. code-block:: javascript

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }

navigator.globalization.getFirstDayOfWeek
-----------------------------------------

Returns the first day of the week according to the client's user preferences and calendar.

.. code-block:: javascript

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);

Description
~~~~~~~~~~~

The days of the week are numbered starting from 1, where 1 is assumed to be Sunday. Returns the day to the ``successCallback`` with a ``properties`` object as a parameter. That object should have a ``value`` property with a ``Number`` value.

If there is an error obtaining the pattern, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.UNKNOWN\_ERROR``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Amazon Fire OS
-  Android
-  iOS
-  Windows Phone 8

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this displays a popup dialog with text similar to ``day: 1``.

.. code-block:: javascript

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );

Get the string identifier for the client's current locale setting.

.. code-block:: javascript

    navigator.globalization.getLocaleName(successCallback, errorCallback);

Description
~~~~~~~~~~~

Returns the locale identifier string to the ``successCallback`` with a ``properties`` object as a parameter. That object should have a ``value`` property with a ``String`` value.

If there is an error getting the locale, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.UNKNOWN\_ERROR``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this displays a popup dialog with the text ``locale: en\_US``.

.. code-block:: javascript

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );


navigator.globalization.getNumberPattern
----------------------------------------

Returns a pattern string to format and parse numbers according to the client's user preferences.

.. code-block:: javascript

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);

Description
~~~~~~~~~~~

Returns the pattern to the ``successCallback`` with a ``properties`` object as a parameter. That object contains the following properties:

-  **pattern**: The number pattern to format and parse numbers. The patterns follow `Unicode Technical Standard #35 <http://unicode.org/reports/tr35/tr35-4.html>`__. *(String)*

-  **symbol**: The symbol to use when formatting and parsing, such as a percent or currency symbol. *(String)*

-  **fraction**: The number of fractional digits to use when parsing and formatting numbers. *(Number)*

-  **rounding**: The rounding increment to use when parsing and formatting. *(Number)*

-  **positive**: The symbol to use for positive numbers when parsing and formatting. *(String)*

-  **negative**: The symbol to use for negative numbers when parsing and formatting. *(String)*

-  **decimal**: The decimal symbol to use for parsing and formatting. *(String)*

-  **grouping**: The grouping symbol to use for parsing and formatting. *(String)*

If there is an error obtaining the pattern, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.PATTERN\_ERROR``.

The ``options`` parameter is optional, and default values are:

.. code-block:: javascript

    {type:'decimal'}

The ``options.type`` can be ``decimal``, ``percent``, or ``currency``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this should display a popup dialog with text similar to the results that follow:

.. code-block:: javascript

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );

Results:

::

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,


navigator.globalization.getPreferredLanguage
--------------------------------------------

Get the string identifier for the client's current language.

.. code-block:: javascript

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

Description
~~~~~~~~~~~

Returns the language identifier string to the ``successCallback`` with a ``properties`` object as a parameter. That object should have a ``value`` property with a ``String`` value.

If there is an error getting the language, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.UNKNOWN\_ERROR``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this should display a popup dialog with the text ``language: English``:

.. code-block:: javascript

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );


navigator.globalization.isDayLightSavingsTime
---------------------------------------------

Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.

.. code-block:: javascript

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);

Description
~~~~~~~~~~~

Indicates whether or not daylight savings time is in effect to the ``successCallback`` with a ``properties`` object as a parameter. That object should have a ``dst`` property with a ``Boolean`` value. A ``true`` value indicates that daylight savings time is in effect for the given date, and ``false`` indicates that it is not.

The inbound parameter ``date`` should be of type ``Date``.

If there is an error reading the date, then the ``errorCallback`` executes. The error's expected code is ``GlobalizationError.UNKNOWN\_ERROR``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

During the summer, and if the browser is set to a DST-enabled timezone, this should display a popup dialog with text similar to ``dst: true``:

.. code-block:: javascript

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );

navigator.globalization.numberToString
--------------------------------------

Returns a number formatted as a string according to the client's user preferences.

.. code-block:: javascript

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);

Description
~~~~~~~~~~~

Returns the formatted number string to the ``successCallback`` with a ``properties`` object as a parameter. That object should have a ``value`` property with a ``String`` value.

If there is an error formatting the number, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.FORMATTING\_ERROR``.

The ``options`` parameter is optional, and its default values are:

.. code-block:: javascript

    {type:'decimal'}

The ``options.type`` can be 'decimal', 'percent', or 'currency'.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this displays a popup dialog with text similar to ``number: 3.142``:

.. code-block:: javascript

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );

navigator.globalization.stringToDate
------------------------------------

Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.

.. code-block:: javascript

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);

Description
~~~~~~~~~~~

Returns the date to the success callback with a ``properties`` object as a parameter. That object should have the following properties:

-  **year**: The four digit year. *(Number)*

-  **month**: The month from (0-11). *(Number)*

-  **day**: The day from (1-31). *(Number)*

-  **hour**: The hour from (0-23). *(Number)*

-  **minute**: The minute from (0-59). *(Number)*

-  **second**: The second from (0-59). *(Number)*

-  **millisecond**: The milliseconds (from 0-999), not available on all platforms. *(Number)*

The inbound ``dateString`` parameter should be of type ``String``.

The ``options`` parameter is optional, and defaults to the following values:

.. code-block:: javascript

    {formatLength:'short', selector:'date and time'}

The ``options.formatLength`` can be ``short``, ``medium``, ``long``, or ``full``. The ``options.selector`` can be ``date``, ``time`` or ``date and time``.

If there is an error parsing the date string, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.PARSING\_ERROR``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this displays a popup dialog with text similar to ``month:8 day:25 year:2012``. Note that the month integer is one less than the string, as the month integer represents an array index.

.. code-block:: javascript

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );


navigator.globalization.stringToNumber
--------------------------------------

Parses a number formatted as a string according to the client's user preferences and returns the corresponding number.

.. code-block:: javascript

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);

Description
~~~~~~~~~~~

Returns the number to the ``successCallback`` with a ``properties`` object as a parameter. That object should have a ``value`` property with a ``Number`` value.

If there is an error parsing the number string, then the ``errorCallback`` executes with a ``GlobalizationError`` object as a parameter. The error's expected code is ``GlobalizationError.PARSING\_ERROR``.

The ``options`` parameter is optional, and defaults to the following values:

.. code-block:: javascript

    {type:'decimal'}

The ``options.type`` can be ``decimal``, ``percent``, or ``currency``.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the browser is set to the ``en\_US`` locale, this should display a popup dialog with text similar to ``number: 1234.56``:

.. code-block:: javascript

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );

GlobalizationError
------------------

An object representing a error from the Globalization API.

Properties
~~~~~~~~~~

-  **code**: One of the following codes representing the error type *(Number)*
-  GlobalizationError.UNKNOWN\_ERROR: 0
-  GlobalizationError.FORMATTING\_ERROR: 1
-  GlobalizationError.PARSING\_ERROR: 2
-  GlobalizationError.PATTERN\_ERROR: 3
-  **message**: A text message that includes the error's explanation and/or details *(String)*

Description
~~~~~~~~~~~

This object is created and populated by Cordova, and returned to a callback in the case of an error.

Supported Platforms
~~~~~~~~~~~~~~~~~~~

-  Android
-  iOS

Example
~~~~~~~

When the following error callback executes, it displays a popup dialog with the text similar to ``code: 3`` and ``message:``

.. code-block:: javascript

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
