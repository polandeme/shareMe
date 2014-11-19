var db = require('./common/comm_db');

function m_url() {
    this.db = new db();
}

m_url.prototype.add = function (data) {
    var data = {
        // ho_url_id: 1,
        ho_url_add: data.url,
        ho_url_title: 'titletest',
        ho_url_tags: 'sge',
        ho_url_vote_up: 1,
        ho_url_vote_down: 2,
        ho_url_user_id: 10,
        ho_url_date: null,
        ho_url_status: 0
    }
    var connect = this.db.connect();
    connect.query('INSERT INTO ho_url SET ?', data, function(err, res) {
        console.log('insert success');
    });
}
module.exports = m_url;
