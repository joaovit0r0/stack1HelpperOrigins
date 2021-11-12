"use strict";
exports.__esModule = true;
// 5 - Criar uma classe que retorne a quantidade de vogais da palavra passada.
//   a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
//   b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
var word_1 = require("./model-ex-05/word");
var word = new word_1.Word("Joao");
console.log(word.countVowels());
var ativa = function () {
    word.activate();
};
