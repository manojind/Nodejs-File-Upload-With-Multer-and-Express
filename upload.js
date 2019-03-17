var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: './tmp' })
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
res.send("done");

}) 