(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .controller('CharactersCtrl', CharactersCtrl);

    function CharactersCtrl(charactersService, ModalService, $interval) {
        let vm = this,
            answerArray = [],
            interval;

        vm.timeLeft = 120;

        function _timer() {
            interval = $interval(function () {
                vm.timeLeft--;
                if (vm.timeLeft == 0) {
                    _openModalFinish();
                    $interval.cancel(interval);
                }
            }, 1000);
        }

        function _loadingClose() {
            vm.loading = false;
        }

        function _loadingShow() {
            vm.loading = true;
        }

        function _loadCharacters(urlPage) {
            _loadingShow();

            charactersService.loadCharacters(urlPage).then(function (result) {
                _loadingClose();
                vm.results = result;

                // first access
                if (urlPage == null) {
                    _timer();
                }
            });
        }

        function _openModalFinish() {
            ModalService.showModal({
                templateUrl: '../view/modal/finishModal.html',
                controller: "FinishModalCtrl",
                controllerAs: "finishModalCtrl",
                inputs: {
                    answerArray: answerArray
                }
            });
        }

        vm.isAnswered = function (name) {
            let show = true;

            if (answerArray.length > 0) {

                answerArray.forEach(function (element) {
                    if(show) {
                        show = element.originalName.toLowerCase() !== name.toLowerCase();
                    }
                });
            }

            return show;
        }

        // PAGINATION
        vm.next = function () {
            _loadCharacters(vm.results.next);
        };

        vm.previous = function () {
            _loadCharacters(vm.results.previous);
        };

        // OPEN MODALS
        vm.openModalDetails = function (character) {
            character.usedHelp = true;

            ModalService.showModal({
                templateUrl: '../view/modal/detailsModal.html',
                controller: "DetailsModalCtrl",
                controllerAs: "detailsModalCtrl",
                inputs: {
                    character: character
                }
            });
        }

        vm.openModalAnswer = function (character) {
            ModalService.showModal({
                templateUrl: '../view/modal/answerModal.html',
                controller: "AnswerModalCtrl",
                controllerAs: "answerModalCtrl",
                inputs: {
                    character: character,
                    answerArray: answerArray
                }
            });
        }

        _loadCharacters();
    };

    CharactersCtrl.$inject = ['charactersService', 'ModalService', '$interval'];
})();
