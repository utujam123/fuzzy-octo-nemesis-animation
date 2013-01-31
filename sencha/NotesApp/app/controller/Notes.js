Ext.define("NotesApp.controller.Notes", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            //we're going to lookup our views by xtype
            notesListContainer: "noteslistcontainer",
            noteEditor        : "noteeditor"
        },
        control: {
            notesListContainer  : {
                //the commands fired by the notes list container.
                newNoteCommand  : "onNewNoteCommand",
                editNoteCommand : "onEditNoteCommand"
            },
            noteEditor          : {
                //the commands fired by the note editor.
                backButtonTap     : "onBackButtonCommand",
                saveNoteCommand   : "onSaveNoteCommand",
                deleteNoteCommand : "onDeleteNoteCommand"
            }
        }
    },
    //transitons
    slideLeftTransition:  { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    //helper
    getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    activateNoteEditor : function(record){
        var noteEditor = this.getNoteEditor();
        noteEditor.setRecord(record);//load() is deprecated,
        Ext.Viewport.animateActiveItem(noteEditor,this.slideLeftTransition);
    },
    activateNotesList: function (){
        Ext.Viewport.animateActiveItem(this.getNotesListContainer(),this.slideRightTransition);
    },

    onBackButtonCommand : function(){
        console.log("onBackButtonCommand");
        this.activateNotesList();
    },

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

    onSaveNoteCommand: function() {
        console.log("onSaveNoteCommand");
        var noteEditor  = this.getNoteEditor();
        var currentNote = noteEditor.getRecord();
        var newValues   = noteEditor.getValues();

        currentNote.set("title",newValues.title);
        currentNote.set("narrative",newValues.narrative);

        var errors      = currentNote.validate();
        if(!errors.isValid()){
            Ext.Msg.alert("Wait",errors.getByField("title")[0].getMessage(),Ext.emptyFn)
            currentNote.reject();
            return;
        }

        var notesStore  = Ext.getStore("Notes");
        if(null == notesStore.findRecord("id",currentNote.data.id))
        {
            notesStore.add(currentNote);
        }
        notesStore.sync();
        notesStore.sort([{property : "dateCreated",direction : "DESC"}]);
        this.activateNotesList();
    },

    onEditNoteCommand: function (list, record) {
        console.log("onEditNoteCommand");
        this.activateNoteEditor(record);
    },

    onDeleteNoteCommand: function(){
        console.log("onDeleteNoteCommand");
        
        var noteEditor  = this.getNoteEditor();
        var currentNote = noteEditor.getRecord();
        var notesStore  = Ext.getStore("Notes");

        notesStore.remove(currentNote);
        notesStore.sync();
        this.activateNotesList();
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