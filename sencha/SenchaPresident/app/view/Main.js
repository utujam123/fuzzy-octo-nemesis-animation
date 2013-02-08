Ext.define("SenchaPresident.view.Main",{
	extend : "Ext.navigation.View",
	xtype  : "mainpanel",
	requires : ["SenchaPresident.view.PresidentList","SenchaPresident.view.PresidentDetail"],
	config : {
		items :[
		{
			xtype : 'presidentlist'
		}
		]
	}	
});