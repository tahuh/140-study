const http = require('http');
const fs = require('fs');
const url = require('url');
var qs = require('querystring');

function templateHTML(title, data, liText) {
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
				<a href="/create">create</a> <a href="/update?id=${title}">update</a>
				<form action="/delete_process" method="post">
					<input type="hidden" name="id" value="${title}">
					<input type="submit" value="delete">
				</form>
				<h2>${title}</h2>
				<p>
					${data}
				<p>
			</body>
		</html>
		`;
	return template;
}

function templateList(filelist) {
	var liText = '';
	var i = 0;
	for(i = 0; i < filelist.length; i++){
		var prefix = filelist[i].replace(".txt", "");
		if(prefix === "Welcome"){
			continue; // not showing on list
		}
		liText += `<li><a href="/?id=${prefix}">${prefix}</a></li>`
	}
	return liText;
}
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
			var liText = templateList(filelist);
			fs.readFile(`data/${title}.txt`, "utf8", (err, data)=>{
				var template = templateHTML(title, data, liText);
				res.writeHead(200);
				res.end(template);
			});
		});
	} else if (pathname === "/create"){
		// we create new one
		fs.readdir("data", (err, flist) => {
			var liText = templateList(flist);
			title = "WEB - create"
			var body = `
				<form action="/create_process" method="post">
					<p><input type="text" name="title" placeholder="title"></p>
					<p>
						<textarea name="description" placeholder="description"></textarea>
					</p>
					<p>
						<input type="submit">
					</p>
				</form>
			`;	
			res.writeHead(200);
			var template = templateHTML(title, body, liText);
			res.end(template);
		});
	} else if (pathname === "/create_process") {
		var body = '';
		req.on('data', function(data) {
			// information fragment is keep loading
			body += data;
		});
		req.on('end', function(){
			// now the data transfer is done
			var post = qs.parse(body);
			var title = post.title;
			var description = post.description;
			fs.writeFile(`data/${title}.txt`, description, "utf8", (err)=>{
				res.writeHead(302 , {Location:`/?id=${title}`});// redirect
				res.end();
			});
		});
	} else if(pathname === '/update') {
			fs.readdir("data", (error, filelist) =>{
			var liText = templateList(filelist);
			fs.readFile(`data/${title}.txt`, "utf8", (err, data)=>{
				var template = templateHTML(title, 
				`
				<form action="/update_process" method="post">
					<input type="hidden" name="id" value="${title}">
					<p><input type="text" name="title" placeholder="title" value="${title}"></p>
					<p>
						<textarea name="description" placeholder="description">${data}</textarea>
					</p>
					<p>
						<input type="submit">
					</p>
				</form>
				`
				, liText);
				res.writeHead(200);
				res.end(template);
			});
		});
	} else if (pathname === "update_process") {
		var body = '';
		req.on('data', function(data) {
			// information fragment is keep loading
			body += data;
		});
		req.on('end', function(){
			// now the data transfer is done
			var post = qs.parse(body);
			var title = post.title;
			var id = post.id;
			var description = post.description;
			fs.rename(`data/${id}.txt`, `data/${title}` ,(err) => {
				fs.writeFile(`data/${title}.txt`, description, "utf8", (err)=>{
					res.writeHead(302 , {Location:`/?id=${title}`});// redirect
					res.end();
				});
			});
		});

	} else if (pathname === "/delete_process") {
		var body = '';
		req.on('data', function(data) {
			// information fragment is keep loading
			body += data;
		});
		req.on('end', function(){
			// now the data transfer is done
			var post = qs.parse(body);
			var id = post.id;
			fs.unlink(`data/${id}.txt`, (err) => {
				res.writeHead(302, {Location:"/?id=Welcome"});
				res.end();
			});
		});

	} else {
		res.writeHead(404);
		res.end("Not found");
	}
});

app.listen(3000);
