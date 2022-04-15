(function(){
    'use strict'
    angular.module('myFirstApp', [])
    .controller("myFirstController", function($scope){
        $scope.nuevoComentario = {};
        $scope.comentarios=[
            {
                comentario:"Buen tutorial",
                username:"codigofacilito"
            },
            {
                comentario:"Malo el tutorial",
                username:"otro_usuario"
            }
        ]
        $scope.agregarComentario = function(){
            $scope.comentarios.push($scope.nuevoComentario);
        }
    });

})();
