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
				console.log('test UrlService');
			}
		}
		return o;
	}
	return UrlService;
})