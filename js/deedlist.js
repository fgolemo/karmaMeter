angular.module('karmaMeter')
    .directive('ngDeedList', function (Data, Timer) {
        var buttonStart = function(id) {
                $("#deed-"+id+" button").removeClass("button-royal").addClass("button-energized");
                $("#deed-"+id+" button i").removeClass("ion-ios7-clock-outline").addClass("ion-loading-b");
            },
            buttonStop = function(id) {
                $("#deed-"+id+" button").removeClass("button-energized").addClass("button-royal");
                $("#deed-"+id+" button i").removeClass("ion-loading-b").addClass("ion-ios7-clock-outline");
            };

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
                        buttonStop(id);
                    } else {
                        if (active.id) {
                            buttonStop(active.id);
                        }
                        Timer.stop();
                        buttonStart(id);
                        Timer.start(id);
                    }
                };
            }
        };
    })