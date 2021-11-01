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
// verifica se o id passado é válido
var verificaIndice = function (identificador) {
    if ((lista.findIndex(function (objeto) { return objeto.id === identificador; })) != -1) {
        return true;
    }
    else {
        return false;
    }
};
var pegaBio = function (identificador) {
    if (verificaIndice(identificador)) {
        var objeto = lista.find(function (objeto) { return objeto.id === identificador; });
        return objeto.bio;
    }
    else {
        return "Id inválido!";
    }
};
console.log(pegaBio(1));
var pegaNome = function (identificador) {
    if (verificaIndice(identificador)) {
        var objeto = lista.find(function (objeto) { return objeto.id === identificador; });
        return objeto.name;
    }
    else {
        return "Id inválido!";
    }
};
console.log(pegaNome(1));
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
deletaItem(1);
console.log(lista);
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
modificaNome(2, "TESTANDO");
console.log(lista);
