angular.module('app.mapaprod')
.factory('databaseFactory', ['$http', function($http){ 

    var database ={};

    database.getSectorTree = function(){
        return $http.get('api/getSectorTree.php');
    };

	return database;
}]);