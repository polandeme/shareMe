define([
	'angular',
	'units/UnitsService'
	], function (angular, UnitsService) {
		var UnitsModule = angular.module('shareMe.UnitsModule', []);

			UnitsModule.factory('UnitsService', [UnitsService]);
			// UnitsModule.controller('UnitsController', [''])
		return UnitsModule;
	})