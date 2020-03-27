sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UI5DEMO1.controller.View1", {
		onInit: function(){
			sap.m.MessageToast.show("Hello World");
		},
		
		onAfterRendering: function(){
			sap.m.MessageToast.show("onAfterRendering");
		}
	});
});