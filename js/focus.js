angular.module('karmaMeter')
    .directive('ngFocus', function (Data) {
        return {
            restrict: 'A',
            scope: {
                trigger: '@focus'
            },
            link: function (scope, element) {
                scope.$watch('trigger', function (value) {
                    console.log("focused");
                    if (value === "true") {
                        $timeout(function () {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    })