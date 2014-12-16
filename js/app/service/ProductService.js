(function(){
    
    var app = angular.module('services.product', []);
    
    app.service('ProductService', ['$http', function($http){
        
        this.GetAll = function() {
            
            var promise = $http.get('/js/app/data/Products.json')
                .then(
                    //success
                    function(response) {
                        return response.data;
                    },
                    //fail
                    function(error) {
                        console.log(error)
                        return [];
                    }
                );
            
            return promise;
            
        };
        
    }]);
    
})();