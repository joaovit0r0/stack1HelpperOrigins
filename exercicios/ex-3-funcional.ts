// 3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
//  a) O maior valor;
//  b) O menor valor;
//  c) O valor médio.
// Demonstre essa função com o paradigma funcional e imperativo


// verifica se a lista passada é somente de números
const analisaLista = (lista : Array<Number>) : Array<Number> => {
    const listaAux : Array<Number> = lista.filter((elemento) => !isNaN(elemento)) ;
    if(lista.length === listaAux.length) return listaAux;
    else return [-1];
}


const retiraValores = (lista : Array<Number>) : Array<Number> => {
    const listaAux : Array<Number> = analisaLista(lista);
    if(listaAux && listaAux[0] != -1){
        const maiorValor : Number = lista.reduce((valorAnterior, valorAtual) => Math.max(valorAnterior, valorAtual));
        const menorValor : Number = lista.reduce((valorAnterior, valorAtual) => Math.min(valorAnterior, valorAtual));
        const mediaValores : Number = (lista.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual)) / lista.length;
        return [maiorValor, menorValor, mediaValores] ;
    }
    else return [-1];
}
console.log(retiraValores([1, 2, 3, 4, 5]));
console.log(retiraValores(["aaa", 1, 3]));
