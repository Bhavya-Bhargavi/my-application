angular.module("components.filter")
    .directive("numbersOnly", [function(){
        return{
            restrict : "A",
            link : function(scope, element, attrs){
                var numbersOnly = function(evt){
                    if(!(evt.keyCode >= 48 && evt.keyCode <= 57))
                        evt.preventDefault();
 
                    }
                element.bind("keypress",numbersOnly);
            }
        }
    }]);

