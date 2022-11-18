webApp.controller("timeController",function($scope, saludoService){
  $scope.fecha= saludoService.getFecha();
  $scope.hora= saludoService.getHora();
});