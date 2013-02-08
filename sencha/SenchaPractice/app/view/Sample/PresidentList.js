Ext.define("SenchaPractice.view.Sample.PresidentList",{
	extend : "Ext.List",
	xtype  : "presidentlist",
	alias  : "widget.presidentlistview",
	
	config : {
			xtype : 'list',
			indexBar : true,
			title    : "American Presidents",
			itemId   : 'presidentListId',
			store    : "PresidentStore",
			onItemDisclosure : function () {console.log('LOL')},
			loadingText 	 : "Loading...",
			emptyText 		 : "<div class=\"notes-list-empty-text\">No data found</div>",
			grouped  	     : true,
			itemTpl          : "{firstName} {lastName}"
	}
});