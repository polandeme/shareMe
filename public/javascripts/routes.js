define(['./app'], function (app) {
	'use strict';
	return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			//home page
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('url' , {
				url: '/url',
				templateUrl: 'views/url.html'
			})
			.state('video', {
				url: '/video',
				templateUrl: 'views/video.html'
			})
			.state('picture', {
				url: '/picture',
				templateUrl: 'views/picture.html'
			})
			.state('music', {
				url: '/music',
				templateUrl: 'views/music.html'
			});

            $urlRouterProvider.otherwise('/url');

	}]);
})