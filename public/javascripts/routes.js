var Share = angular.module('Share', ['ui.router']);


Share.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'views/video.html'  
		});
		 $urlRouterProvider.otherwise('/');
})

