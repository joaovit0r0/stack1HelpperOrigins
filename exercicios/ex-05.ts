// 5 - Criar uma classe que retorne a quantidade de vogais da palavra passada.
//   a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
//   b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

class Palavra{
    
    // atributo(s)
    private nome : string;

    // método(s)

    // setter
    public defineNome = (nome : string) : void => {
        this.nome = nome;
    }

    public contaVogais = () : number => {
        // converte para minusculo e quebra em um array para utilizar filter
        const arrayVogais : Array<string> = this.nome.toLowerCase().split('').filter((caractere : string) =>{
            // se o caractere passado for a, e, i, o OU u retorna true
            return 'aeiou'.includes(caractere);
        })
        return arrayVogais.length;
    }
}

const palavra = new Palavra;
palavra.defineNome("Joao");
console.log(palavra.contaVogais());

const ativa = () : void => {
    const novaPalavra = new Palavra ;
    novaPalavra.defineNome(document.getElementById("usuario").value);
    alert(novaPalavra.contaVogais()) ;
}