Ext.define("SenchaPractice.controller.Home",{
	extend  : "Ext.app.Controller",
	config  : {
			refs 	: {
				homeView 	 		: "homeview",
				devView      		: "devview",
				facebookView 		: "facebookview",
				twitterView  		: "twitterview",
				sampleView    		: "sampleview",
				presidentListView   : "presidentlistview"

			},
			control : {
				homeView 		: {
					//this are the commands fired from view/Home
					newComposeCommand   : "onNewComposeCommand",
					viewDevCommand      : "onViewDevCommand",
					viewFacebookCommand : "onViewFacebookCommand",
					viewTwitterCommand  : "onViewTwitterCommand",
					viewSampleCommand   : "onViewSampleCommand",
				},
				devView 		: {
					//this are the commands fired from view/Deview
					backCommand         : "onBackCommand",
				},
				facebookView    : {
					//this are the commands fired from the view/Facebook
					backCommand 		: "onBackCommand"
				},
				twitterView     : {
					//this are the commands fired from the view/Twitter
					backCommand  		: "onBackCommand"
				},
				presidentListView: {
					disclose 			  : "showPresidentDetail"
				}
			}
	},

	

	//transitons
    slideLeftTransition :  { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    
    //showPresidentDetailow president detail
    showPresidentDetail : function(list,record){
    	this.getSampleView().push({
    		xtype : "presidentdetail",
    		title : record.fullName(),
    		data  : record.data
    	});
		
	 },

	//slide page
    activateDevView : function(){
    	Ext.Viewport.animateActiveItem(this.getDevView(),this.slideRightTransition);
    },

    activateHomeView : function(){
    	Ext.Viewport.animateActiveItem(this.getHomeView(),this.slideLeftTransition);
    },
    
    activateFacebookView : function(){
    	Ext.Viewport.animateActiveItem(this.getFacebookView(),this.slideRightTransition);
    },

     activateTwitterView : function(){
    	Ext.Viewport.animateActiveItem(this.getTwitterView(),this.slideRightTransition);
    },

     activateSampleView : function(){
    	Ext.Viewport.animateActiveItem(this.getSampleView(),this.slideRightTransition);
    },
    
	onNewComposeCommand : function(){
		console.log("onNewComposeCommand");
	},
	onViewDevCommand   : function(){
		console.log("onViewDevCommand");
		this.activateDevView();
	},
	onViewFacebookCommand : function(){
		console.log("onViewFacebookCommand");
		this.activateFacebookView();
	},
	onViewTwitterCommand : function(){
		console.log("onViewTwitterCommand");
		this.activateTwitterView();
	},
	onViewSampleCommand : function(){
		console.log("onViewSampleCommand");
		this.activateSampleView();
	},
	onBackCommand 	   : function(){
		console.log("onBackCommand");
		this.activateHomeView();
	},
	launch: function () {
		this.callParent(arguments);
		console.log("launch");
	},
	init  : function () {
		this.callParent();
		console.log("init");
	}
});