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

  app.controller('Mythos', function($scope){
    $scope.headline = 'No Headline';
    $scope.environment = 'It\'s a clear night';
    $scope.rumor = 'Haven\'t heard anything';

    $scope.getMythos = function() {
      $scope.headline = 'Bizarre creature spotted!';
      $scope.environment = 'Dark and stormy night';
      $scope.rumor = 'I heard a rumor that the dev is actually working on this';
    }
  });
})();
