angular.module("home")
    .controller("homeCtrl", ["$scope", "$rootScope","productsSvc", function($scope,$rootScope, productsSvc){
        //$scope.products = productsSvc.getProducts();
          
         $scope.showDescription = function (item) {
                item.showFullDesc = !item.showFullDesc;
            };
        
      $scope.addToCart = function (item) {

                productsSvc.addToCart(item);

                $rootScope.$broadcast("PRODUCT-ADDED", {
                    product: item
                });
            };
        
        productsSvc.getProductsFromApi()
        .then(function(response){
            $scope.products = response;
        }).catch(function(response){
            $scope.error = response;
        });
        
    }]);