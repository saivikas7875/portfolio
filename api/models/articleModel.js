var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var articleModel = new Schema({
	id: {
		type: Number
	},
	name: {
		type: String
	}
});

module.exports = mongoose.model('Article', articleModel);