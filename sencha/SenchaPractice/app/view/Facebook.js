Ext.define("SenchaPractice.view.Facebook",{
	extend   : "Ext.Container",
	alias    : "widget.facebookview",
	requires : ["Ext.TabPanel","Ext.Toolbar"],
	config : {
		fullscreen : true,
		layout : {
			type : "fit"
		},
		items  : [
			{
				xtype         : "toolbar",
				docked        : "top",
				title         : "Facebook",
				items         : [
				{
					xtype   : "spacer"
				},
				{
					xtype   : "button",
					text    : "Back",
					ui      : "action",
					itemId  : "backButton"
				}]
			},
			{
				xtype 		  : "tabpanel",
				tabBarPosition: "bottom",
				defaults 	  : {
					styleHtmlContent : true
				},
				items 		  : [
				{
					title   : "Timeline",
					iconMask: true,
					iconCls : "home",
					html    : "Facebook Timeline"
				},
				{
					title   : "Profile",
					iconMask: true,
					iconCls : "user",
					html    : "Facebook User Profile"
				}
				]
			}
		],
		listeners : [
			{
				delegate : "#backButton",
				event    : "tap",
				fn       : "onBackButtonTap"
			}
		]
	},//end of config brace
	onBackButtonTap : function(){
		console.log("backCommand");
		this.fireEvent("backCommand",this);
	}
});