define([
	'angular',
	'url/UrlController',
	'url/UrlService'
	], function(angular, UrlController, UrlService) {
		
		var UrlModule = angular.module('shareMe.UrlModule',['shareMe.UnitsModule']);

			UrlModule.factory('UrlService', ['HttpService',UrlService]);
			UrlModule.controller('UrlController', ['$scope', 'UrlService', 'UnitsService', UrlController]);

		return UrlModule;
	})
