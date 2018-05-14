(function () {
    'use strict';

    angular
        .module('starQuiz-app')
        .filter('splitFilter', splitFilter);

    function splitFilter() {
        return function (input, splitChar, splitIndex) {
            return input.split(splitChar)[splitIndex];
        }
    }
})();

