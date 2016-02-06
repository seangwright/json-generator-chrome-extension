import angular from 'angular';

import mainControllerModule from './controller/main.controller.module.js';

let moduleName = 'app.main';

let mainModule = angular.module(moduleName, [
    
    mainControllerModule.name]);

export default mainModule;