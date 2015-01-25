cubeApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('root', {});

  $urlRouterProvider.otherwise('/');
}]);
