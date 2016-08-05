angular.module("login")
    .controller("loginCtrl",["$rootScope", "$authenticateSvc", function ($rootScope, authenticateSvc ) {
        //didnt inject scope this is called aliasing
                
        this.loginData = {
            userName:"",
            password:""
        };
        this.loginUser = function(){
            authenticateSvc.loginUser(this.loginData)
            .then(function(response){
                var security = response;
                if(security.isAuthenticated){
                $rootscope.$broadcast("user-loggedIn");
            }
                else{
                    this.showInvalidCredentials = true;
                }
    }).catch(function(error, data){
             console.log(error);
         }) ;
                  }        
    }]);