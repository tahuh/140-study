var http = require('http');
var fs = require('fs');

var app = http.createServer( (req, res) => {
	var _url = req.url;
	if(_url == '/'){
		_url = "/index.html";
	}
	if(_url == '/favicon.ico'){
		return res.writeHead(404);
	}
	res.writeHead(200);
	res.end(fs.readFileSync(__dirname + _url));
});

app.listen(3000);
