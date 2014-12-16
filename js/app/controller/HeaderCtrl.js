(function(){
    
    var app = angular.module('controllers.header', []);
    
    app.controller('HeaderCtrl', ['$scope', function($scope) {
        
        $scope.date = Date.now();
        
    }]);
    
})();