(function(){
  angular.module('reorder', [])
    .directive('reorder', ['$parse', function($parse){
      return {
        restrict: 'EA',
        link: function(scope, el, args, model) {
          var isUpdating = false;
          var options = $parse(args.reorder)();
          var items;
          
          el.addClass('reorder')
            .on('dragdrop', function(e){
              scope.$apply(function() {
                items = el.reorder('getItems');
                scope.order = [];
                items.each(function(){
                  scope.order.push(this);
                });
              });
            })
            .reorder(options);
        }
      };
    }]);
})();