var app = angular.module("exmples",[]);


app.controller('myCtrl',function($scope){

$scope.add =function(){

$scope.Total =Number($scope.firstNumber || 0) + Number($scope.secondNumber || 0);
}

$scope.subtract =function(){

$scope.Total =Number($scope.firstNumber || 0) - Number($scope.secondNumber || 0);
}

$scope.multiply =function(){

$scope.Total =Number($scope.firstNumber || 0) * Number($scope.secondNumber || 0);
}

});

