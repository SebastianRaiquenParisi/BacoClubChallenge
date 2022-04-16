(function(){
    'use strict'
    angular.module('Dionisio', [])
    .controller("HomeController", HomeController);
    function HomeController($scope, $filter){
        $scope.name="Seba"
        $scope.upper = function (){
            let upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
            $scope.apply();
        }
    }
})();
