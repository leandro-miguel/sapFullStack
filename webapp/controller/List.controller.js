sap.ui.define([
    "./BaseController",
    "../model/ListModel",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, ListModel, MessageBox) {
        "use strict";

        return BaseController.extend("project1fullstack.controller.List", {
            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteList").attachPatternMatched(this._onSearch, this);
            },

            async _onSearch(oEvent){
                debugger
                const oModel = this.getModel("oModelList");
                oModel.setProperty("/busyList", true);
                const oSearchFilterValue = oEvent.getParameters().newValue;
                const oListModel = new ListModel();
                try{
                    debugger
                    const fnPromise = await oListModel.calloDataGetFunction(oSearchFilterValue);
                    if(fnPromise.response.statusCode == 200){
                        oModel.setProperty("/busyList", false);
                        oModel.setProperty("/rows", fnPromise.oData.results);
                        oModel.setProperty("/qtdRows", fnPromise.oData.results.length);
                    }
                }catch(e){
                    MessageBox.error(e.message);
                }
            },
        });
    });
