define(['angular',
        'url/UrlModule'
  ], function (ng) {
      'use strict';
      return ng.module('shareMe',[
        'ui.router',
        'shareMe.UrlModule'
        ]);
  });
