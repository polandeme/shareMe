define(function() {
	return function($scope, UrlService, UnitsService) {
		
		$scope.test = UrlService.test();
		$scope.title = UrlService.title;
		UnitsService.hide();
	}
})