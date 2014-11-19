define(function() {
    var HttpService = function($http, $q) {
        var o = {
            post: function(url, data, config) {
                var defferred = $q.defer();  
                $http.post(url, data, config).
                    success(function(data, status) {
                        defferred.resolve(data);
                    })
                    .error(function(data, status) {
                        defferred.reject(data);
                    });
                    return defferred.promise;
              },
            get: function(url, config) {
                var defferred = $q.defer();
                $http.get(url, config).
                    success(function(data, status) {
                        defferred.resolve(data);
                    })
                    .error(function(data, status) {
                        defferred.reject(data);
                    });
                    return defferred.promise;
             }
        }
        return o;
    }
    return HttpService;
})
