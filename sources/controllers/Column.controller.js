sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    "use strict";

    var Controller = Controller.extend("sources.controllers.Column", {

        onInit: function(){
            this._setIceCreamModel();
        },

        _setIceCreamModel:function(){

            var aData = {
                Items : [
                    {
                        Name: "useless",
                        Number: 2
                    },
                    {
                        Name: "success",
                        Number: 80
                    },
                    {
                        Name: "failed",
                        Number: 18
                    }
                ]
            }
            var oIceCreamModel = new sap.ui.model.json.JSONModel();
            oIceCreamModel.setData(aData);
            this.getView().setModel(oIceCreamModel, "IceCreamModel");
        }

    });

    return Controller;

});