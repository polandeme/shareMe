define(function() {
	return function($scope, UrlService) {
		
		$scope.test = UrlService.test();
		$scope.title = UrlService.title;
	}
})