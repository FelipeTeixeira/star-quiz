(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .controller('AnswerModalCtrl', AnswerModalCtrl);

    function AnswerModalCtrl(close, character, answerArray) {
        let vm = this;

        vm.closeModal = function () {
            close();
        };

        vm.answer = function () {
            let answerInput = vm.inputName.toLowerCase(),
                originalName = character.character.name.toLowerCase(),
                scoreAnswer = 10;

            if (answerInput !== originalName) {
                scoreAnswer = 0;
            } else if (answerInput === originalName && character.usedHelp) {
                scoreAnswer = 5;
            }

            if (scoreAnswer === 10 || scoreAnswer === 5) {
                let answer = {
                    score: scoreAnswer,
                    originalName: originalName
                }

                answerArray.push(answer);
                close();
            }
        }
    };

    AnswerModalCtrl.$inject = ['close', 'character', 'answerArray'];
})();
