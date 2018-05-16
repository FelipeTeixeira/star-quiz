
(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .controller('FinishModalCtrl', FinishModalCtrl);

    function FinishModalCtrl(close, answerArray, $location) {
        let vm = this,
            localStorageList,
            scoreListStorage;
        vm.isOpen = true;
        vm.totalScore = 0;
        vm.scoreList = {};

        answerArray.map(function name(element) {
            vm.totalScore += element.score;
        });

        vm.submit = function () {
            if (vm.form.$valid) {
                scoreListStorage = JSON.parse(localStorage.getItem('scoreList'));

                localStorageList = scoreListStorage ? scoreListStorage : [];

                vm.scoreList.totalScore = vm.totalScore;

                localStorageList.unshift(vm.scoreList);
                localStorage.setItem('scoreList', JSON.stringify(localStorageList));

                vm.scoreList = {};
                $location.path("/");
            }
        };
    };

    FinishModalCtrl.$inject = ['close', 'answerArray', '$location'];
})();
