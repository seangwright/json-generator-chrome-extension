# Json Generator - Chrome Extension

This repository contains the code used to create the Json Generator Chrome extension

### Purpose

Manually filling out values for .json files can be time consuming due to not always knowing or remembering the accepted structure and fields and error prone due to typos.

By creating a format for defining the options and values for specific .json configuration files (ex. package.json, jsconfig.json, ...) this extension will be able to auto-genrate HTML forms that will allow a user to autopopulate the required .json file with the values entered into the form.

The generated .json is display next to the form where the values were entered.

### TODO

* Define .json->HTML form spec
* Host spec files for various .json config standards
* Wire up auto-form generation from spec
* Explore dynamic form generation (generating additional form fields while entering values)
* Add copy-to-clipboard functionality
* Add .json file download functionality

### Building / Running locally

* npm i jspm -g
* npm i gulp -g
* npm i
* gulp build --dev
* turn on development mode on Chrome extensions page
* load /public directory as extension from file system