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
            .on('dragend', function(e){
              scope.$apply(function() {
                el.find('[draggable]').each(function(index) {
                  scope[args.ngModel][index] = $(this).html();
                });
              });
            })
            .reorder(options);
        }
      };
    }]);
})();