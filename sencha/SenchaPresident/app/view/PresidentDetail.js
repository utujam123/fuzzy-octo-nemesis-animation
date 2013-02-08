Ext.define("SenchaPresident.view.PresidentDetail",{
	extend : "Ext.Panel",
	xtype  : "presidentdetail",
	config : {
		styleHtmlContent : true,
		scrollable       : "vertical",
		title 			 : "Details",
		tpl				 : "Hello, {firstName}"
	}
});