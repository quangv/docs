.. _monaca_cloud_api_guide:

=====================================================================
Monaca Cloud & Remote Build API Guide
=====================================================================

You can build a Cordova app using Monaca Cloud & Remote Build API. It can also be integrated with other web services. Once integrated, you will be able to use cloud services and remote build functions as if you are using :ref:`Monaca Cloud IDE <monaca_ide_index>` or :ref:`Monaca CLI <monaca_cli_index>`.

In this page, we will talk about how to integrate Monaca Cloud & Remote Build API with Node.js projects and its usage.

Integrating Monaca Cloud & Remote Build API
=====================================================================

Monaca Cloud & Remote Build API is wrapped in a npm library called `monaca-lib <https://github.com/monaca/monaca-lib>`_. In order to use the APIs in your Node.js project, please do as follows:

1. Install ``monaca-lib``.

  .. code-block:: javascript

    $ npm install monaca-lib

2. Call this module in your js file:

  .. code-block:: javascript

    var Monaca = require('monaca-lib').Monaca;

3. You can now use any Monaca Cloud & Remote Build API in your js file now. For example:

  .. code-block:: javascript

      var Monaca = require('monaca-lib').Monaca;
      var monaca = new Monaca();
      monaca.login('some@email.com', 'password').then(
          function() {
              console.log('Succesfully logged in!');
          },
          function(error) {
              console.log('Login failed: ' + error);
          }
      );

Monaca Cloud & Remote Build API Usage
=====================================================================

The supported features for Monaca Cloud & Remote Build API are as follows:

- Sign in / sign out to/from Monaca.
- Creating a new project.
- Compile and build the project.
- Sync with Monaca Cloud project.
- Transpile local project.


Please refer to ``src/monaca.js`` file in the ``monaca-lib`` regarding the list of all availabe APIs and their usage.

