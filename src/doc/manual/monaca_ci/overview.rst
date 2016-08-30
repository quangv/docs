.. _monaca_ci_overview:

=============================
Overview
=============================


Introduction
============================================================================

Monaca CI (Continuous Integration & Deployment) is a service that has been integrated within the current development environment stack to automate building and deployment cycle. It is able to achieve this automation process by using webhooks that GitHub and may other Git services provides with every code commit or branch/tag creation. 

Monaca CI lets developers focus more on the code and less on the backend process of building, testing and deploying an app. 

 
Prerequisite
=================================

In order to use Monaca CI, you will need to integrate Github with your Monaca account. If you haven't done it, please follow the instruction below:

1. get a GitHub account. Register `here <https://github.com/join>`_.
2. link your Monaca account to Github. Please refer to :ref:`github_integration`.
3. connect your project to your Github repository. Please refer to :ref:`version_control_configuration`.

.. note:: In order to use Monaca CI, Cordova 6.2 or higher is required. 


Getting Started with Monaca CI
============================================

Assuming you have successfully linked a Github repository to your project, please follow the the steps in the instruction below to get Monaca CI started:

1. From Monaca Cloud IDE menu, go to :menuselection:`Config --> Continuous Integration`.

2. Under :guilabel:`JSON Settings` section, you will see the following default JSON script. This script controls the automation behaviours of Monaca CI. The meaning of this default configuration is that when you push your project code to any Github's branch with a name formatted as ``release-[0-9]`` or a tag formatted as ``^\\d.\\d$``, Monaca CI will automatically build your project into debug and release builds for iOS platform. You can find these built files under Build History page. 
    
    .. code-block:: javascript

        [
            {
                "task_name": "Default",
                "branch": "/release-[0-9]/",
                "tag": "/^\\d.\\d$/",
                "platform": [
                    "ios"
                ],
                "build": [
                    "debug",
                    "release"
                ],
                "deploy": []
            }
        ]
    
3. Click :guilabel:`Enable` then :guilabel:`Save` button. That's it! Now your Monaca CI is ready. You can start pushing your project code to the valid branch or tag as configured in JSON settings. You should be able to see the built files under Build History page. It may take some times until the files are ready.

    .. figure:: images/overview/3.png
      :width: 600px
      :align: left

    .. rst-class:: clear



JSON Settings Configuration
============================================

Monaca CI will automate its job by reading the JSON recipe script. In other words, you will need to configure the JSON settings according to what you want Monaca CI to do for you.

For example, the following JSON recipe script will automate Monaca CI to:

1. build the ``debug`` build of your project for both iOS and Android platforms when you push the project code to the branch named ``"release"``.
2. then distribute the built file to ``Deploy Gate`` service which has a release note and disable the email notfication for iOS devices.

.. code-block:: javascript

    [
        {
            "task_name": "Beta Test",
            "branch": "release",
            "platform": [
                "ios",
                "android"
            ],
            "build": [
                "debug"
            ],
            "deploy": [
                {
                    "type": "DeployGate",
                    "alias": "Insider Test",
                    "default": {
                        "release_note": "This is a beta test for insider testing."
                    },
                    "ios": {
                        "disable_notify": "yes"
                    }
                }
            ]
        }
    ]

Parameters
^^^^^^^^^^^^^^^^^^^^

In the following table, there are necessary parameters you will need to use in the recipe script.

+-----------------+------------------------------------------------------------------------------------------------------------------+
| Param           |   Description                                                                                                    |
+=================+==================================================================================================================+
|``task_name``    |  a name representing your build process.                                                                         |
+-----------------+------------------------------------------------------------------------------------------------------------------+
|``branch``       |  Github branch of the project you want to build.                                                                 |
+-----------------+------------------------------------------------------------------------------------------------------------------+
|``tag``          |  Github tag of the project you want to build.                                                                    |
+-----------------+------------------------------------------------------------------------------------------------------------------+
|``platform``     |  The platform you want to build for. Valid values are: ``ios``, ``android`` & ``winrt``.                         |
+-----------------+------------------------------------------------------------------------------------------------------------------+
|``build``        |  The build type. Valid values are: ``debug`` & ``release``.                                                      |
+-----------------+------------------------------------------------------------------------------------------------------------------+
|``deploy``       |  The deployment service(s) you will use to deliver your app.                                                     |   
|                 |                                                                                                                  |
|                 |  - ``type``: name of the deployment service (case sensitive).                                                    |
|                 |  - ``alias``: alias name of the selected deployment service (case sensitive).                                    |
|                 |  - ``default``: a block for default parameters you may need to use for the deployment service.                   |
|                 |  - ``ios``: a block for iOS parameters you may need to use for the deployment service.                           |
|                 |  - ``android``: a block for Android parameters you may need to use for the deployment service.                   |
|                 |                                                                                                                  |
|                 |  Please refer to :ref:`here <supported_services>` on currently supported and upcoming deployment services.       |
+-----------------+------------------------------------------------------------------------------------------------------------------+

Deploy Services Configuration
============================================

You can also automate your app distribution process with Monaca CI. In order to do this, please do as follows:

1. From Monaca Cloud IDE menu, go to :menuselection:`Config --> Deploy Services`.
2. Click :guilabel:`Add Deploy Service`.
3. Choose a deploy service and fill in the required information. Then, click :guilabel:`Add`.

    .. figure:: images/overview/1.png
      :width: 600px
      :align: left

    .. rst-class:: clear

4. Go to guilabel:`Continuous Integration` panel, you will see your newly added service under Configured Deploy Services.

    .. figure:: images/overview/4.png
      :width: 600px
      :align: left

    .. rst-class:: clear


5. Then, add configuration for your deploy service in JSON script. Here is an example:

    .. code-block:: javascript

        [
            {
                "task_name": "Beta Test",
                "branch": "release",
                "platform": [
                    "ios",
                    "android"
                ],
                "build": [
                    "debug"
                ],
                "deploy": [
                    {
                        "type": "DeployGate",
                        "alias": "Insider Test",
                        "default": {
                            "release_note": "This is a beta test for insider testing."
                        },
                        "ios": {
                            "disable_notify": "yes"
                        }
                    }
                ]
            }
        ]

6. Once you are done with the configuration, click :guilabel:`Save`. That's it! 

.. note:: You can have multiple deploy services configured in Monaca CI. You can also have multiple aliases for each deploy service. Please refer to :ref:`supported_services` regarding currently supported and upcoming deploy services. 



.. seealso::

  *See Also*

  - :ref:`supported_services`
  - :ref:`json_sample`
