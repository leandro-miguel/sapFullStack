sap.ui.define(
    [
        "sap/ui/base/Object",
        "./GlobalModel",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
    ],
    function (Object, GlobalModel, Filter, FilterOperator) {
        "use strict";
        return Object.extend("project1fullstack.model.ListModel", {
            constructor: function () {
                //
            },

            async calloDataGetFunction(empresa) {
                const oGlobalModel = GlobalModel.getInstance();
                const oDataModel = oGlobalModel.getoModelMainService();
                oDataModel.setUseBatch(false);

                //Filter
                let aFilter = [];
                if(empresa != undefined){
                    let objFilterCom = new Filter("AgencyName", FilterOperator.Contains, empresa);
                    aFilter.push(objFilterCom);
                }

                const sPath = "/TravelProcessorSet";
                const fnPromise = new Promise(function (res, rej) {
                    oDataModel.read(sPath, {
                        refreshAfterChange: true,
                        filters: aFilter,
                        success: function (oData, response) {
                            res({ oData, response });
                        }.bind(this),
                        error: function (oError) {
                            rej(oError);
                        }.bind(this),
                    });
                });
                return fnPromise;
            },

            async getUserInfo(base) {
                const url = base + "user-api/currentUser";
                const promise = new Promise (function (resolved, rejected) {
                    $.ajax({
                        async: true,
                        crossDomain: true,
                        url: url,
                        method: "GET",
                        success: function (oData, response) {
                            resolved(oData, response);
                        },
                        error: function (message) {
                            rejected(message);
                        }
                    });
                });
                return promise;
            }
        });
    }
);