const http = require('http');
const fs = require('fs');
const url = require('url');

var app = http.createServer( (req, res) => {
	var _url = req.url;
	var queryData = url.parse(_url, true).query;
	var title = queryData.id;
	var pathname = url.parse(_url, true).pathname;
	if(pathname === '/'){
		if(queryData.id === undefined){
			title = "Welcome";
		}
		fs.readdir("data", (error, filelist) =>{
			var liText = '';
			var i = 0;
			for(i = 0; i < filelist.length; i++){
				var prefix = filelist[i].replace(".txt", "");
				if(prefix === "Welcome"){
					continue; // not showing on list
				}
				liText += `<li><a href="/?id=${prefix}">${prefix}</a></li>`
			}
			fs.readFile(`data/${title}.txt`, "utf8", (err, data)=>{
				var template = `
				<!DOCTYPE html>
				<html>
					<head>
						<meta charset="utf-8">
						<title>SimpleWebApp - ${title}</title>
					</head>
					<body>
						<h1><a href="/?id=Welcome">WEB</a><h1>
						<ol>
							${liText}
						</ol>
						<h2>${title}</h2>
						<p>
							${data}
						<p>
					</body>
				</html>
				`;
				res.writeHead(200);
				res.end(template);
			});
		});
	} else {
		res.writeHead(404);
		res.end("Not found");
	}
});

app.listen(3000);
