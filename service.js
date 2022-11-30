'user strict'

// var applicationServices = angular.model('applicationServices',[
//     'ui.router'
// ]);

  webApp.factory('api',function($http, $q){
         return{
             getDrink: getDrink
          };
          function getDrink(){
             var defered = $q.defer();
             var promise= defered.promise;
              $http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').success(function(data){
                 defered.resolve(data.drinks);

              })
              .error(function(err){
                 defered.reject(err);
              });
              return promise;
          }

  });
 webApp.factory('api_callback',function($http){ 
    
    var url= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
    return{
                    getdrink: getdrink
        };
       function getdrink(){
        return $http.get(url).success(function(data){
            console.log(data.drinks)
           
           //return data
        })
        .error(function(err){
            console.log(err);
        })
        
      }
   return callback

 })

webApp.factory('saludoService',function(){
    var saludoSvc={};

    saludoSvc.getFecha = function(){
        var meses =['Enero','Febrero','Marzo','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nomviembre', 'Diciembre'];
        var fecha = new Date();

        var mes= fecha.getMonth();

        return 'Hoy es ' + fecha.getDate() + ' de ' + meses[mes] + ' del ' + fecha.getFullYear();
    }
    saludoSvc.getHora = function(){
        return new Date().toDateString();
    }
    return saludoSvc;
})
webApp.factory('ComputadorService',function($http){
    return {
        getComputer: function(callbackWhenComputersAreBrought){
            $http({
                method: 'GET',
                url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
            }).then(function(data){
                callbackWhenComputersAreBrought(data.data.drinks);
            })
        },
        addComputer:function(computerToAdd,callbackWhenComputersAreBrought){
           console.log(computerToAdd)
           $http.post('callbackWhenComputersAreBrought/create',JSON.stringify(computerToAdd)).then(function(data){
            callbackWhenComputersAreBrought(data.data.drinks)
                    })
        },
        updateComputer: function(computerUpdate, callbackWhenIsUpdateInBackend) {
            console.log(computerUpdate)
            $http.put('',JSON.stringify(computerUpdate)).then(function(data){
                callbackWhenIsUpdateInBackend(data.data)
            })
        },
        deleteComputer: function (computerId, callbackWhenIsDeletedInBackend) {
            console.log("CARD ID ",computerId)
                $http.delete(``,
                {
                    'Access-Control-Allow-Origin': '*',
                }
                ).then(function(response){
                callbackWhenIsDeletedInBackend(response.data)
            })
        }
    
    }


})
webApp.service('fileUpload',function($http){
    this.uploadFileToUrl=function(file, uploadUrl){
        var fd = new FormData();
        console.log(fd)
        fd.append('file',file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers:{'Content-Type':undefined}
        })
        .success(function(){

        })
        .error(function(){
            
        })
    }
})