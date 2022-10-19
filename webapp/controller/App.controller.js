sap.ui.define(
    [
      "./BaseController",
      "../model/GlobalModel"
    ],
    function(BaseController, GlobalModel) {
      "use strict";
  
      return BaseController.extend("project1fullstack.controller.App", {
        onInit() {
          const oGlobalModel = GlobalModel.getInstance();
          oGlobalModel.setoModelMainService(this.getOwnerComponent().getModel("oModelMainService"));
        }
      });
    }
  );
  