// 3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
//  a) O maior valor;
//  b) O menor valor;
//  c) O valor médio.
// Demonstre essa função com o paradigma funcional e imperativo

const analisaLista = (lista : [...]) : [...] => {
    const listaAux = lista.filter((elemento) => !isNaN(elemento)) 
    if(lista.length === listaAux.length) return listaAux
    else return [false]
}


const retiraValores = (lista : [...]) : [...] => {
    const listaAux = analisaLista(lista)
    if(listaAux && listaAux[0] != false){
        const maiorValor = lista.reduce((valorAnterior, valorAtual) => Math.max(valorAnterior, valorAtual))
        const menorValor = lista.reduce((valorAnterior, valorAtual) => Math.min(valorAnterior, valorAtual))
        const mediaValores = (lista.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual)) / lista.length
        return [maiorValor, menorValor, mediaValores] 
    }
    else return []
}
console.log(retiraValores([1, 2, 3, 4, 5]))
console.log(retiraValores(["aaa", 1, 3]))
