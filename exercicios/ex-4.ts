interface Cientista {
    "id" : Number
    "name": String
    "bio" : String
};


const lista : Array<Cientista> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
     {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];


const listarTabela = () : void => {
    const tbody = document.getElementById("tbody") as HTMLTableElement
    tbody.innerHTML = '' // feito para não duplicar os itens da tabela
    // cria as linhas e colunas
    lista.forEach((objeto : Cientista) => {
        const tr = tbody.insertRow() as HTMLTableRowElement;
        const tdId = tr.insertCell() as HTMLTableCellElement;
        const tdNome = tr.insertCell() as HTMLTableCellElement;
        const tdBio = tr.insertCell() as HTMLTableCellElement;
        const tdAcao = tr.insertCell() as HTMLTableCellElement;
        // Adiciona conteúdo as colunas
        tdId.innerHTML = objeto.id;
        tdNome.innerHTML = objeto.name;
        tdBio.innerHTML = objeto.bio;
        tdAcao.innerHTML = `<a href="#0" onclick="deletaItem(${objeto.id})">Excluir<a/>`; // #0 fazcom que se mantenha na mesma página
    })
}


const alterarDados = () : void => {
    // pega os elementos do input, trata-os  e chama a modificaDados
    const inputId = document.getElementById("identificador") as HTMLInputElement;
    const valorId = +inputId.value; // + utilzado para converter para number
    const inputNome = document.getElementById("nome") as HTMLInputElement;
    const valorNome = inputNome.value;
    const inputBio = document.getElementById("bio") as HTMLInputElement;
    const valorBio = inputBio.value;
    modificaDados(valorId, valorNome, valorBio);
    listarTabela(); // lista a tabela atualizada novamente
}


const modificaDados = (identificador : Number, nome : String, bio : String): void => {
    const indice = lista.findIndex((objeto : Cientista) => objeto.id === identificador);
    if(indice !== -1) {
        lista[indice].name = nome;
        lista[indice].bio = bio;
    }
}


const deletaItem = (identificador : Number) : void => {
    const indice = lista.findIndex((objeto : Cientista) => objeto.id === identificador);
    if(indice !== -1) {
        lista.splice(indice, 1);
        listarTabela();
    } 
}


// chamada a função listarTabela toda vez que a pagina for carregada
window.onload = function () {
    listarTabela();
}
