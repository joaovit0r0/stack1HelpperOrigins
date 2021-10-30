// Dado o array:
// a) Crie uma função que retorne a bio do id passado
// b) Crie uma função que retorne o name do id passado
// c) Crie uma função que apague um item da lista a partir de um id passado
// d) Crie uma função que altere a bio ou o name a partir de um id passado
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo

interface Cientista {
    "id" : Number
    "name": String
    "bio" : String
} 

let lista : Array<Cientista> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
     {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
]
const verificaIndice = (identificador : Number) : Boolean => {
    if((lista.findIndex((objeto : Cientista) => objeto.id === identificador)) != -1){
        return true
    }
    else {
        return false
    }
}
// Teste aqui QA
// console.log("Crie uma função que retorne a bio do id passado \n")
// Funcional
const pegaBio = (identificador : Number): String => {   
    if(verificaIndice(identificador)) {
        const objeto : Cientista = lista.find((objeto : Cientista) => objeto.id === identificador)
        return objeto.bio
    }
    else {
        return "Id inválido!"
    }
}
// Teste aqui QA
// console.log("Funcional: ",pegaBio(1), "\n")

// Imperativo
const pegaBioImperativo = (identificador : Number) : String => {
    if(verificaIndice(identificador)) {
        for(let i = 0; i < lista.length; i++) {
            if(lista[i].id === identificador) {
                return lista[i].bio
            }
        }  
    }
    else {
        return "Id inválido!"
    }
}
// Teste aqui QA
// console.log("Imperativo: ", pegaBioImperativo(1))
// console.log("---------------------\n")


// Teste aqui QA
// console.log("Crie uma função que retorne o name do id passado\n")
// Funcional
const pegaNome = (identificador : Number) : String => {
    if(verificaIndice(identificador)) {
        const objeto : Cientista = lista.find((objeto : Cientista) => objeto.id === identificador)
        return objeto.name
    }
    else {
        return "Id inválido!"
    }
}
// Teste aqui QA
// console.log("Funcional: ",pegaNome(1), "\n")

// Imperativo
const pegaNomeImperativo = (identificador : Number): String => {
    if(verificaIndice(identificador)) {
        for(let i = 0; i < lista.length; i++) {
            if(lista[i].id === identificador) {
                return lista[i].name
            }
        }
    }
    else {
        return "Id inválido!"
    }
}
// Teste aqui QA
// console.log("Imperativo: ", pegaNomeImperativo(1))
// console.log("---------------------\n")


// Teste aqui QA
console.log("Crie uma função que apague um item da lista a partir de um id passado")
// Funcional
const deletaItem = (identificador : Number) : void => {
    // indice necessário, por isso a não utilização da verificaInidice
    const indice = lista.findIndex((objeto : Cientista) => objeto.id === identificador)
    if(indice !== -1) {
        lista.splice(indice, 1)
    }
    else {
        console.log("Id inválido!")
    } 
}
// Teste aqui QA
// deletaItem(1)
// console.log("Funcional:\n", lista)


// Imperativo
const deletaItemImperativo = (identificador : Number) : void => {
    if(verificaIndice(identificador)) {
        for(let i = 0; i < lista.length; i++) {
            if(identificador === lista[i].id) {
                lista.splice(i, 1)
            }
        }
    }
    else {
        console.log("Id inválido!")
    }
}
// Teste aqui QA
// deletaItemImperativo(4)
// console.log("Imperativo:\n", lista)
// console.log("---------------------\n")


// Teste aqui QA
console.log("Crie uma função que altere a bio ou o name a partir de um id passado")
const modificaNome = (identificador : Number, nome : String): void => {
    // indice necessário, por isso a não utilização da verificaInidice
    const indice = lista.findIndex((objeto : Cientista) => objeto.id === identificador)
    if(indice !== -1) {
        lista[indice].name = nome
    } 
    else {
        console.log("Id inválido!")
    }
}
// Teste aqui QA
// modificaNome(2, "TESTANDO")
// console.log("Funcional:\n", lista)

const modificaNomeImperativo = (identificador : Number, nome : String) : void => {
    if(verificaIndice(identificador)) {
        for(let i = 0; i < lista.length; i++) {
            if(identificador === lista[i].id) {
                lista[i].name = nome
            }
        }
    }
    else {
        console.log("Id inválido!")
    }
} 
// Teste aqui QA
// modificaNomeImperativo(3, "TESTANDO IMPERATIVO")
// console.log("Imperativo:\n", lista)