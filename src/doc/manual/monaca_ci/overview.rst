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

Step 1: Configure Deploy Services
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. From Monaca Cloud IDE menu, go to :menuselection:`Config --> Deploy Services`.
2. Click :guilabel:`Add Deploy Service`.
3. Choose a deploy service and fill in the required information. Then, click :guilabel:`Add`.

  .. figure:: images/overview/1.png
      :width: 600px
      :align: left

  .. rst-class:: clear

.. note:: You can have multiple deploy services configured in Monaca CI. You can also have multiple aliases for each deploy service. Please refer to :ref:`supported_services` regarding currently supported and upcoming deploy services. 

Step 2: Configure JSON Settings
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Monaca CI will automate its job by reading the JSON recipe script. In other words, you will need to configure the JSON settings according to what you want Monaca CI to do for you. For more information, please refer to :ref:`json_sample`.

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


Step 3: Start Monaca CI
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

After finish configuring deploy services and JSON settings, you are now ready to start Monaca CI. Please do as follows:

1. Click :guilabel:`Enable` and click :guilabel:`Save`.

  .. figure:: images/overview/2.png
      :width: 700px
      :align: left

  .. rst-class:: clear

2. Then, start pushing your project code to the valid branch or tag as you configured in JSON settings. That's it! 

.. seealso::

  *See Also*

  - :ref:`supported_services`
  - :ref:`json_sample`
