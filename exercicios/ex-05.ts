// 5 - Criar uma classe que retorne a quantidade de vogais da palavra passada.
//   a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
//   b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
import { Word } from "./model-ex-05/word";

const word = new Word("Joao");
console.log(word.countVowels());

const ativa = () : void => {
    word.activate()
}