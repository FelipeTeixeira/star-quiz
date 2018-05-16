(function () {
    'use strict';

    angular
        .module('starQuiz-app')
        .service('charactersService', charactersService);

        function charactersService($http, $q) {

            var loadCharacters = function (urlPage) {
                let url = urlPage ? urlPage : 'https://swapi.co/api/people';
                let results = {
                    characterArray: [],
                    next: undefined,
                    previous: undefined
                }

                return $http.get(url)
                    .then(function (response) {
                        results.next = response.data.next;
                        results.previous = response.data.previous;

                        response.data.results.forEach(function (data) {
                            let quiz = {
                                quiz: data,
                                usedHelp: false
                            }
                            results.characterArray.push(quiz);
                        });

                        return results;
                    })
                    .catch(function (err) {
                        return $q.reject(err);
                    });
            };

            return {
                loadCharacters: loadCharacters
            };
        }
})();
