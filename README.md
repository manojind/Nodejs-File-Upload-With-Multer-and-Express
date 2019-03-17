# Nodejs-File-Upload-With-Multer-and-Express
When a web client uploads a file to a server, it is generally submitted through a form and encoded as multipart/form-data. Multer is middleware for Express and Node.js that makes it easy to handle this multipart/form-data when your users upload files.   In this tutorial, I'll show you how to use the Multer library to handle different file upload situations in Node.  How Does Multer Work? As I said above, Multer is Express middleware. Middleware is a piece of software that connects different applications or software components. In Express, middleware processes and transforms incoming requests to the server. In our case, Multer acts as a helper when uploading files.


We are using .

1. Express
2. Multer
3. Fs
Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
NOTE: Multer will not process any form which is not multipart (multipart/form-data).




var express = require('express')
var multer  = require('multer')


var upload = multer({ dest: './tmp' })

//{ dest: './tmp' }   Temprary file save path 

 var fs  = require('fs')
 var app = express() 

app.listen(8080);

var storage = multer.diskStorage({
		destination: function (req, file, cb) {
     console.log(file);
     cb(null, 'up/')
   },
   filename: function (req, file, cb) {
	var ext=file.originalname;

var ext=ext.split('.');
ext=ext[ext.length-1];
 cb(null, file.fieldname + '-' + Date.now() + "." + ext )
}
   
}
);
var upload = multer({ storage: storage });
app.post('/upload', upload.single('myFiles'), function (req, res, next) {
res.send("Your uploaded file name : "  +  req.file.originalname );

}) 




