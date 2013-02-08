Ext.define("senchatweet.controller.SenchaTweetController",{
	extend : "Ext.app.Controller",
	config : {},
	launch : function (){
		this.callParent(arguments);
		console.log('launch');
	},
	init   : function (){
		this.callParent();
		console.log('init');
	}
});