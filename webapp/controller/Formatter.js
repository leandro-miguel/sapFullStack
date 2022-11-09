sap.ui.define(function () {
	"use strict";

	let Formatter = {
		CurrencyBRL(param){
			debugger
			if(param){
				param = parseFloat(param);
				return param.toLocaleString("pt-br", {style: "currency",currency: "BRL"})
			}
		}	
      
	};
	return Formatter;

}, /* bExport= */ true);
