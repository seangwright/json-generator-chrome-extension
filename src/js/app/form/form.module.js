import angular from 'angular';

import formControllerModule from './controller/form.controller.module.js';
import formServiceModule from './service/form.service.module.js';

let moduleName = 'app.form';

let formModule = angular.module(moduleName, [
    
    formControllerModule.name,
    formServiceModule.name]);

export default formModule;