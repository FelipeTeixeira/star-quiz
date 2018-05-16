(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .directive('modal', function () {

            var ddo = {};

            ddo.restrict = "AE";
            ddo.transclude = true;


            ddo.scope = {
                title: '@'
            };

            ddo.templateUrl = '../view/directives/modal.html';

            return ddo;
        })

})();
