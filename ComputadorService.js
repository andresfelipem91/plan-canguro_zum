angular.module("computersService", [])
.factory("computersService", ["$http", function ($http) {
    return {
        getComputers: function (callbackWhenComputersAreBrought) {
            $http({
                method: 'GET',
                url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then(function(response){
                callbackWhenComputersAreBrought(response.data)
            }) // aplicar map para soportar compatibilidad por nombre de propiedades diferentes entre frontend y backend
        }
    }
}])

// webApp.factory('ComputadorService',function($http){
//    return{
//       getComputers:function(){
//          return $http({
//             method:'GET',
//             url:"",
//             headers:{

//             }
//          })
//       }
//    }
//    //crear registro
//    this.post= function(Computer){
//       var request=$http({
//          method: 'add',
//          url: "",
//          data: Computer
//       });
//       return request;
//    }
//    //obtener registro indivicual
//    this.get = function(computerId){
//       return $http.get("" + computerId);
//    }
//    //obtener todos los computadoras
//    this.getAllComputer=function(){
//          return $http.get("");
      
//    }
//    //actualizar computadoras
//    this.put=function(computerId,computer){
//       var request=$http({
//          method: 'put',
//          url: "" + computerId,
//          data: computer
//       });
//       return request;
//    }
//    this.delete = function(computerId){
//       var request=$http({
//          method: 'delete',
//          url: "" + computerId
//       });
//       return request;
//    }
// });

