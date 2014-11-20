var crypto  = require('crypto');
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
            res.send(data);
    	});
	});
    app.get('/getUrl', function(req, res) {
       var m_u = new m_url();
       m_u.get().then(function(data) {

         var sh1 = crypto.createHash("md5");
         var x, s;
         for(var i = 0; i < data.length; i++) {
            // 加密
            /* x = (data[i].ho_url_id).toString();
                var Signture = crypto.createHmac('sha1', 'SecrectKey').
             update(x).digest().toString('base64');
              data[i].ho_url_id = Signture ;*/
              data[i].ho_url_id = (data[i].ho_url_id + 1994)*17 * 100 -21;
         }
           res.send(data);
       });
    });

    app.post('/voteUp', function(req, res) {
        var m_u = new m_url();
        var id = (req.body.id + 21)/1700 -1994;
        m_u.upVote(id);
        res.end();
    });
};
