var express = require('express');
var app = express();

var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var defaultPath = path.resolve(__dirname, 'app', 'app.js');

var compiler = webpack(webpackConfig)

var port = 8000;

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true, 
	publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req,res){
	res.sendFile(defaultPath);
})

app.listen(port, function(err){
	if(err){
		console.error
		return
	}
	console.log("Listening on port " + port)
})