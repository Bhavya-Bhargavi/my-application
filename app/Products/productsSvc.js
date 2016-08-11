angular.module("products")
    .service("productsSvc", ["$http", "$q", function($http, $q){
        var cartItems =[];
        
        this.getProducts = function(){
            var data = [
                {
                    "imageUrl":"https://img1.junaroad.com/uiproducts/9948883/std_300_0-1456119491.jpg",
                    "description":"Women's dress",
                    "price":"1200",
                    "model":"blue sleeveless",
                    "category":"women"
                },
                {
                    "imageUrl":"https://img0.junaroad.com/uiproducts/1055142/zoom_0-1430321898.jpg",
                    "description":"Women's dress",
                    "price":"2200",
                   "model":"light pink frock",
                   "category":"women"
                },
                {
                    "imageUrl":"http://img0.junaroad.com/uiproducts/1055170/zoom_0-1430321898.jpg",
                   "description":"Women's dress",
                    "price":"1400",
                   "model":"Black Beauty",
                    "category":"women"
                },
                {
                    "imageUrl":"http://img1.junaroad.com/uiproducts/1055159/zoom_0-1430321898.jpg",
                   "description":"Women's dress",
                    "price":"1800",
                    "model":"Red Chilli",
                    "category":"women"
                },
                {
                    "imageUrl":"https://img0.junaroad.com/uiproducts/1213068/zoom_0-1440608461.jpg",
                    "description":"Women's dress",
                   "price":"2500",
                    "model":"Pink Long Frock",
                    "category":"women"
                },
                {
                    "imageUrl":"http://img0.junaroad.com/uiproducts/9726920/zoom_0-1450793693.jpg",
                    "description":"Women's dress",
                    "price":"1200",
                   "model":"Black long frock",
                    "category":"women"
                },
                {
                   'imageUrl':"https://img1.junaroad.com/uiproducts/10598759/zoom_0-1463659177.jpg",
                    'description':"Men's dress",
                   'price':1000,
                    'model':"blue Casual",
                    'category':"men"
                },
                {
                    'imageUrl':"http://img0.junaroad.com/uiproducts/10598720/zoom_0-1463659176.jpg",
                    'description':"men's dress",
                    'price':"3200",
                    "model":"Yellow formal",
                   "category":"men"
                },
                {
                    "imageUrl":"http://img1.junaroad.com/uiproducts/10598837/zoom_0-1463659176.jpg",
                    "description":"men's dress",
                   "price":"4200",
                    "model":"Cotton Jacket",
                    "category":"men"
                },
                {
                    "imageUrl":"http://img1.junaroad.com/uiproducts/10598797/zoom_0-1463659177.jpg",
                    "description":"men's dress",
                   "price":"1600",
                    "model":"T-shirt",
                    "category":"men"
                },
                {
                    "imageUrl":"http://img1.junaroad.com/uiproducts/10903563/zoom_0-1467285063.jpg",
                   "description":"men's dress",
                    "price":"6200",
                   "model":"business wear",
                    "category":"men"
                }];
            return data;
        }
        
        this.getCart = function(){
            return cartItems;
        };
        
        this.addToCart = function(item){
            cartItems.push(item);
        };
        this.getProductsFromApi = function(){
            var dfd = $q.defer();
            $http.get("app/data/products.json")
            .then(function(response){
                dfd.resolve(response.data.products) 
        }).catch(function(response){
                dfd.reject("error");
            });
            return dfd.promise;
        }
        
    }]);