/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
(function() {

  angular
    .module('techScan')
    .controller('RepositoryController', RepositoryController);

  RepositoryController.$inject = ['getDataFromAPI', '$scope', '$routeParams', '$http'];


  function RepositoryController(getDataFromAPI, $scope, $routeParams, $http) {

    $scope.repoData = null;
    $scope.currentPage = 1;

    activate()

    function activate() {
      getDataFromAPI.loadRepository($routeParams.language, function(data){
        $scope.repoData = data;
      });
    }



  }


})();
