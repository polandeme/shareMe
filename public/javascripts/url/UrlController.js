define(function() {
	return function($scope, UrlService, UnitsService) {
		
		$scope.getUrl= UrlService.getUrl();
		$scope.urlData = UrlService.urlData;
        UrlService.addUrl();
		UnitsService.hide();
	}
})
