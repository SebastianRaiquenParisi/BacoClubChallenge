let app = angular.module('main', ['ngRoute']);
console.log("matheo es un genio y lo amo");
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/welcome");
    $stateProvider.state("/welcome", {
        url: "/welcome",
        templateUrl: "assets\html\welcome.html"
        
    })

});

app.controller('homeCntrl', function($scope){

});