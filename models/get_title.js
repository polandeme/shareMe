var request = require('request');
var cheerio = require('cheerio');
var Iconv = require('iconv-lite');
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
                 res.setEncoding('binary');
                 var buf = new Buffer(body, 'binary');
                // var iconv = new Iconv('GBK', 'UTF-8');
				// res.setEncoding('utf-8');
                var html = Iconv.decode(buf, 'GBK');
				// var html = iconv.convert(new Buffer(body, 'binary')).toString();
				// var html = iconv.convert(body).toString();
                console.log(html);
				var $ = cheerio.load(html);
				var mesage = $('title').text();
                var charset = $('meta').eq(0);//.characterSet;
				deferred.resolve(mesage);
			}
			
		});
		// console.dir(deferred.promise);
		return deferred.promise;

		// return 'get';
}
module.exports = get_title;
