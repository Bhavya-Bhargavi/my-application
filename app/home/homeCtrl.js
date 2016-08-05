angular.module("home")
    .controller("homeCtrl", ["$scope", "productsSvc", function($scope, productsSvc){
        //$scope.products = productsSvc.getProducts();
          
        productsSvc.getProductsFromApi()
        .then(function(response){
            $scope.products = response;
        }).catch(function(response){
            $scope.error = response;
        });
        
    }]);