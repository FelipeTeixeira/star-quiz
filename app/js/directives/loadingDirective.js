(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .directive('loading', function () {

            var ddo = {};

            ddo.restrict = "E";

            ddo.templateUrl = '../view/directives/loading.html';

            return ddo;
        });

})();
