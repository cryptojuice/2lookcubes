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
  })
  .state('root.oll', {
    url: 'oll',
    views: {
      oll: {
        controller: 'RootController',
        templateUrl: 'oll_view/oll.template.html'
      }
    },
  })
  .state('root.pll', {
    url: 'pll',
    views: {
      oll: {
        controller: 'RootController',
        templateUrl: 'pll_view/pll.template.html'
      }
    },
  });

  $urlRouterProvider.otherwise('/oll');
}]);
