	Ext.define('SenchaPractice.view.Home',{
	extend 	 : "Ext.Container",
	alias    : "widget.homeview",
	requires : ["Ext.Toolbar","Ext.Panel","Ext.Img"],
	config   : {
		layout : {
			type : "vbox"
		},
		items  : [
			{
				xtype  : "toolbar",
				title  : "Sencha",
				docked : "top",
				items  : [
				{	
					xtype : "button",
					iconCls : "user",
					iconMask: true,
					ui    : "action",
					itemId: "devButton"
				},
				
				{  	xtype : "spacer"  },
				
				{
					xtype    : "button",
					ui       : "action",
					itemId   : "newButton",
					iconCls  : "compose",
					iconMask : true
				}]
			},
			{
				xtype : "image",
				flex  : 1,
				src   : "http://www.datfeel.com/drupal/sites/default/files/styles/media_gallery_large/public/field/image/RqWNs.png"
			},
			{
				xtype : "panel",
				items : [
					{ xtype : 'button' , text: 'Facebook', margin: 2, padding: 15,ui : "action",itemId  : "facebookButton" },
			        { xtype : 'button' , text: 'Twitter' , margin: 2, padding: 15,ui : "action",itemId  : "twitterButton"  },
			        { xtype : 'button' , text: 'Tumblr'  , margin: 2, padding: 15,ui : "action",itemId  : "tumblrButton"   },
			        { xtype : 'button' , text: 'Sample'  , margin: 2, padding: 15,ui : "action",itemId  : "sampleButton"   }
			   	]
			}
			],
		listeners : [
		{
			delegate : "#newButton",
			event    : "tap",
			fn 		 : "onNewButtonTap"
		},
		{
			delegate : "#devButton",
			event    : "tap",
			fn 		 : "onDevButtonTap"
		},
		{
			delegate : "#facebookButton",
			event    : "tap",
			fn 		 : "onFacebookButtonTap"
		},
		{
			delegate : "#twitterButton",
			event    : "tap",
			fn 		 : "onTwitterButtonTap"
		},
		{
			delegate : "#tumblrButton",
			event    : "tap",
			fn 		 : "onTumblrButtonTap"
		},
		{
			delegate : "#sampleButton",
			event    : "tap",
			fn 		 : "onSampleButtonTap"
		}
		]
	},

	onNewButtonTap : function(){
		console.log("newComposeCommand");
		this.fireEvent("newComposeCommand",this);
	},
	onDevButtonTap : function(){
		console.log("viewDevCommand");
		this.fireEvent("viewDevCommand",this);
	},
	onFacebookButtonTap : function(){
		console.log("viewFacebookCommand");
		this.fireEvent("viewFacebookCommand",this);
	},
	onTwitterButtonTap : function(){
		console.log("viewTwitterCommand");
		this.fireEvent("viewTwitterCommand",this);
	},
	onTumblrButtonTap : function(){
		console.log("viewTumblrCommand");
		this.fireEvent("viewTumblrCommand",this);
	},
	onSampleButtonTap : function(){
		console.log("viewSampleCommand");
		this.fireEvent("viewSampleCommand",this);
	}

});