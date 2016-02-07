import angular from 'angular';

import commonModule from './common/common.module.js';
import mainModule from './form/form.module.js';

import templatesModule from "app:templates";
import styles from "app:styles-adapter";

let moduleName = "app";

let appModule = angular.module(moduleName, [
    
	commonModule.name,
	mainModule.name,
	templatesModule.name]);

angular.element(document).ready(() => {
	angular.bootstrap(document, [appModule.name], { strictDI: true });
});