angular.module('karmaMeter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.karma', {
                url: '/karma',
                views: {
                    'tab-karma': {
                        templateUrl: 'templates/tab-karma.html',
                        controller: 'KarmaCtrl'
                    }
                }
            })

            .state('tab.good', {
                url: '/good',
                views: {
                    'tab-good': {
                        templateUrl: 'templates/tab-good.html',
                        controller: 'GoodCtrl'
                    }
                }
            })
            .state('tab.good-add', {
                url: '/good/add',
                views: {
                    'tab-good': {
                        templateUrl: 'templates/tab-good-add.html',
                        controller: 'GoodAddCtrl'
                    }
                }
            })
            .state('tab.good-detail', {
                url: '/good/:deedId',
                views: {
                    'tab-good': {
                        templateUrl: 'templates/tab-good-detail.html',
                        controller: 'GoodDetailCtrl'
                    }
                }
            })

            .state('tab.bad', {
                url: '/bad',
                views: {
                    'tab-bad': {
                        templateUrl: 'templates/tab-bad.html',
                        controller: 'BadCtrl'
                    }
                }
            })
            .state('tab.bad-add', {
                url: '/bad/add',
                views: {
                    'tab-bad': {
                        templateUrl: 'templates/tab-bad-add.html',
                        controller: 'BadAddCtrl'
                    }
                }
            })

        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/karma');
    });

