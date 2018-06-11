'use strict';

module.exports = function (app) {

	//Using multer for file upload
	let multer = require('multer');

	/* 
	* Pointing the folder we want to save the files
	* I am using ./src only, because in app.js file, in line 24, we point to node consider the folder src static
	*/
	let upload = multer({dest:'./src/temp'});

	//Route Example
	
	//Getting the page for single upload example
	app.get('/file/',function(req, res) {
	  	res.render('file');
	});

	//Getting the page for multiples upload example
	app.get('/files/',function(req, res) {
	    res.render('multFiles');
	});

	/* 
	* Example with one file upload
	* In this example, inside single() function, we use the name of the name of the element in the html
	* which we are sending the post, in this case, it is called file ( check line 19 of file.dust file )
	*/
	app.post('/file', upload.single('file'),function(req, res) {
	  	res.json(req.file);
	    console.log('Success!');
	});

	//Example with multi file upload
	/* 
	* Using any() function, this make all elements that handle woth file in body tag
	* to be uploaded
	*/
	app.post('/files',upload.any(),function(req, res) {
	  	res.json(req.files);
	    console.log('Success!');
	});

};