// Dado o array:
// a) Crie uma função que retorne a bio do id passado
// b) Crie uma função que retorne o name do id passado
// c) Crie uma função que apague um item da lista a partir de um id passado
// d) Crie uma função que altere a bio ou o name a partir de um id passado
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var verificaIndice = function (identificador) {
    if ((lista.findIndex(function (objeto) { return objeto.id === identificador; })) != -1) {
        return true;
    }
    else {
        return false;
    }
};
// Teste aqui QA
// console.log("Crie uma função que retorne a bio do id passado \n")
// Funcional
var pegaBio = function (identificador) {
    if (verificaIndice(identificador)) {
        var objeto = lista.find(function (objeto) { return objeto.id === identificador; });
        return objeto.bio;
    }
    else {
        return "Id inválido!";
    }
};
// Teste aqui QA
// console.log("Funcional: ",pegaBio(1), "\n")
// Imperativo
var pegaBioImperativo = function (identificador) {
    if (verificaIndice(identificador)) {
        for (var i = 0; i < lista.length; i++) {
            if (lista[i].id === identificador) {
                return lista[i].bio;
            }
        }
    }
    else {
        return "Id inválido!";
    }
};
// Teste aqui QA
// console.log("Imperativo: ", pegaBioImperativo(1))
// console.log("---------------------\n")
// Teste aqui QA
// console.log("Crie uma função que retorne o name do id passado\n")
// Funcional
var pegaNome = function (identificador) {
    if (verificaIndice(identificador)) {
        var objeto = lista.find(function (objeto) { return objeto.id === identificador; });
        return objeto.name;
    }
    else {
        return "Id inválido!";
    }
};
// Teste aqui QA
// console.log("Funcional: ",pegaNome(1), "\n")
// Imperativo
var pegaNomeImperativo = function (identificador) {
    if (verificaIndice(identificador)) {
        for (var i = 0; i < lista.length; i++) {
            if (lista[i].id === identificador) {
                return lista[i].name;
            }
        }
    }
    else {
        return "Id inválido!";
    }
};
// Teste aqui QA
// console.log("Imperativo: ", pegaNomeImperativo(1))
// console.log("---------------------\n")
// Teste aqui QA
console.log("Crie uma função que apague um item da lista a partir de um id passado");
// Funcional
var deletaItem = function (identificador) {
    // indice necessário, por isso a não utilização da verificaInidice
    var indice = lista.findIndex(function (objeto) { return objeto.id === identificador; });
    if (indice !== -1) {
        lista.splice(indice, 1);
    }
    else {
        console.log("Id inválido!");
    }
};
// Teste aqui QA
// deletaItem(1)
// console.log("Funcional:\n", lista)
// Imperativo
var deletaItemImperativo = function (identificador) {
    if (verificaIndice(identificador)) {
        for (var i = 0; i < lista.length; i++) {
            if (identificador === lista[i].id) {
                lista.splice(i, 1);
            }
        }
    }
    else {
        console.log("Id inválido!");
    }
};
// Teste aqui QA
// deletaItemImperativo(4)
// console.log("Imperativo:\n", lista)
// console.log("---------------------\n")
// Teste aqui QA
console.log("Crie uma função que altere a bio ou o name a partir de um id passado");
var modificaNome = function (identificador, nome) {
    // indice necessário, por isso a não utilização da verificaInidice
    var indice = lista.findIndex(function (objeto) { return objeto.id === identificador; });
    if (indice !== -1) {
        lista[indice].name = nome;
    }
    else {
        console.log("Id inválido!");
    }
};
// Teste aqui QA
// modificaNome(2, "TESTANDO")
// console.log("Funcional:\n", lista)
var modificaNomeImperativo = function (identificador, nome) {
    if (verificaIndice(identificador)) {
        for (var i = 0; i < lista.length; i++) {
            if (identificador === lista[i].id) {
                lista[i].name = nome;
            }
        }
    }
    else {
        console.log("Id inválido!");
    }
};
// Teste aqui QA
// modificaNomeImperativo(3, "TESTANDO IMPERATIVO")
// console.log("Imperativo:\n", lista)
