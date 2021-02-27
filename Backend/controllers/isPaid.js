var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.isPaid=function(req,res){
	
	connection.query("select title,price,is_paid from course_info where is_paid = ? ",[req.body.isPaid],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}