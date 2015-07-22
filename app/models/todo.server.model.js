
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TodoSchema = new Schema({
	content : String,
	created : {
		type : Date,
		default : Date.now
	},
	updated : {
		type : Date,
		default : Date.now
	}
});

mongoose.model('Todo', TodoSchema);