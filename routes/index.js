// var test = require('../models/common/comm_db');
var bodyParser = require('body-parser');
var m_url = require('../models/m_url');
module.exports = function (app) {
	app.post('/', function(req, res) {
		res.send(req.body.test);
		
	});
	app.post('/video', function(req, res) {
		var _ip = req.headers['x-forwarded-for'] || 
			     req.connection.remoteAddress || 
			     req.socket.remoteAddress ||
			     req.connection.socket.remoteAddress;
        // data
    var data = {
        url: req.url,
        time: new Date().getTime(),  
        ip: _ip,
        title: get_title()
    }
        var m_u = new m_url();
            res.send(ip + m_u.add() + req.body.url);
	});
};
