.. _json_sample:

======================================
JSON Recipe Format
======================================

Parameters
======================================

================= ================================================================================================
``task_name``      The purpose of the build. Valid values are: ``test`` & ``release``.

``branch``

``tag``

``platform``

``build``

``deploy``
================= ================================================================================================

JSON Recipe Example
======================================

.. code-block:: javascript

    [
        {
            "task_name": "test",
            "branch": "/release-[0-9]/",
            "tag": "/^\\d.\\d$/",
            "platform": [
                "ios",
                "android",
                "winrt"
            ],
            "build": [
                "debug",
                "release"
            ],
            "deploy": [
                {
                    "type": "DeployGate",
                    "alias": "Internal-Focus-Group",
                    "default": {
                        "foo": "bar"
                    },
                    "ios": {
                        "ios_test": true
                    },
                    "android": {
                        "android_test": true
                    }
                },
                {
                    "type": "HockeyApp",
                    "alias": "Internal-Focus-Group",
                    "default": {
                        "foo": "bar"
                    },
                    "ios": {
                        "ios_test": true
                    },
                    "android": {
                        "android_test": true
                    }
                },
                {
                    "type": "AppetizeIo",
                    "alias": "Internal-Focus-Group",
                    "default": {
                        "foo": "bar"
                    },
                    "ios": {
                        "ios_test": true
                    },
                    "android": {
                        "android_test": true
                    },
                    "keys": {
                        "ios:prod": "****",
                        "ios:debug": "****", 
                        "android:prod": "****", 
                        "android:debug": "****"
                    }
                }
            ]
        }
    ]


.. seealso::

  *See Also*

  - :ref:`monaca_ci_overview`
  - :ref:`supported_services`
  - :ref:`troubleshooting`