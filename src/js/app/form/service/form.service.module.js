import angular from 'angular';

import formService from './form.service.formService.js';

let moduleName = 'app.form.service';

let serviceModule = angular.module(moduleName, [])

    .service(formService.name, formService.service);
	
export default serviceModule;