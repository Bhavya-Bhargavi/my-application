angular.module("books", ["login", "register","home", "components.filter","products"]);

angular.module("books")
    .config(function (){
     console.log("I am the main module");
});
   