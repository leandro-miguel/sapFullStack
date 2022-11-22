sap.ui.define([
    "./BaseController",
    "./Formatter",
    "../model/ListModel",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, Formatter, ListModel, MessageBox, Filter, FilterOperator) {
        "use strict";
        //TEste
        return BaseController.extend("project1fullstack.controller.List", {
            formatter: Formatter,
            onInit: function () {
                //teste
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteList").attachPatternMatched(this._onSearch, this);
            },

            async _onSearch(oEvent){
                const oModel = this.getModel("oModelList");
                const oSearchFilterValue = oEvent.getParameters().newValue;
                const oListModel = new ListModel();
                oModel.setProperty("/busyList", true);
                try{
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

            // --------------------------------------------
            //
            //  -------- Fragmentos -----------------------
            //
            //----------------------------------------------

            _onCreate(){
                this.openFragment("Create");
            },

            onExitCreate() {
                this.Create.close();
            },

            onHelpDialogAgency(){
                this.openFragment("Agency");
            },

            onExitAgency() {
                this.Agency.close();
            },

            onHelpDialogPassenger(){
                this.openFragment("Passenger");
            },

            onExitPassenger() {
                this.Passenger.close();
            },
    
        });
    });
