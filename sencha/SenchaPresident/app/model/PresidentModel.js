 Ext.define("SenchaPresident.model.PresidentModel",{
 	extend : "Ext.data.Model",
 	config : {
 		fields : ["firstName","middleInitial","lastName",'imagePic']
 	},

 	fullName : function () {
 		var d = this.data,
 		names = [
 		d.firstName,
 		(!d.middleInitial ? "" : d.middleInitial + "."),
 		d.lastName
 		];
 		return names.join(" ");
 	}
 });