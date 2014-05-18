'use strict';

angular.module('[gtfo]App')
  .controller('MainCtrl', function ($scope, $http, $timeout, RuterService) {
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

    var UpdateDepartures = function(id){
      var dataRequest = RuterService.GetAllDeparturesByStopId(id);
      dataRequest.success(function(data){
        data = _.where(data,{DeparturePlatformName: "2"});
        var travels = _.map(data, CreateTravelModel);
        $scope.travels = travels;
        console.log("Departures Updated");
      });

    };

    var Clock = function(){
      $scope.clock = nbMoment(new Date()).zone('+0200').format('HH:mm:ss');
      console.log("Clock Updated");
    };
    UpdateDepartures(lambertseterStopId);
    setInterval(Clock(),3000);
  });
