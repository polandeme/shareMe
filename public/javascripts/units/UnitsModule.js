define([
	'angular',
	'units/UnitsService',
    'units/HttpService'
	], function (angular, UnitsService, HttpService) {
		var UnitsModule = angular.module('shareMe.UnitsModule', []);

			UnitsModule.factory('UnitsService', [UnitsService]);
			UnitsModule.factory('HttpService', ['$http', '$q', HttpService]);
			// UnitsModule.controller('UnitsController', [''])
		return UnitsModule;
	})
