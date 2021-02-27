var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.channelTitle=function(req,res){
	
	connection.query("select title,channelTitle,description from bestquest4u.youtube where channelTitle like ? ",['%'+req.body.channelTitle+'%'],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}