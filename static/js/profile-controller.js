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
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['getDataFromAPI', '$scope', '$routeParams', '$http'];


  function ProfileController(getDataFromAPI, $scope, $routeParams, $http) {

    $scope.profileData = {};
    $scope.profileRepoData = [];

    activate()

    function activate() {
      getDataFromAPI.loadProfile($routeParams.username, function(data){
        $scope.profileData = data;
      });
      getDataFromAPI.loadUserRepoistory($routeParams.username, function(data) {
        $scope.profileRepoData = data;
      })
    }


  }


})();
