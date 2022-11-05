sap.ui.define([
	"sap/ui/core/mvc/Controller", 

], function(
	Controller,
) {
	"use strict";

	return Controller.extend("project1fullstack.controller.BaseController", {

        onInit: function () {
            //
        },
        
        getPathLaunchpad() {
            return this.getOwnerComponent().getManifestObject()._oBaseUri._string;
        },

        getBaseURL() {
            const aPpId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            const aPpPath = aPpId.replaceAll(".", "/");
            const aPpModulePath = jQuery.sap.getModulePath(aPpPath);
            return aPpModulePath;
        },

        getModel(nameModel) {
            return this.getView().getModel(nameModel);
        },

        getResourceBundle() {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },

        openFragment(dialogName) {
            debugger
			if (!this[dialogName]) {
				this[dialogName] = sap.ui.xmlfragment("project1fullstack.view.fragments." + dialogName, this);
				this.getView().addDependent(this[dialogName]);
				jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this[dialogName]);
			}
			this[dialogName].open();
		},

	});
});