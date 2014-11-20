define(function() {
	return function($scope, UrlService, UnitsService) {
		
		$scope.getUrl= UrlService.getUrl();
		$scope.urlData = UrlService.urlData;
        $scope.addUrl = UrlService.addUrl();
		UnitsService.hide();
		$scope.voteUp = UrlService.voteUp;
	}
})
