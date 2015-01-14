(function(){
  var app = angular.module('ArkhamHelper',[]);

  app.controller('Encounter', function($scope){
      $scope.locale = null;

      $scope.encounter = null;

      $scope.circus = [{
        'title': 'Mirror Maze',
        'body': "Wandering through the Mirror Maze you find yourself laughing at the characiture's of yourself that the mirrors reveal. That is until you realize that some of these images seem to not only be different shapes than normal, but also seem to wear slightly different clothing and bear slightly different scars. As if they were not contorted mirrors but rather other versions of yourself, other possibilities."
      }];

      $scope.locations = [
        {
           'name': 'Silver Moon Lodge',
          'id': 'lodge',
          'street': 'blue'
        },
        {
          'name': 'Inner Sanctum',
          'id': 'sanctum',
          'street': 'blue'
        },
        {
          'name': 'The Traveling Circus',
          'id': 'circus',
          'street': 'fields'
        }];

      $scope.getEncounter = function(loc){
        //event.preventDefault();
        $scope.locale = loc;
        $scope.encounter = $scope.circus[0]; 
      }
  });
})();
