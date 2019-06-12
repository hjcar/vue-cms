var http =  require('http')

var fs =  require('fs');

var server= http.createServer();

server.on('request',function(req,res){
	fs.readFile('./lunbo.json','utf-8',function(err,data){
		console.log(111);
		 res.setHeader("Content-type","text/html;charset=utf8");
		  res.setHeader("Access-Control-Allow-Origin","*");
		res.end(data);
	})
})


server.listen('3001',function(){
		console.log("启动")
})