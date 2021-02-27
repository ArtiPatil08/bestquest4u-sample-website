var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.price=function(req,res){
	
	connection.query("select title,price from bestquest4u.course_info where price = ? ",[req.body.price],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}