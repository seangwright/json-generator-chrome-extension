import angular from 'angular';

import controllerModule from './controller/common.controller.module.js';

let moduleName = 'app.common';

let commonModule = angular.module(moduleName, [
	
	controllerModule.name]);
	
export default commonModule;