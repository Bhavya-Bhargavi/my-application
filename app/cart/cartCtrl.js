angular.module("cart")
    .controller("cartCtrl", ["$scope", "productsSvc", function($scope, productsSvc){
        console.log("i am cart module");
        $scope.cart = productsSvc.getCart();
    }]);