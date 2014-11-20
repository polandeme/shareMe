var db = require('./common/comm_db');
var Q = require('q');

function m_url() {
    this.db = new db();
}

m_url.prototype.add = function (urlData) {
    var defferred = Q.defer();
    var data = {
        // ho_url_id: 1,
        ho_url_add: urlData.url,
        ho_url_title: urlData.title,
        ho_url_tags: urlData.tags,
        ho_url_vote_up: 0,
        ho_url_vote_down: 0,
        ho_url_user_id: 10,
        // ho_url_date: urlData.time,
        ho_url_status: urlData.status 
    }

    var connect = this.db.connect();
    (function() {
        connect.query('INSERT INTO ho_url SET ?', data, function(err, res) {
            if(err) {
                defferred.reject();
            } else {
                defferred.resolve();
            }
            console.log('insert success');
        });
    })();
    return defferred.promise; 
};
m_url.prototype.get = function () {
   var connect = this.db.connect(); 
   var defferred = Q.defer();
   (function() {
   connect.query('SELECT * FROM ho_url', function(err,row, fields) {
       if(err) {
           defferred.reject();
       } else {
           defferred.resolve(row);
       }
   })
   })();
    return defferred.promise; 
};

// vote up
m_url.prototype.upVote = function (id) {
  console.log(id);
  var connect = this.db.connect();
  connect.query('UPDATE ho_url SET ho_url_vote_up = ho_url_vote_up + 1 WHERE ho_url_id =' + id + '');
}
module.exports = m_url;
