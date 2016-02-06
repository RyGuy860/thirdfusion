var myApp = angular.module('myApp', ['ngRoute']);
   
    myApp.config(function ($routeProvider){
        
        $routeProvider
        .when('/home', {
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
        
        .when('/portfolio', {
            templateUrl: 'pages/portfolio.html',
            controller: 'mainController'
        })
  
});

myApp.controller('mainController',['$scope','$log', function($scope, $log){
    
}]);