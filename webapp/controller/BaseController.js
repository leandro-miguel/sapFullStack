sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(
	Controller
) {
	"use strict";

	return Controller.extend("project1fullstack.controller.BaseController", {

        onInit: function () {
            //
        },
        
        getPathLaunchpad() {
            return this.getOwnerComponent().getManifestObject()._oBaseUri._string;
        },

        getBaseURL: function () {
            const aPpId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            const aPpPath = aPpId.replaceAll(".", "/");
            const aPpModulePath = jQuery.sap.getModulePath(aPpPath);
            return aPpModulePath;
        },

        getModel: function (nameModel) {
            return this.getView().getModel(nameModel);
        },

        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        }
	});
});