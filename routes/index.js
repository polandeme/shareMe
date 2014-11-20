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
    	var title = new get_title();
    	title.u2t(req.body.url).then(function(data) {
            var urlData = {
                url: req.body.url,
                time: new Date().getTime(),  
                ip: _ip,
                title: data,
                tags: 'tsed',
                status: 2
            };
    		var m_u = new m_url();
            m_u.add(urlData);
            res.send(_ip + data);
    	});
	});
    app.get('/getUrl', function(req, res) {
       var m_u = new m_url();
       m_u.get().then(function(data) {
           res.send(data);
       });
    });
};
