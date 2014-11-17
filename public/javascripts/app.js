define(['angular',
        './units/UnitsModule',
        './url/UrlModule',
  ], function (ng) {
      'use strict';
      return ng.module('shareMe',[
        'ui.router',
        'shareMe.UnitsModule',
        'shareMe.UrlModule'
        ]);
  });
