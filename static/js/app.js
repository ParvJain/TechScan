/**
 *
 * TechScan
 * @description           Description
 * @author                Parv Jain
 * @url                   www.about.me/parv_jain
 * @date                  September 2017
 * @license               MIT
 *
 */
(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('techScan', [
      'ngRoute',
      'ui.bootstrap'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/technologies', {
        templateUrl: 'static/views/technology.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/repo/:language', {
        templateUrl: 'static/views/repository.html',
        controller: 'RepositoryController',
        controllerAs: 'repositoryctrl'
      })
      .when('/users/:username', {
        templateUrl: 'static/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profilectrl'
      })
      .otherwise({
        redirectTo: '/technologies'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   *
   */
  angular
    .module('techScan')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', '$location'];

  function authInterceptor($rootScope, $q, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('techScan')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();
