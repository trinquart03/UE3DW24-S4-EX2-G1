'use strict';

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.query = "";
	$scope.searchAction = function(){
		$location.path("/search/movie?query=" + $scope.query);
	};
  });
