Ext.define("SenchaPractice.view.Sample.PresidentDetail",{
	extend : "Ext.Panel",
	xtype  : "presidentdetail",
	requires : ["Ext.Toolbar"],
	alias  : "presidentdetailview",
	config : {
		styleHtmlContent : true,
		scrollable       : "vertical",
		title            : "Details",
		tpl 			 : "Hello {firstName} {lastName}",
		
	}
});