angular.module("books", ["login", "register","home", "components.filter","products", "cart"]);

angular.module("books")
    .config(function (){
     console.log("I am the main module");
});
   