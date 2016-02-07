function formService() {
    let service = this;
    
    let formObject = {},
        updateCallbacks = [];
    
    service.formToJson = formToJson;
    service.setFormObject = setFormObject;
    
    service.onUpdate = onUpdate;
    
    return service;
    
    function formToJson() {
        return JSON.stringify(formObject, null, 4);
    }
    
    function setFormObject(obj) {
        formObject = obj;
        
        updateCallbacks.forEach((cb) => { cb(); });
    }
    
    function onUpdate(callback) {
        updateCallbacks.push(callback);
    }
}

export default { service: formService, name: 'formService' };