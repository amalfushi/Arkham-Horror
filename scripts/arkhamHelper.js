(function(){
  var app = angular.module('ArkhamHelper',['ui.unique']);

  app.controller('Encounter', function($scope){
      $scope.locale = null;
      $scope.encounter = null;
      $scope.locations = JSON.parse(localStorage.getItem('locations'));
      $scope.getEncounter = function(loc){
        $scope.locale = loc;
        var location = eval(loc);
        var enc = Math.floor(Math.random() * (location.length));
        $scope.encounter = location[enc];
        $( "#encounterPop" ).popup('open');
      }
  });

  app.controller('Mythos', function($scope){
    $scope.headline = '';
    $scope.environment = '';
    $scope.rumor = '';

    $scope.getMythos = function() {
      $scope.headline = 'Bizarre creature spotted!';
      $scope.environment = 'Dark and stormy night';
      $scope.rumor = 'I heard a rumor that the dev is actually working on this';
    }
  });

  app.controller('AncientOne', function($scope){
    $scope.name;
    $scope.worshippers;
    $scope.power;
    $scope.doomTrack;
    $scope.current=1;
    $scope.max=8;

    $scope.random = function() {
      $.ajax({
        url:'http://localhost:3000/ancients/Cthulu'
      }).
      done(function(result) {
        $scope.name = result.name
      })
    };
  });

  app.controller('Terror', function($scope){
    $scope.current=0;
    $scope.max=10;
    $scope.setTerrorTrack = function(value) {
      $scope.current=value;
      if($scope.current === 5) {
        alert('Close General Store');
      }
    };
  });

  app.controller('Tracker', function($scope){

  });

  app.directive('doomTrack', function () {
    return {
        restrict: 'A',
        template: '<span class="token" ng-repeat="token in tokens" ng-class="token" ng-click="toggle($index)"></span>',
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

  var init = function() {
    var foo = localStorage.getItem('locations');
    if(foo === null) {
      $.ajax({
        url:'http://localhost:3000/locations'
      }).
      done(function(result) {
        localStorage.setItem('locations', JSON.stringify(result));
      })
    }
  };

  init();
})();
