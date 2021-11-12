;
var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var listarTabela = function () {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = ''; // feito para não duplicar os itens da tabela
    // cria as linhas e colunas
    lista.forEach(function (objeto) {
        var tr = tbody.insertRow();
        var tdId = tr.insertCell();
        var tdNome = tr.insertCell();
        var tdBio = tr.insertCell();
        var tdAcao = tr.insertCell();
        // Adiciona conteúdo as colunas
        tdId.innerHTML = objeto.id;
        tdNome.innerHTML = objeto.name;
        tdBio.innerHTML = objeto.bio;
        tdAcao.innerHTML = "<a href=\"#0\" onclick=\"deletaItem(" + objeto.id + ")\">Excluir<a/>"; // #0 fazcom que se mantenha na mesma página
    });
};
var alterarDados = function () {
    // pega os elementos do input, trata-os  e chama a modificaDados
    var inputId = document.getElementById("identificador");
    var valorId = +inputId.value; // + utilzado para converter para number
    var inputNome = document.getElementById("nome");
    var valorNome = inputNome.value;
    var inputBio = document.getElementById("bio");
    var valorBio = inputBio.value;
    modificaDados(valorId, valorNome, valorBio);
    listarTabela(); // lista a tabela atualizada novamente
};
var modificaDados = function (identificador, nome, bio) {
    var indice = lista.findIndex(function (objeto) { return objeto.id === identificador; });
    if (indice !== -1) {
        lista[indice].name = nome;
        lista[indice].bio = bio;
    }
};
var deletaItem = function (identificador) {
    var indice = lista.findIndex(function (objeto) { return objeto.id === identificador; });
    if (indice !== -1) {
        lista.splice(indice, 1);
        listarTabela();
    }
};
// chamada a função listarTabela toda vez que a pagina for carregada
window.onload = function () {
    listarTabela();
};
