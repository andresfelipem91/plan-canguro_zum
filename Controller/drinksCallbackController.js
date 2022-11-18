
  (function(){
    //drinksController.$inject = [$scope, "api"];
   webApp.controller('drinksCallbackController',function($scope,api_callback){
    api_callback.getdrink().then(function(data){
        console.log(data.data.drinks);
        $scope.drinkss=data.data.drinks;
    })
   })
  }) () 
  console.log('hola')

