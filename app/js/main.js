(function () {
    'use strict';

    angular
        .module('starQuiz-app', ['ngRoute', 'angularModalService', 'ui.bootstrap'])
        .config(function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider.when('/', {
                templateUrl: 'view/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'loginCtrl',
            });

            $routeProvider.when('/personagens', {
                templateUrl: 'view/characters.html',
                controller: 'CharactersCtrl',
                controllerAs: 'charactersCtrl',
            });

            $routeProvider.when('/ranking', {
                templateUrl: 'view/ranking.html',
                controller: 'RankingCtrl',
                controllerAs: 'rankingCtrl',
            });

            $routeProvider.otherwise({ redirectTo: '/' });

        });
})();
