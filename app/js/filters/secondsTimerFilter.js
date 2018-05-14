(function () {
    'use strict';

    angular
        .module('starQuiz-app')
        .filter('secondsTimerFilter', secondsTimerFilter);

        function secondsTimerFilter() {
            return function (seconds) {
                return new Date(1970, 0, 1).setSeconds(seconds);
            };
        }
})();

