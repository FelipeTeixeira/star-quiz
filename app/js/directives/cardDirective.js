(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .directive('card', function () {

            var ddo = {};

            ddo.restrict = "E";

            ddo.scope = {
                image: '@',
                isAnswered: '&',
                openAnswer: '&',
                openDetails: '&'
            };

            ddo.templateUrl = '../view/directives/card.html';

            return ddo;
        });

})();
