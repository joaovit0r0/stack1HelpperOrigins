// Criar uma função que retorne a quantidade de vogais da palavra passada.
//  a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
//  b) Dar um exemplo de uso com uma palavra recebida via input no formulário.


const contaVogais = (palavra: string): Number => {
    // converte para minusculo e quebra em uma lista para utilizar filter
    const arrayPalavra : Array<string> = palavra.toLowerCase().split('').filter((caractere: string): Boolean => {
        return 'aeiou'.includes(caractere);
    })
    return arrayPalavra.length;
}

console.log(contaVogais('cheiadevogaus'))


const ativa = (): void => {
    const valorInput = document.getElementById("usuario") as HTMLInputElement;
    const inputTratado : string = valorInput.value;
    alert(contaVogais(inputTratado));
}
