
  (function(){
    //drinksController.$inject = [$scope, "api"];
     webApp.controller('drinksController',function($scope,api){
     api.getDrink().then(function(data){
      //console.log(data)
       $scope.drinkss=data;
       $scope.aleatorio=function(){
          $scope.drinksss=$scope.drinkss[Math.floor(Math.random()* $scope.drinkss.length)];
          console.log($scope.drinksss.idDrink)
          }
     })
        
        // $http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').then(function(response){
        //   $scope.drinkss = response.data.drinks;

        //});
      //  
    //}
    });
  }) () 
  console.log('hola')
