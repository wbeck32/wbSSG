var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I am awesome.' });
});

router.get('/home', function(req,res,next){
			//var fText = [];

	fs.readdir('./public/projects/', function(err,files) {		
		var fText = [];
		if (err){
			throw err;
		}
		else{
			files.forEach(function(value, index) {
				if (err){
					throw err;
				}
				else if (index === 2){
					fs.readFile('./public/projects/'+value, function(err, data){
					fText.push(data.toString());
					res.render('home', { title: 'These projects are awesome', content: fText});
					});
				} else if (index < 2){
					
					fs.readFile('./public/projects/'+value, function(err, data){
					fText.push(data.toString());
				});
				
			}
		});
			
		}
	});
});

module.exports = router;