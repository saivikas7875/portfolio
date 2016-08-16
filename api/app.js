var express = require('express'),
	mongoose = require('mongoose');

var app = express();
var db = mongoose.connect('mongodb://localhost/articlesAPI');


var Article = require('../api/models/articleModel');


var port = process.env.PORT || 3000;

var articleRouter = express.Router();

articleRouter.route('/Article')
	.get(function(request, response){
		Article.find(function(err, articles){
			if (err) {
				response.status(500).send(err);
			} else {
				response.json(articles);
			}
		});
	});

app.use('/api', articleRouter);

app.get('/', function(request, response){
	response.send('What\'s up APi');
});

app.listen(port, function(){
	console.log('Running server on port: ', port);
});