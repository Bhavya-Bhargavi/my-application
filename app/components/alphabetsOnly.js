angular.module("components.filter")
    .directive("alphabetsOnly", [function(){
        return{
            restrict : "A",
            link : function(scope,element,attrs){
                    console.log(scope);
                    console.log(element);
                    console.log(attrs);
                var alphabetsOnly = function(evt){
                    if((evt.keyCode >= 97 && evt.keyCode <= 122) || (evt.keyCode >=65 && evt.keyCode <= 90)){
                        console.log("good")
                    }else{
                        evt.preventDefault();
                    }
                   
                }
                 element.bind("keypress",alphabetsOnly);
            }
        }
    }]);