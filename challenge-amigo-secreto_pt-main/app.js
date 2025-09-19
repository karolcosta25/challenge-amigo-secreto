
let amigos =  [];

let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "" || !isNaN(nome)) {
        alert("Por favor, insira um nome.");
        return;
    }   

    amigos.push(nome);
    atualizarLista();
    input.value = "";

}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    (lista.innerHTML = "");
      amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("A Lista de amigos está vazia");
        return;
    }

if (amigos.length <= 2) {
    alert("É necessário ter mais de 2 amigos para realizar o sorteio.");
    return;
}   

    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceSorteado];

    sorteados.push(amigoSorteado);

const resultado = document.getElementById("resultado");
resultado.innerHTML = "O amigo secreto sorteado é: " + sorteados;

sorteados = [];
atualizarLista();

}
