define(function() {
	var UrlService = function(H) {
		var o = {
            urlData : [], 
			test: function() {
				// $('.navgation ul').fadeOut(400);
				console.log('test UrlService');
			},
            getUrl: function() {
                console.log('test get url');    
                H.get('/getUrl').then(function(data) {
                    console.log(data);
                    for(var i = 0; i < data.length; i++) {
                        o.urlData.push({title: data[i].ho_url_title
                                        ,url: data[i].ho_url_add
                                        ,id: data[i].ho_url_id
                                       });
                        }
                });
            },
            addUrl: function() {
                $('.url-sub').click(function() {
                    H.post('/video', {url: $('.input-text').val() }).then(function(data) {
                        o.urlData.push({title: data});
                        $('.input-text, .url-sub').hide();
                        $('.navgation ul').fadeIn(400);
                    }); 
                })
            },
            voteUp: function(d) {
                console.log(d);
                H.post('/voteUp', {id: d});//.then(function(data) {
                $('#url-vote-up-' + d).css('color', 'red');
                // });
                
            }
		}
		return o;
	}
	return UrlService;
})
