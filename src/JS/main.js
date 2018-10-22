var myApp = angular.module('myApp', ['ngRoute']);
let totalTime = 6000;
let breathInTime = 4000;
let breathOutTime = 16000;

let totalLoop = Math.ceil(totalTime / (breathInTime + breathOutTime));
myApp.config(function ($routeProvider) {
    
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/timerAnimation', {
        templateUrl: 'timerAnimation.html',
        controller: 'secondController'
    })
    
    .when('/timerAnimation/:num', {
        templateUrl: 'timerAnimation.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    this.name = "Main";
}]);



myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    let breathIn = anime({
        targets: 'div.animatedCircle',
        scale: [
            {value: 10, duration: breathInTime},
            {value: 1, duration: breathOutTime}
        ],
        elasticity: 0,
        easing:'linear',
        loop: totalLoop,
        opacity: .9
    });
    $scope.play = function(){
        breathIn.play();
    };
    $scope.pause = function(){
        breathIn.pause();
    };
    $scope.restart = function(){
        breathIn.restart();
    };
    $scope.num = $routeParams.num || 1;
}]);
