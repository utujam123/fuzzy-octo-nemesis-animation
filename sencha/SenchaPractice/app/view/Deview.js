Ext.define("SenchaPractice.view.Deview",{
	extend   : "Ext.Container",
	alias  	 : "widget.devview",
	requires : ["Ext.Toolbar","Ext.TabPanel","Ext.DataView"],
	config 	 : {
		layout : {
			type  : "fit"
		},
		items : [
			{
				xtype  : "toolbar",
				title  : "Developer",
				docked : "top",
				items  : [
					{	xtype : "spacer" },
					{   
						xtype : "button",
						text  : "Back",
						ui    : "action",
						itemId: "backButton"
					}
				]
			},
			{
				xtype      	   : "tabpanel",
				fullscreen 	   : true,
				tabBarPosition : "bottom",
				defaults       : {
					styleHtmlContent : true
				},
				items 		   : [
					{
						title  : 'Home',
			            iconCls: 'home',
			            items  : [
			            {
							xtype : "dataview",
							
						}	
			            ]

			        },
					{
			            title: 'Contact',
			            iconCls: 'user',
			            html: 'Contact Screen'
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

	onBackButtonTap  : function(){
		console.log("backCommand");
		this.fireEvent("backCommand",this);
	}
});