
require.config({
    
    paths: {
        angular: './lib/angular',
        uiRouter: './lib/angular-ui-router',
        jQuery: './lib/jquery-2.1.1'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'uiRouter' : {
            'deps': ['angular'],
            'exports': 'uiRouter'
        },
    },
    priority: [
        "angular"
    ]
});

require( [
    'angular',
    'app', //自己定义的模块
    'jQuery',
    'uiRouter',
    'routes'], function( angular, app, $) {
    'use strict';
    var start  = function(){
        angular.bootstrap(document, [app['name']]);
    }
    start();
});
