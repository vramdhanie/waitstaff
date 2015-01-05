angular.module('waitApp', ['ngMessages'])
  .controller('WaitController', function($scope){
    $scope.price = 0;
    $scope.tax = 0;
    $scope.tip = 0;
    $scope.tipAmount = 0;
    $scope.subtotal = 0;
    $scope.total = 0;
    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    $scope.tipPerMeal = 0;
    
    $scope.calculateTip = function(){
        if($scope.mealForm.$valid){
            $scope.tipAmount = ($scope.tip / 100) * $scope.price;
            $scope.subtotal = (1 + ($scope.tax / 100)) * $scope.price;
            $scope.total = $scope.subtotal + $scope.tipAmount;
            $scope.tipTotal = $scope.tipTotal + $scope.tipAmount;
            $scope.mealCount++;
            $scope.tipPerMeal = $scope.tipTotal/$scope.mealCount;
        }
    }
    
    $scope.reset = function(){
        $scope.price = 0;
        $scope.tax = 0;
        $scope.tip = 0;
        $scope.tipAmount = 0;
        $scope.subtotal = 0;
        $scope.total = 0;
        $scope.tipTotal = 0;
        $scope.mealCount = 0;
        $scope.tipPerMeal = 0;
    }
    
  });
