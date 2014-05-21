'use strict';

angular.module('[gtfo]App')
  .controller('MainCtrl', ['$scope', '$http', '$timeout', '$interval', 'RuterService', function ($scope, $http, $timeout, $interval, RuterService) {
    var lambertseterStopId = "3011010";
    var nbMoment = moment;
    nbMoment.lang('nb');

    var CreateTravelModel = function(data){
      return {
        aimedArrival: nbMoment(data.AimedArrivalTime).zone('+0200').format('HH:mm'),
        timeToAimed: nbMoment(data.AimedArrivalTime).zone('+0200').fromNow(true),
        expectedArrival: nbMoment(data.ExpectedArrivalTime).zone('+0200').format('HH:mm'),
        timeToExpected: nbMoment(data.ExpectedArrivalTime).zone('+0200').fromNow(true)
      };
    };

    $interval(function(){
        var dataRequest = RuterService.GetAllDeparturesByStopId("3011010");
        dataRequest.success(function(data){
            data = _.where(data,{DeparturePlatformName: "2"});
            var travels = _.map(data, CreateTravelModel);
            $scope.travels = travels;
            console.log("Departures Updated");
        });
    }, 5000);

    var clockPromise = $interval(function(){
        $scope.clock = nbMoment(new Date()).zone('+0200').format('HH:mm:ss');
        console.log("Clock Updated");
    },800);
  }]);
