(function () {
    'use strict';
    angular.module('app.mapaprod')
    .config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/',{ templateUrl: 'app/views/landing.html', controller: 'landingCtrl'})
			.when('/fichas',{ templateUrl: 'app/views/fichas.html', controller: 'landingCtrl'})
			.when('/select',{ templateUrl: 'app/views/select.html', controller: 'landingCtrl'})
			.otherwise({ redirectTo: '/404'});
	}]);
})();