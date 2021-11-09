// Dado o array: 
// a) Crie uma classe que retorne a bio do id passado
// b) Crie uma classe que retorne o name do id passado
// c) Crie uma classe que apague um item da lista a partir de um id passado
// d) Crie uma classe que altere a bio ou o name a partir de um id passado
// e) Demonstre todos os métodos com o paradigma funcional e com o imperativo


interface IPersonalidades {
    "id" : number;
    "name" : string;
    "bio" : string;
}

const lista : Array<IPersonalidades> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
]

/**
 * Pessoa
 * 
 * Classe responsável por receber uma lista de objetos, retornar e modificar algumas de suas características
 */


class Pessoa {
    constructor ( 
        private _personalidade : Array<IPersonalidades>
    ) {}
    
    /**
     * pegaBio
     * 
     * Método responsável por pegar a bio de um objeto do atributo _personalidade à partir de um identificador passado
     * 
     * @public
     * @param identificador 
     * @returns se o identificador existir, retorna a bio do identificador correspondente, se não retorna uma lista vazia
     */
    public pegaBio = (identificador : number) : string => {
        let bio : string = "Id inválido";
        for(let i = 0; i < this._personalidade.length; i++) {
            if(this._personalidade[i].id === identificador) {
                bio =  this._personalidade[i].bio;
            }
        } 
        return bio; 
    }

    /**
     * pegaNome
     * 
     * Método responsável por pegar o nome de um objeto do atributo _personalidades à partir de um identificador passado
     * 
     * @public
     * @param identificador 
     * @returns se o identificador existir, retorna o nome correspondente ao identificador, se não retorna uma lista vazia 
     */
    public pegaNome = (identificador : number) : string => {
        let nome : string = "Id inválido";
        for(let i = 0; i < this._personalidade.length; i++) {
            if(this._personalidade[i].id === identificador) {
                nome =  this._personalidade[i].name;
            }
        } 
        return nome; 
    }

    /**
     * deletaItem
     * 
     * Método responsável por "deletar" um item do atributo _personalidades à partir de um identificador passado
     * 
     * @public
     * @param identificador 
     * @returns se o identificador existir, retorna _personalidades com o objeto correspondente ao idetentificado deletada, se não retorna uma lista vazia
     */
    public deletaItem = (identificador : number) : Array<IPersonalidades> => {
        // variavel usada para verificar se o identificador buscado existe
        let existe : boolean = false;
        for(let i = 0; i < this._personalidade.length; i++) {
            if(identificador === this._personalidade[i].id) {
                this._personalidade.splice(i, 1);
                existe = true;
            }
        }
        if(existe) return this._personalidade;
        else return [];
    }

    /**
     * modificaNome
     * 
     * Método responsável por "modificar" o nome de um objeto do atributo _personalidade à partir de um identificador
     * 
     * @public
     * @param identificador 
     * @param nome 
     * @returns se o identificador existir, retorna _personalidades com o nome do objeto correspondente ao identificador modificado, se não retorna uma lista vazia
     */
    public modificaNome = (identificador : number, nome : string) : Array<IPersonalidades> => {
         // variavel usada para verificar se o identificador buscado existe
         let existe : boolean = false;
         for(let i = 0; i < this._personalidade.length; i++) {
             if(identificador === this._personalidade[i].id) {
                 this._personalidade[i].name = nome;
                 existe = true;
             }
         }
         if(existe) return this._personalidade;
         else return [];
     }

}

const p1 = new Pessoa(lista);
console.log(p1.pegaNome(1))
console.log(p1.pegaBio(1))
console.log(p1.deletaItem(1))
console.log(p1.modificaNome(2, "Fulano"))
