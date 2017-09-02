(function() {


  /**
   * factory
   *
   * You can fetch here some data from API and the use them
   * in controller
   *
   */
  angular
    .module('techScan')
    .factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http', 'CONSTANTS'];


  ////////////


  function getDataFromAPI($http, CONSTANTS) {

    var factory = {
      loadRepository: loadRepository,
      loadProfile: loadProfile,
      loadUserRepoistory: loadUserRepoistory
    };

    return factory;

    function loadRepository(name, callback) {
      $http({
      method: 'GET',
      url: CONSTANTS.API_URL + 'search/repositories?q=' + name,
    }).then(function(repositories) {
      callback(repositories.data);
    })
    .catch(function(error) {
      return error;
    });
    }

    function loadProfile(name, callback) {
      $http({
      method: 'GET',
      url: CONSTANTS.API_URL + 'users/' + name,
    }).then(function(profile) {
      callback(profile.data);
    })
    .catch(function(error) {
      return error;
    });
    }
    
    function loadUserRepoistory(name, callback) {
      $http({
      method: 'GET',
      url: CONSTANTS.API_URL + 'users/' + name + '/repos',
    }).then(function(profile) {
      callback(profile.data);
    })
    .catch(function(error) {
      return error;
    });
    }
  }



})();
