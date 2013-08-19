angular.module('example-app', ['reorder']);

var MainController = function($scope) {
  $scope.itemList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

   $scope.$watch('itemList', function() {
      console.log('order changed', arguments);
    }, true);
};
