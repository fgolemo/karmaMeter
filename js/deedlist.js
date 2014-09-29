angular.module('karmaMeter')
    .directive('ngDeedList', function (Data, Timer) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/dir-deedlist.html',
            link: function(scope, elem, attrs) {
                scope.data = Data;
                scope.list = attrs.list;
                if (attrs.list == "good") {
                    scope.list = Data.deeds.good;
                } else {
                    scope.list = Data.deeds.bad;
                }
                scope.toggleTimer = function(id) {
                    var active = Timer.getActive();
                    if (active.id && active.id === id) {
                        Timer.stop(id);
                    } else {
                        Timer.stop();
                        Timer.start(id);
                    }
                    // get data object
                    // change icon color
                    // change button
                };
            }
        };
    })