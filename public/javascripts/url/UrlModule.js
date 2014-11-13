define([
	'angular',
	'url/UrlController',
	'url/UrlService'
	], function(angular, UrlController, UrlService) {
		
		var UrlModule = angular.module('shareMe.UrlModule',[]);

			UrlModule.factory('UrlService', [UrlService]);
			UrlModule.controller('UrlController', ['$scope', 'UrlService', UrlController]);

		return UrlModule;
	})