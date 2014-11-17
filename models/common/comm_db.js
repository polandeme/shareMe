var mysql = require('mysql');

function comm_db() {

}
/**
 * connecte database
 * @todo: 加密
 * @author： polandeme
 * @date： 17 Nov. 2014
 */
comm_db.prototype.connect = function () {
	
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'hoho'
	});

	connection.connect();

}
/**
 */
module.exports = comm_db;