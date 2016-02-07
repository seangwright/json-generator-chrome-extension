import angular from 'angular';
import uiRouter from 'angular-ui-router';

import FormMainController from './form.controller.main.js';

let moduleName = 'app.form.controller';

let controllerModule = angular.module(moduleName, [

    'ui.router'])
    
    .controller(FormMainController.name, FormMainController.controller)
    
    .config(config);
    
function config($stateProvider, $urlRouterProvider) {
    "ngInject";

    // Now set up the states
    $stateProvider
        .state('form', {
            url: "/form",
            templateUrl: "form/controller/form.controller.main.html",
            controller: FormMainController.name,
            controllerAs: 'formCtrl'
        });
}

export default controllerModule;