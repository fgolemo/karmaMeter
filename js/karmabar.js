angular.module('karmaMeter')
    .directive('ngKarmaBar', function (Data) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/dir-karmabar.html',
            link: function(scope, elem, attrs) {
                scope.data = Data;
            }
        };
    })