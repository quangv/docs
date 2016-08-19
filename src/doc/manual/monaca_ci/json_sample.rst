.. _json_sample:

======================================
JSON Recipe Format
======================================

[Description of the JSON file]


Format
======================================

================= ================================================================================================
``task_name``       The purpose of the build. Valid values are: ``test`` & ``release``.

``branch``          Github branch of the project you want to build.

``tag``             Github tag of the project you want to build.

``platform``        The platform you want to build for. Valid values are: ``ios``, ``android`` & ``winrt``.

``build``           The build type. Valid values are: ``debug`` & ``release``.

``deploy``          The deployment service(s) you will use to deliver your app.
                    
                    - ``type``: name of the deployment service (case sensitive).
                    - ``alias``: alias name of the selected deployment service (case sensitive).
                    - ``default``: a block for default parameters you may need to use for the deployment service.
                    - ``ios``: a block for iOS parameters you may need to use for the deployment service.
                    - ``android``: a block for Android parameters you may need to use for the deployment service.
                    
                    Please refer to :ref:`here <supported_services>` on currently supported and upcoming deployment services.
================= ================================================================================================

Example
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
                        "foo": "bar"
                    },
                    "android": {
                        "foo": "bar"
                    }
                },
                {
                    "type": "HockeyApp",
                    "alias": "Internal-Focus-Group",
                    "default": {
                        "foo": "bar"
                    },
                    "ios": {
                        "foo": "bar"
                    },
                    "android": {
                        "foo": "bar"
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