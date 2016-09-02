The first part of this JavaScript code as shown below is about initializing an *inmobi* object called ``inmobi_conf``. There are several properties of this object such as:
  
- ``siteid`` (string): the property ID. 
- ``slot`` (number):  dimensions of the slot or box where ads appear on your app. The recommended slot value for most publishers is ``15``, which is a ``320x50`` slot that is compatible with rich media ads. For more information about other slot numbers, please refer to `Slot Sizes <https://support.inmobi.com/monetize/integration/mobile-web/mobile-web-integration-guide#integrating-the-ad-code>`_.
- ``test`` (boolean): the state of your app. During development and testing, it should be set to true, to ensure that only test ads are sent. When you set test to false, you will receive live ads.
- ``manual`` (boolean): if set to ``"true"``, the ad is not loaded automatically at page load. The ad can then be fetched at some other time in the life cycle of the page, using the :envvar:`getNewAd()` function.
- ``autoRefresh`` (number): the duration of auto refresh of text and banner ads. The refresh interval is in seconds and its minimum accepted value is 20. In this sample, the ads is auto refreshed every minute.
- ``targetWindow``: allows you this control whether to open a click URL/Landing Page in the same window or in a new window. To open click URLs in a new window, the parameter value must be set to ``"_blank"``. The default value is ``"_top"`` which opens the click URL in the same window.


::

    <script type="text/javascript">
      monaca.viewport({width: 480}); //set the screensize

      var inmobi_conf = 
      {
        siteid : "4028cba631d63df10131e1d3191d00cb", // your Property ID
        slot: 15,
        test: true,
        manual: true,
        autoRefresh: 60,
        targetWindow : "_blank", // default "_top"
        onError : function(code) 
        {
          if(code == "nfr") 
          {
            console.log("Error getting the ads!"); 
          }
        }
      };
      ...
    </script> 


There are 2 functions in the JavaScript code of this app: :envvar:`onDeviceReady()`, and :envvar:`showAds()`.

onDeviceReady() function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The :envvar:`onDeviceReady()` includes :file:`inmobi.js` file when Core Cordova Plugins is fully loaded. Below is the JavaScript code of this function:

::

    <script type="text/javascript">
      ...

      document.addEventListener("deviceready", onDeviceReady, false);

      function onDeviceReady()
      {
        console.log('device ready');
        $.getScript("inmobi.js", function(){
          showAds();
        });   
      }
      ...
    </script>

.. note:: :file:`inmobi.js` must not be included as usual in the header  by using (``<script type="text/javascript" src="inmobi.js"></script>``). This file is needed to be included after Core Cordova Plugins is fully loaded inside :envvar:`onDeviceReady()` function as shown above. 

showAds() function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The :envvar:`showAds()` function requests a new ads from the Inmobi. Below is the JavaScript code of this function:

::

    <script>     
      ...
      function showAds() 
      {
        var adsElement = document.getElementById('ads');
        _inmobi.getNewAd(adsElement);
      }  
    </script>

For more information regarding *inmobi* JavaScript API, please refer to `this <http://developer.inmobi.com/wiki/index.php?title=JavaScript>`_.











