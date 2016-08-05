angular.module("components.filter")
    .filter("priceRange", [function(){
        return function(input, criteria){
            console.log(input);
            console.log(criteria);
        var filteredOutput = [];
        angular.forEach(input, function(item){
        if(item.price <= parseInt(criteria.price)){
            return filteredOutput;
            //this you can write in homectrl as function too
        }
            filteredOutput.push(item);
            })  
        if(criteria.price !=undefined){
            return filteredOutput;
        }else{
            return input;
        }
        };
}]);