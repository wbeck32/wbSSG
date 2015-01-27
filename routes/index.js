var express = require('express');
var router = express.Router();
var fs = require('fs');
var __dirname = './public/projects/';
var fText = [];
var fileNames = [];
var fileReader = function (index, file) {
	fs.readFile(file, function(err, data){
		fText[index] = data;
		index++;	
		interator(index);
	});
}
var interator = function(index){				
		if (index < fileNames.length) {
			
			fileReader(index,__dirname+fileNames[index]);
		}
		else{
			router.get('/home', function(req,res,next){ 
				res.render('home', { title: 'These projects are awesome', content: fText.join('')});
			});
			
		}
	}

var fileTrawler = function(){
	fs.readdir(__dirname, function(err,files) {		
		fileNames = files;
		if (err){
			throw err;
		} 
		else {
				var index = 0
				fileReader(index, __dirname+fileNames[index]);
		}		

	});
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I am awesome.' });
});
fileTrawler();


module.exports = router;