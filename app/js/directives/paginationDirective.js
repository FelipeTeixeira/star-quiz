(function () {
    "use strict";
    angular
        .module("starQuiz-app")
        .directive("pagination", function() {

            var ddo = {};

            ddo.restrict = "E";

            ddo.scope = {
                previous: "&",
                next: "&"
            };

            ddo.templateUrl = "../view/directives/pagination.html";

            return ddo;
        });
})();
