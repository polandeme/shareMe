var db = require('./common/comm_db');

function m_url() {
	// db.connect();
}

m_url.prototype.add = function () {
	return "insert suc";
	// console.log("insert");
}
module.exports = m_url;