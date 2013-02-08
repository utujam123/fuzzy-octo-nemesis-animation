Ext.define("SenchaPresident.controller.Main",{
	extend : "Ext.app.Controller",
	config : {
		refs    : {
			presidentListView : "presidentlistview",
			mainpanel		  : "mainpanel"
			
		},
		control : {
			presidentListView : {
				disclose : "showDetail"
			}
		}
	},//end of config
	showDetail : function(list, record){
		this.getMainpanel().push({
			xtype : "presidentdetail",
			title : record.fullName(),
			data  : record.data
		});
	}
});