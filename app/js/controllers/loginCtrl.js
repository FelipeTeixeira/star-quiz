(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl() {
        let vm = this;

        vm.scoreListStorage = JSON.parse(localStorage.getItem('scoreList'));
    };

})();
