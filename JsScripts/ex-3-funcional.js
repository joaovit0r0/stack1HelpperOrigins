// 3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
//  a) O maior valor;
//  b) O menor valor;
//  c) O valor médio.
// Demonstre essa função com o paradigma funcional e imperativo
var analisaLista = function (lista) {
    var listaAux = lista.filter(function (elemento) { return !isNaN(elemento); });
    if (lista.length === listaAux.length)
        return listaAux;
    else
        return [false];
};
var retiraValores = function (lista) {
    var listaAux = analisaLista(lista);
    if (listaAux && listaAux[0] != false) {
        var maiorValor = lista.reduce(function (valorAnterior, valorAtual) { return Math.max(valorAnterior, valorAtual); });
        var menorValor = lista.reduce(function (valorAnterior, valorAtual) { return Math.min(valorAnterior, valorAtual); });
        var mediaValores = (lista.reduce(function (valorAnterior, valorAtual) { return valorAnterior + valorAtual; })) / lista.length;
        return [maiorValor, menorValor, mediaValores];
    }
    else
        return [];
};
console.log(retiraValores([1, 2, 3, 4, 5]));
console.log(retiraValores(["aaa", 1, 3]));
