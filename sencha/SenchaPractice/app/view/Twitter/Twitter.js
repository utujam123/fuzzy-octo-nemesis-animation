Ext.define("SenchaPractice.view.Twitter.Twitter",{
	extend   : "Ext.Container",
	alias    : "widget.twitterview",
	requires : ["Ext.TabPanel","Ext.Toolbar","Ext.DataView"],
	config : {
		fullscreen : true,
		layout : {
			type : "fit"
		},
		items  : [
			{
				xtype         : "toolbar",
				docked        : "top",
				title         : "Twitter",
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
				},
				{
					title   : "Profile",
					iconMask: true,
					iconCls : "user",
					html    : "Twitter User Profile"
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