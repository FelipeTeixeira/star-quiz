(function () {
    "use strict";
    angular
        .module("starQuiz-app")
        .directive("pagination", function() {

            var ddo = {};

            ddo.restrict = "E";

            ddo.scope = {
                previousAction: "&",
                previousStatus: "@",
                nextAction: "&",
                nextStatus: "@"
            };

            ddo.templateUrl = "../view/directives/pagination.html";

            return ddo;
        });
})();
