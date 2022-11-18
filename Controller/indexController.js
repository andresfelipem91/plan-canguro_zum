webApp.controller('indexController',function($scope, api){
    $scope.drinkss= api.getDrink();
    
}
);