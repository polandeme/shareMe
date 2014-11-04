
module.exports = function (app) {
	app.post('/', function(req, res) {

		console.log(req.body.test);
		res.send(req.body.test);
		console.log(req.hostname + req.path);
		
	});
	app.get('/video', function(req, res) {
		
		console.log(req.hostname + req.path);
	});
};