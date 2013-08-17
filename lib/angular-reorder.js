(function(){
  angular.module('reorder', [])
    .directive('reorder', ['$parse', function($parse){
      return {
        restrict: 'A',
        link: function(scope, el, args) {
          var options = $parse(args.reorder)();
          
          el.addClass('reorder')
            .on('dragdrop', function(e){
              console.log('Order changed', e);
            })
            .reorder(options);
        }
      };
    }]);
})();