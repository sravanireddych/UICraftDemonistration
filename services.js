weatherApp.service("cityService", ["$resource","$q","$http",function($resource, $q, $http){
    //this.city = "New York, NY";
  this.getWeather = function(city){
        var url = "http://maps.googleapis.com/maps/api/geocode/json?address="+city+"&sensor=false";
        var weatherUrl = "https://api.forecast.io/forecast/0751ba0037d9718ace0c13524bc84877/";
      
        return $http.get(url)
            .then(function(result){
            console.log(result);
            return $http.jsonp(weatherUrl+result.data.results[0].geometry.location.lat+","+result.data.results[0].geometry.location.lng+"?callback=JSON_CALLBACK"); 
        });

    }
}]);
