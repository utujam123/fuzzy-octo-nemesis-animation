Ext.application({
    name        : 'SenchaPractice',
    models      : ["PresidentModel"],
    views       : ["Home","Deview","Facebook","Twitter.Twitter","Sample.Sample"],
    controllers : ["Home"],
    stores      : ["PresidentStore"], 
    launch      : function() {
        
        var Home = {
            xtype : "homeview"
        };

        var DevView = {
        	xtype : "devview"
        };

        var Facebook = {
            xtype : "facebookview"
        };

        var Twitter = {
            xtype : "twitterview"
        };
        
        var Sample = {
            xtype : "sampleview"
        };
        Ext.Viewport.add([Home,DevView,Facebook,Twitter,Sample]);
    }
});