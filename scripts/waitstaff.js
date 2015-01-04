angular.module('waitApp', [])
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
  });
