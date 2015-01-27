var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I am awesome.' });
});

router.get('/home', function(req,res,next){
			//var fText = [];

	fs.readdir('/Users/webeck/Desktop/pcs_work/wbSSG/public/projects', function(err,files) {		
	var fText = [];
		files.forEach(function(value, index) {console.log(files.length,index);
			if (index <= 1){
				fs.readFile('/Users/webeck/Desktop/pcs_work/wbSSG/public/projects/'+value, function(err, data){
				fText.push(data.toString());
				console.log(fText);
				});
			} else if (index === 2){
				console.log('ELSE: ',fText);
			}
			
		});
		res.render('home', { title: 'These projects are awesome', files: fText});

	});
});

module.exports = router;