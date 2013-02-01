Ext.application({
    name: "NotesApp",
    
    models 	   : ["Note"],
    stores 	   : ["Notes"],
    controllers: ["Notes"],
    views	   : ["NotesList1","NoteEditor1"],

    launch: function () {
        /*
         the commented lines of code is part of the program in chapter 4,
         i commented it so i have a backup of sample program in the previous chapter
        */

    	/*var notesListContainer = {
    		xtype: "noteslistcontainer"
    	};
        var noteEditor         = {
            xtype: "noteeditor"
        }*/
        var notesListView  = {
            xtype : "noteslist1view"
        };

        var noteEditorView = {
            xtype : "noteeditor1view"
        };

        Ext.Viewport.add([notesListView,noteEditorView]);
    	//Ext.Viewport.add([notesListContainer,noteEditor]);
    }
});

