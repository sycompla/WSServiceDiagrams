sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    "use strict";

    var Controller = Controller.extend("sources.controllers.Column", {

        onInit: function(){
            this._setIceCreamModel();
        },

        _setIceCreamModel:async function(){

            var model = new sap.ui.model.json.JSONModel();
            await model.loadData("sources/data/ServiceData.json");

            console.log(model.getJSON())

            let ac4yService = new Ac4yService(0).rebuilded(model.getJSON());
            this.getView().setModel(model, "service");

            console.log(ac4yService)
        }

    });

    return Controller;

});