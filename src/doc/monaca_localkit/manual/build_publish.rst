.. _localkit_build_publish:

================================================
Remote Building and Publishing
================================================

.. figure:: images/build_publish/1.png
  :width: 600px
  :align: center


Inside :guilabel:`Remote Build`, there are several important functions such as:

- Building application: choose a specific platform (among Android, iOS, Chrome Apps and Windows) to build.
- Building configuration: configure necessary information regarding application and build for each platform.
- Project dependencies: include necessary dependencies (:ref:`Cordova plugins<standard_plugins>`, :ref:`js_css` and Service Integration) used by the project.


Until this step, we assume that you have successfully developed a complete application. Then, you can try building your app and installing it on your device. Once the app development and testing are completed, your app is ready for market submission. Before releasing or distributing your app into the markets (App Store, Google Play, ...), you will need to create a release build of your app. 

Please refer to the following documentation on how to build and distribute your app according to each platform:

.. toctree::
  :maxdepth: 2

  ../../monaca_ide/manual/build/index
  ../../monaca_ide/manual/deploy/index


.. seealso::

  *See Also*

  - :ref:`monaca_localkit_tutorial`
  - :doc:`overview`
  - :doc:`pairing_debugging`
  - :doc:`troubleshooting`
