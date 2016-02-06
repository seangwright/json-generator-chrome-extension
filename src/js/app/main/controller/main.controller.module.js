import angular from 'angular';

import uiRouter from 'angular-ui-router';

import MainController from './main.controller.main.js';

let moduleName = 'app.main.controller';

let controllerModule = angular.module(moduleName, [

    'ui.router'])
    
    .controller(MainController.name, MainController.controller)
    
    .config(config);
    
function config($stateProvider, $urlRouterProvider) {
    "ngInject";

    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "main/controller/main.controller.main.html",
            controller: MainController.name,
            controllerAs: 'mainCtrl'
        });
}

export default controllerModule;