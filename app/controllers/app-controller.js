(function () {
    'use strict';

    angular.module('app.mapaprod').
    controller('appCtrl', ['$scope','$location','$http',
                function($scope,$location,$http){

    	//HEADER Se utiliza para esconder el header en la landing
		$scope.currentPath = $location.path();

		//HEADER Esta variable es para parametrizar el texto de titulo
		$scope.headerTitle = "MAPA PRODUCTIVO FEDERAL";

		//Funcion general de navegacion entre views
		$scope.goTo = function(data){
			$location.path('/'+data);
		}

    }])

})();