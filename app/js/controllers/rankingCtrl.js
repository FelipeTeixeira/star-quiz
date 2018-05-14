(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .controller('RankingCtrl', RankingCtrl);

    function RankingCtrl() {
        let vm = this;

        vm.scoreListStorage = JSON.parse(localStorage.getItem('scoreList'));
    };

})();
