app.controller('mainController', function($scope) {
  $scope.greeting = "Hello-World!";

  $scope.calculate = function () {
      mealPrice = $scope.mealPrice;
      taxRate = $scope.taxRate;
      tipRate = $scope.tipRate;

      $scope.subTotal = mealPrice + (mealPrice*taxRate);
      $scope.tip = mealPrice*tipRate;


      $scope.grandTotal = $scope.subTotal + $scope.tip;

      $scope.mealCount ++;
      // var total = $scope.totalTips + $scope.tip;
      $scope.totalTips = (+$scope.totalTips + +$scope.tip);


      $scope.averageTip = (+$scope.totalTips/+$scope.mealCount);

      $scope.mealPrice = "";
      $scope.taxRate = "";
      $scope.tipRate = "";


  };

  $scope.clear = function () {
    $scope.subTotal = "";
    $scope.tip = "";
    $scope.grandTotal= "";
  };

  $scope.reset = function () {
    $scope.subTotal = "";
    $scope.tip = "";
    $scope.grandTotal= "";
    $scope.totalTips = "";
    $scope.mealCount = "";
    $scope.averageTip = "";
  };

      $scope.totalTips = "";
      $scope.mealCount = "";
      $scope.averageTip = "";




});
