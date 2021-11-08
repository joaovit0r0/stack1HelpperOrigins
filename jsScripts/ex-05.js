// 5 - Criar uma classe que retorne a quantidade de vogais da palavra passada.
//   a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
//   b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
var Palavra = /** @class */ (function () {
    // método(s)
    function Palavra(nome) {
        var _this = this;
        this.contaVogais = function () {
            // converte para minusculo e quebra em um array para utilizar filter
            var arrayVogais = _this._nome.toLowerCase().split('').filter(function (caractere) {
                // se o caractere passado for a, e, i, o OU u retorna true
                return 'aeiou'.includes(caractere);
            });
            return arrayVogais.length;
        };
        this._nome = nome;
    }
    return Palavra;
}());
var palavra = new Palavra("Joao");
console.log(palavra.contaVogais());
var ativa = function () {
    var novaPalavra = new Palavra(document.getElementById("usuario").value);
    alert(novaPalavra.contaVogais());
};
