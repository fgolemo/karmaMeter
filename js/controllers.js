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
        $scope.newGoodDeed = Data.newGoodDeed;
        $scope.add = function() {
            Data.addDeed();
            $state.go("tab.good");
        };
    })

    .controller('BadAddCtrl', function ($scope, Data, $state) {
        $scope.newBadDeed = Data.newBadDeed;
        $scope.add = function() {
            Data.addDeed();
            $state.go("tab.bad");
        };
    })

    .controller('BadCtrl', function ($scope) {
    });
