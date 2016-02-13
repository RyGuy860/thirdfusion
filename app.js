var app = angular.module('app', ['ngRoute']);
   
    app.config(function ($routeProvider, $locationProvider){
        
        $routeProvider
        .when('/', {
             templateUrl: 'pages/home.html',
             controller: 'mainController'        
        })   
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'mainController'
        })
        
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'mainController'
        })
        
        .when('/services', {
            templateUrl: 'pages/services.html',
            controller: 'mainController'
        })
        
        .when('/services/:serviceId', {
            templateUrl: 'pages/services-detail.html',
            controller: 'servicesController'
        })

        .when('/portfolio', {
            templateUrl: 'pages/portfolio.html',
            controller: 'mainController'
        })
        
        .when('/portfolio/:portfolioId', {
            templateUrl: 'pages/portfolio-industry.html',
            controller: 'portfolioController'
        });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
  
});
  app.run(function ($browser) {
    $browser.baseHref = function () { return "/" };
  });

app.controller('mainController',['$scope','$log', function($scope, $log){
    
}]);

app.controller('servicesController',['$scope', '$routeParams', 
    function($scope, $routeParams){
        $scope.serviceId = $routeParams.serviceId;
}]);

app.controller('portfolioController',['$scope', '$routeParams', 
    function($scope, $routeParams){
        $scope.portfolioId = $routeParams.portfolioId;
}]);