define(function() {
	var UrlService = function(H) {
		var o = {
            urlData : [], 
			test: function() {
				// $('.navgation ul').fadeOut(400);
				console.log('test UrlService');
			},
            getUrl: function() {
                H.get('/getUrl').then(function(data) {
                    for(var i = 0; i < data.length; i++) {
                        o.urlData.push({title: data[i].ho_url_title
                                        ,url: data[i].ho_url_add
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
            }
		}
		return o;
	}
	return UrlService;
})
