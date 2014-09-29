angular.module('karmaMeter')
    .controller('KarmaCtrl', function ($scope, Data) {
        $scope.data = Data;
        $scope.btnTest = function() {
            Data.setKarma(50);
        };
    })

    .controller('GoodCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('GoodDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('BadCtrl', function ($scope) {
    });
