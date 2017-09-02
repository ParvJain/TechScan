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
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$routeParams'];


  function MainController($scope) {

    $scope.technologies = [{
      "name" : "Javascript",
      "slug" : "javascript",
      "image": "static/images/javascript.png"
    },
    {
      "name" : "Java",
      "slug" : "java",
      "image": "static/images/java.png"
    },
    {
      "name" : "Python",
      "slug" : "python",
      "image": "static/images/python.png"
    },
    {
      "name" : "PHP",
      "slug" : "php",
      "image": "static/images/php.png"
    },
    {
      "name" : "Ruby",
      "slug" : "ruby",
      "image": "static/images/ruby.png"
    }];

  }


})();
