angular.module('karmaMeter')
    .controller('KarmaCtrl', function ($scope, Data) {
        $scope.data = Data;
        $scope.btnTest = function() {
            Data.setKarma(50);
        };
    })

    .controller('GoodCtrl', function ($scope) {
    })

    .controller('GoodDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('GoodAddCtrl', function ($scope, Data, $state) {
        $scope.newDeed = Data.newDeed;
        $scope.add = function() {
            if (Data.addDeed(true)) {
                $state.go("tab.good");
            }
        };
    })

    .controller('BadAddCtrl', function ($scope, Data, $state) {
        $scope.newDeed = Data.newDeed;
        $scope.add = function() {
            if (Data.addDeed(false)) {
                $state.go("tab.bad");
            }
        };
    })

    .controller('BadCtrl', function ($scope) {
    });
