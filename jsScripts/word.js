"use strict";
exports.__esModule = true;
exports.Word = void 0;
/**
 * Word
 *
 * This classe is responsible for receiving a word and implementing some methods for count its vowels
 */
var Word = /** @class */ (function () {
    function Word(_name, wordLength) {
        var _this = this;
        if (wordLength === void 0) { wordLength = 0; }
        this._name = _name;
        this.wordLength = wordLength;
        /**
         * countVowels
         *
         * This method is resposible for counting vowels of a word
         * @returns the number of vowels in a word
         */
        this.countVowels = function () {
            // convert to lower, break as an array to be able to use filter
            _this.wordLength = _this._name.toLowerCase().split('').filter(function (caractere) {
                return 'aeiou'.includes(caractere);
            }).length;
            return _this.wordLength;
        };
        /**
         * activate
         *
         * This method is responsible for getting a word through html form and show how many
         * vowels it has
         */
        this.activate = function () {
            _this._name = (document.getElementById("usuario").value);
            alert(_this.countVowels);
        };
    }
    return Word;
}());
exports.Word = Word;
