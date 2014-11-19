// var test = require('../models/common/comm_db');
var bodyParser = require('body-parser');
var m_url = require('../models/m_url');
var get_title = require('../models/get_title');
var Q = require('q');
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
    var urlData = {
        url: req.url,
        time: new Date().getTime(),  
        ip: _ip,
        title: 'title',
        tags: 'tsed',
        status: 2
    }
    	var title = new get_title();

    	title.u2t().then(function(data) {
    		var m_u = new m_url();
            res.send(_ip + data);
    	});
        
	});
};
