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

            var model2 = new sap.ui.model.json.JSONModel();
            await model2.loadData("sources/data/dimenson.json");

            let deseralized = JSON.parse(model.getJSON())
            let dimension = JSON.parse(model2.getJSON())
            console.log(dimension)

            let ac4yLifeCycleArray = [];

            for (let counter = 0; counter < dimension.length; counter++) {

                let ac4yLifecycleFact = new Ac4yLifecycleFact(0).rebuilded(dimension[counter]);

                ac4yLifeCycleArray.push(ac4yLifecycleFact);

            }

            console.log(ac4yLifeCycleArray)

            let ac4yService = new Ac4yService(0).rebuilded(deseralized);
            this.getView().setModel(model2, "dimension");

        }

    });

    return Controller;

});