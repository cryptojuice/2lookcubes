var cubeApp = angular.module('cubeApp', ['ui.router']);

cubeApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('root', {});

  $urlRouterProvider.otherwise('/');
}]);
