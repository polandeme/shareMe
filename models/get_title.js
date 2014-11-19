var request = require('request');
var cheerio = require('cheerio');
var Q = require('q');
function get_title() {

}

get_title.prototype.u2t  = function(url) {
    console.log(url);
		var r_url = /^(((ht|f)tp(s?))\:\/\/)?(www.|[a-zA-Z].)[a-zA-Z0-9\-\.]+\.(com|edu|gov|mil|net|org|biz|info|name|museum|us|ca|uk)(\.cn)?(\:[0-9]+)*(\/($|[a-zA-Z0-9\.\,\;\?\'\\\+&amp;%\$#\=~_\-]+))*$/.test(url); 
		if(r_url) {
			console.log('loag');
		}
		var deferred = Q.defer();
		request.get(url, function(e, res, body) {
			if(e) {
				deferred.reject();
			} else {
				res.setEncoding('utf-8');
				var html = body.toString();
				var $ = cheerio.load(html);
				var mesage = $('title').text();
				deferred.resolve(mesage);
			}
			
		});
		// console.dir(deferred.promise);
		return deferred.promise;

		// return 'get';
}
module.exports = get_title;
