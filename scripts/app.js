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

  app.controller('AncientOne', function($scope){
    $scope.name = null;
    $scope.worshippers = null;
    $scope.power = null;
    $scope.doomTrack = null;
    $scope.current=5;
    $scope.max=10;

    $scope.random = function() {
      $scope.name = 'Cthulu';
      $scope.worshippers = 'Unknown';
      $scope.power = 'Unknown';
      $scope.doomTrack = 10; 
    };
  });

  app.directive('doomTrack', function () {
    return {
        restrict: 'A',
        template: '<ul class="token">' +
            '<li ng-repeat="token in tokens" ng-class="token" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            currentValue: '=',
            max: '=',
            onLevelSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateTokens = function () {
                scope.tokens = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.tokens.push({
                        filled: i < scope.currentValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.currentValue = index + 1;
                scope.onLevelSelected({
                    doom: index + 1
                });
            };

            scope.$watch('currentValue', function (oldVal, newVal) {
                if (newVal) {
                    updateTokens();
                }
            });
        }
    }
  });
})();
