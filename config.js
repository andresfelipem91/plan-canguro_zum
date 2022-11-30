//'use strict';
var webApp = angular.module('webApp',['ui.router','ui.bootstrap']);

function config($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise('/index');
 $stateProvider
 .state('student',{
    url:"/student",
    templateUrl:"View/student.html",
    controller: "studentController",
    data:
    {
      pageTitle:"student"
    }

 })
 .state('drinks',{
   url:'/drinks',
   templateUrl:'View/drinks.html',
   controller:'drinksController',
   controllerAS:'drinks'
 })
  .state('drinksCallback',{
    url:'/drinksCallback',
    templateUrl:'View/drinks.html',
    controller:'drinksCallbackController',
    controllerAS:'drinksCallback'
 })
 .state('fecha_hora',{
  url:'/fecha_hora',
  templateUrl:'View/fecha_hora.html',
  controller:'timeController'
 })
 .state('computador',{
  url:'/computador',
   templateUrl:'View/computadores.html',
   controller:'ComputadorasController'
  })
//.state('computadores',{
//   url:'/computadores',
//    templateUrl:'View/computadores.html',
//    controller:'dialogController'
//  })

}
webApp.config(config).run(function($rootScope, $state){
   $rootScope.$state= $state;
});
