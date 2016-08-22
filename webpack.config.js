var http = require('http');
var sockjs = require('sockjs');

var echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
echo.on('connection', function(conn) {
    conn.on('data', function(message) {
        conn.write(message);
    });
    conn.on('close', function() {});
});

var server = http.createServer();
echo.installHandlers(server, {prefix:'/echo'});
server.listen(9999, '0.0.0.0');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:5000/',
		"./src/main.js"
	],
	output:{
		path: "./src",
		filename: "bundle.js",
		publicPath: 'http://localhost:5000/'
	},
	devServer:{
		headers: {
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	    },
        inline: true,
        quiet: false,
        noInfo: true,
        stats: { colors: true },
   		contentBase:"./src",
		port:5000
	},
	module:{
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel"
		}]
	}
}