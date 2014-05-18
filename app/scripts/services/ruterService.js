angular.module('services', [])
  .service('RuterService', function($http){
      var baseUrl = "http://reis.ruter.no/ReisRest/RealTime/";
      var appendCallback = "?callback=JSON_CALLBACK";
      this.GetAllDeparturesByStopId = function(stopId){
        var url = baseUrl + "GetAllDepartures/" + stopId + appendCallback;
        return $http.jsonp(url);
      };
    });