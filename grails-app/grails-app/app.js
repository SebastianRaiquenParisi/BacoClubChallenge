let app = angular.module('main', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        url:"/welcome",
        templateUrl: "/views/welcome.html",
        
    }).otherwise({
        template: '404'
    })
});

app.controller('homeCntrl', function($scope){

});