weatherApp.controller("homeController",["$scope","$location", "cityService",function($scope,$location, cityService){
    $scope.city = cityService.city;
    $scope.alerts = [];
    $scope.days = [];
    
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    });
    
    $scope.submit = function(){
        cityService.getWeather($scope.city).then(function(result){
            console.log(result);
            $scope.days = result.data.daily.data;
            $scope.alerts = result.data.alerts;
        });
    };
    
}]);

