Ext.define("SenchaPresident.view.PresidentList",{
	extend : "Ext.List",
	xtype  : "presidentlist",
	alias  : "widget.presidentlistview",
	config : {
		title   : "American Prezident Zup!",
		grouped : true,
		indexBar: true,
		itemTpl : " {firstName} {lastName}", 
		store : "PresidentStore",
		onItemDisclosure : function () {console.log('LOL')}
	}
});