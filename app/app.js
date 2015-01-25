var cubeApp = angular.module('cubeApp', ['ui.router']);

cubeApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('root', {
    url: '/',
    views: {
      root: {
        controller: 'RootController',
        templateUrl: 'home/root.template.html'
      }
    },
  });

  $urlRouterProvider.otherwise('/');
}]);
