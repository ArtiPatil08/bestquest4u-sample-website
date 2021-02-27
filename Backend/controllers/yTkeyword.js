var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.yTkeyword=function(req,res){
	
	connection.query("select title,channelTitle,description from youtube where title like ? ",['%'+req.body.yTkeyword+'%'],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}