// var test = require('../models/common/comm_db');
var m_url = require('../models/m_url');
module.exports = function (app) {
	app.post('/', function(req, res) {

		console.log(req.body.test);
		res.send(req.body.test);
		console.log(req.hostname + req.path);
		
	});
	app.post('/video', function(req, res) {
		var ip = req.headers['x-forwarded-for'] || 
			     req.connection.remoteAddress || 
			     req.socket.remoteAddress ||
			     req.connection.socket.remoteAddress;
			     var m_ = new m_url();
		res.send(ip + m_.add());
		console.log(req.hostname + req.path);
		
	});
};