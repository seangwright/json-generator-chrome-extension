import angular from 'angular';

import uiRouter from 'angular-ui-router';

let moduleName = 'app.common.controller';

let controllerModule = angular.module(moduleName, [
    
    'ui.router'])

	.config(config);

export default controllerModule;

function config($urlRouterProvider) {
	"ngInject";
	
	// For any unmatched url, redirect to /main
	$urlRouterProvider.otherwise("/main");
}