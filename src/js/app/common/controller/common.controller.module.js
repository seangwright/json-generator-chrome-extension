import angular from 'angular';
import uiRouter from 'angular-ui-router';

import formServiceModule from 'app:formService';

import AppController from './common.controller.app.js';

let moduleName = 'app.common.controller';

let controllerModule = angular.module(moduleName, [
    
    'ui.router',
    formServiceModule.name])
    
    .controller(AppController.name, AppController.controller)

	.config(config);

export default controllerModule;

function config($urlRouterProvider) {
	"ngInject";
	
	// For any unmatched url, redirect to /main
	$urlRouterProvider.otherwise("/form");
}