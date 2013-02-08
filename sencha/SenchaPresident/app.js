Ext.application({
    name   : 'SenchaPresident',
    controllers : ["Main"],
    views       : ["Main"],
    stores      : ["PresidentStore"],
    models      : ["PresidentModel"],

    launch : function (){
        var mainPanel = {
            xtype : "mainpanel"
        };

        Ext.Viewport.add([mainPanel]);
    }
});