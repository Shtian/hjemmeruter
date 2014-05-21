angular.module('directives', [])
    .directive('arrival', function() {
      return{
        restrict: 'AE',
        transclude: false,
        scope: {
          arrivaldata: "="
        },
        template: '<div class ="aimed-arrival-time">Avgang om {{arrivaldata.timeToAimed}} ({{arrivaldata.aimedArrival}})</div>' +
            '<div class="expected-time">({{arrivaldata.expectedArrival}}) </div>'
      }
});