angular.module('karmaMeter')
    .directive('ngDeedList', function (Data, Timer) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/dir-deedlist.html',
            link: function(scope, elem, attrs) {
                scope.data = Data;

                if (attrs.list == "good") {
                    scope.list = Data.deeds.good;
                    scope.good = true;
                } else {
                    scope.list = Data.deeds.bad;
                    scope.good = false;
                }
                scope.active = Timer.active;

                scope.toggleTimer = function(id) {
                    if (scope.active.data.id && scope.active.data.id === id) {
                        Timer.stop(id);
                    } else {
                        if (scope.active.data.id) {
                        }
                        Timer.stop();
                        Timer.start(id);
                    }
                };
            }
        };
    })