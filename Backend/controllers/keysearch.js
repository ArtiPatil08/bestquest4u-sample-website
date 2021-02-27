var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.keysearch=function(req,res){
	
	connection.query("select title,is_paid,price,instructor from course_info where title like ? ; ",['%'+req.body.keyword+'%'],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}