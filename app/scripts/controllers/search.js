'use strict';

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('SearchCtrl', function ($scope, $routeParams) {
    $scope.query = $routeParams.query;
	
	xhrReq.open("GET", "https://api.themoviedb.org/3/search/movie?"+$scope.query+"include_adult=false&page=1&language=en-US&api_key=ededfef13bb883f988610f8f503cb5d9");
  });
