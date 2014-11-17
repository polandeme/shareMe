define(function() {
	var UrlService = function() {
		var o = {
			title: [
			{name: 'title1'},
			{name: 'title2'},
			{name: 'title1'},
			{name: 'title1'},
			{name: 'title1'},
			{name: 'title1'},
			],
			test: function() {
				// $('.navgation ul').fadeOut(400);
				console.log('test UrlService');
			}
		}
		return o;
	}
	return UrlService;
})