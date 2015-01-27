(function(){


//need jquery, node

var cSide = $.ajax({
	url: 'http://localhost:3000/home'
})
.done(function(data) {
	console.log(data);
	//data.join('')
	$(data).appendTo('#projects');
//	return data;
});
//console.log(cSide);

//create new project div

//for each file in project
//	output contents of html file
//	projDiv += contents
//end foreach

//append projDiv to main 




})();