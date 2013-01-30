Ext.define("NotesApp.store.Notes",{
	extend : "Ext.data.Store",
	config : {
		model : "NotesApp.model.Note",
		data  : [
			{ title: "Note 1", narrative : "narrative 1" },
			{ title: "Note 2", narrative : "narrative 2" },
			{ title: "Note 3", narrative : "narrative 3" },
			{ title: "Note 4", narrative : "narrative 4" },
			{ title: "Note 5", narrative : "narrative 5" },
			{ title: "Note 6", narrative : "narrative 6" },
			{ title: "Note 7", narrative : "narrative 7" },
			{ title: "Note 8", narrative : "narrative 8" },
			{ title: "Note 9", narrative : "narrative 9" },
			{ title: "Note 10", narrative : "narrative 10" }
		],
		sorters: [{ property : 'dateCreated', direction : 'DESC'}]
	}
});