Ext.define("SenchaPractice.view.Sample.Sample",{
	extend   : "Ext.navigation.View",
	alias    : "widget.sampleview",
	xtype    : "sampleviewlist",
	requires : ["SenchaPractice.view.Sample.PresidentDetail","SenchaPractice.view.Sample.PresidentList"],
	
	config : {
		items :[
		{
			xtype : 'presidentlist'
		}
		]
	}	
});