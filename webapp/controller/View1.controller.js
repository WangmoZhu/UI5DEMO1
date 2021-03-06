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
		},
		
		onPress: function(e){
			console.log("Hello World");
		},
		
		onBeforeRendering: function(){
			sap.m.MessageToast.show("onBeforeRendering");
		},
		
		onExit: function(){
			
		},
		
		onEdit: function(e){
			console.log("Update");
		},
		onDelete: function(e){},
		onUpdate: function(e){
			
		}
	});
});