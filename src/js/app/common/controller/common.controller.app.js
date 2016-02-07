function AppController(formService) {
    "ngInject";
    
    let appCtrl = this;
    
    appCtrl.formService = formService;
    
    appCtrl.formService.onUpdate(updateJson);
    
    function updateJson() {
        appCtrl.json = formService.formToJson();
    }
}

export default { controller: AppController, name: "AppController" };