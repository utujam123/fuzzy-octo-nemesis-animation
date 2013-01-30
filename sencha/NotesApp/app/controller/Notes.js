Ext.define("NotesApp.controller.Notes", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            //we're going to lookup our views by xtype
            notesListContainer: "noteslistcontainer",
            noteeditor        : "noteeditor"
        },
        control: {
            notesListContainer: {
                //the commands fired by the notes list container.
                newNotecommand  : "onNewNoteCommand",
                editNoteCommand : "onEditNoteCommand"
            } 
        }
    },
    //commands
    onNewNoteCommand: function() {
        console.log("onNewNoteCommand");
        var now     = new Date();
        var noteId  = (now.getTime()).toString() + (this.getRandomInt(0,100)).toString();
        var newNote = Ext.create("NotesApp.model.Note",{
            id          : noteId,
            dateCreated : now,
            title       : "",
            narrative   : ""
        });
        this.activateNoteEditor(newNote);
    },

    slideLeftTransition: { type: 'slide', direction: 'left' },
    activateNoteEditor : function(record){
        var noteEditor = this.getNoteEditor();
        noteEditor.setRecord(record);//load() is deprecated,
        Ext.Viewport.animateActiveItem(noteEditor,this.slideLeftTransition);

    },
    onEditNoteCommand: function (list, record) {
        console.log("onEditNoteCommand");
    },
    //base class functions
    launch: function () {
        this.callParent(arguments);
        Ext.getStore("Notes").load();
        console.log("launch");
    },
    init: function () {
        this.callParent();
        console.log("init");
    }
});