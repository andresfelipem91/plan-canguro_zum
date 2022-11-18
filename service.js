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