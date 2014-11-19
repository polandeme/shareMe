define(function() {
	var UrlService = function(H) {
		var o = {
			title: [
			{name: 'title1'},
			{name: 'title2'},
			{name: 'title1'},
			{name: 'title1'},
			{name: 'title1'},
			{name: 'title1'},
			],
            urlData : [], 
			test: function() {
				// $('.navgation ul').fadeOut(400);
				console.log('test UrlService');
			},
            getUrl: function() {
                H.get('/getUrl').then(function(data) {
                    for(var i = 0; i < data.length; i++) {
                        o.urlData.push({name: data[i].ho_url_title});
                    }
            });
            },
            addUrl: function() {
                $('.url-sub').click(function() {
                    H.post('/video', {url: $('.input-text').val() }).then(function(data) {
                        o.urlData.push({name: data});
                    }); 
                })
            }
		}
		return o;
	}
	return UrlService;
})
