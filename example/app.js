angular.module('example-app', ['reorder']);

var MainController = function($scope) {
  $scope.order = [];

   $scope.$watch('order', function() {
      console.log('order changed', arguments);
    }, true);
};
