(function () {
    'use strict';

    angular.module('app.mapaprod').
    controller('bySectorCtrl', ['$scope','$location','$http','databaseFactory',
                function($scope,$location,$http,databaseFactory){

    	//INIT code
    	$scope.currentSector = {nodeID:"0", nodeName:"Producción", parentID:"0", depth:"0"};
    	$scope.selectNodeStr = "División";

		databaseFactory.getSectorTree().success(function(response){
			$scope.sectorTree = response;
		});

		$scope.selectSector = function(selectedSector) {

			//Si es un leaf node (no-children) pasa de view, sino, sigue profundizando en el sectorTree
			for (var i = 0; i < $scope.sectorTree.length; i++) {
				if (selectedSector.nodeID == $scope.sectorTree[i].parentID) {
					switch (selectedSector.depth) {
						case '1': 
							$scope.selectNodeStr = "Sector"
						 	break;
						case '2':
							$scope.selectNodeStr = "Rama"
							break;
						case '3':
							$scope.selectNodeStr = "Actividad"
							break;
					}
					return $scope.currentSector = selectedSector;
				}
			}
			$scope.currentSector = {nodeID:'0', nodeName:'Producción', parentID:'0', depth:'0'}; //TODO RESET
			$scope.selectNodeStr = "División"; //TODO
		}

		$scope.getAncestorByDepth = function(depth) {
			for (var i = 0; i < $scope.sectorTree.length; i++) {
				if (selectedSector.nodeID == $scope.sectorTree[i].parentID) {
					return $scope.currentSector = selectedSector;
				}
			}
		}

    }])
})();