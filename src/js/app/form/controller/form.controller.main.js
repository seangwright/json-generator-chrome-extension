function FormMainController($scope, formService) {
    "ngInject";
    
    let formCtrl = this;
    
    formCtrl.onModelChanged = onModelChanged;
    
    formCtrl.spec = {
        filename: "jsconfig.json",
        ref: "https://code.visualstudio.com/Docs/languages/javascript",
        src: "https://github.com/sgwatgit/json-generator-chrome-extension"
    };
    
    formCtrl.model = {
        compilerOptions: {
            module: '',
            target: ''
        },
        files: []
    };
    
    formCtrl.temp = {
        files: ''
    }
    
    formService.setFormObject(formCtrl.model);
    
    $scope.$watch(() => { return formCtrl.temp.files; }, function (newFiles, oldFiles) {
        if (newFiles == oldFiles) {
            return;
        }
        
        formCtrl.model.files = newFiles.split(/\r?\n/);
    });
    
    $scope.$watchCollection(() => { return formCtrl.model; }, function (newModel, oldModel) {
        if (newModel === oldModel) {
            return;
        }
        
        formService.setFormObject(newModel);
    });
    
    function onModelChanged() {
        formService.setFormObject(formCtrl.model);
    }
}

export default { controller: FormMainController, name: "FormMainController" };