(function(){
  var app = angular.module('ArkhamHelper',[]);

  app.controller('Encounter', function($scope){
      $scope.locale = null;

      $scope.encounter = null;

      $scope.locations = locations;
      $scope.getEncounter = function(loc){
        $scope.locale = loc;
        var location = eval(loc);
        var enc = Math.floor(Math.random() * (location.length));
        $scope.encounter = location[enc];
      }
  });
})();
