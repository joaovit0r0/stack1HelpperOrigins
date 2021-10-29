// Criar uma função que retorne a quantidade de vogais da palavra passada.
//  a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
//  b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
var contaVogais = function (palavra) {
    // converte para minusculo e quebra em uma lista para utilizar filter
    var arrayPalavra = palavra.toLowerCase().split('').filter(function (caractere) {
        return 'aeiou'.includes(caractere);
    });
    return arrayPalavra.length;
};
console.log(contaVogais('cheiadevogaus'));
var ativa = function () {
    var valorInput = document.getElementById("usuario");
    var inputTratado = valorInput.value;
    alert(contaVogais(inputTratado));
};
