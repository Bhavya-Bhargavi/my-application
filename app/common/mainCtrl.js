angular.module("books")
    .controller("mainCtrl",["$scope", "authenticateSvc", function($scope, authenticateSvc){
    $scope.appName="books";
    $scope.headerTemplate="app/common/header.tpl.html";
    $scope.templateUrl="app/login/login.tpl.html";
    
        $scope.loadPage= function(pageType){
            $scope.security = authenticateSvc.authenticateDetails();
            
                if ($scope.security.isAuthenticated) {

                    if (pageType == 'register') {
                        $scope.templateUrl = "app/register/register.tpl.html"
                    } else if (pageType == 'login') {
                        $scope.templateUrl = "app/login/login.tpl.html";
                    } else if (pageType == "home")
                        $scope.templateUrl = "app/home/home.tpl.html";
                } else {
                    $scope.templateUrl = "app/login/login.tpl.html";
                }
            };
        
       
        
        $scope.$on("user-loggedIn", function(event, args){
            $scope.loadPage("home");
        });
        
        $scope.logout =function(){
            authenticateSvc.logout();
            $scope.loadPage("login");
        }
}]);