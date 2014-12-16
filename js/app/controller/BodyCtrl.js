(function(){
    
    var app = angular.module('controllers.body', ['services.product']);
    app.controller('BodyCtrl', ['$scope', 'ProductService', function($scope, ProductService) {
        
        ProductService.GetAll().then(function(d) {
            $scope.Products = d;
        });
        
    }]);
    
})();