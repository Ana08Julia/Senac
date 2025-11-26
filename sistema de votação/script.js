/*
const select = document.querySelector('#personagem');
const btnVotar = document.querySelector('#btnVotar');
const divErro = document.querySelector('.erro');
const listaRanking = document.querySelector('#lista-ranking');

let votos = {
    Naruto: 0,
    Goku: 0,
    Luffy: 0,
    Sakura: 0
};

function votar() {
    const escolhido = select.value;

    if (escolhido === '') {
        divErro.textContent = 'Selecione um personagem antes de votar!';
        return;
    }

    divErro.textContent = '';

    votos[escolhido] += 1;

    atualizarRanking();
}

atualizarRanking();
rakingLista.innerHTML = " "
const rankingOrganizado = Object.entries(votos).sort((a, b) => b[1] - a[1]);
const maiorVoto = rankingOrganizado[0][1];
rankingOrganizado.forEach(personagem => {
    const li = document.createElement('li');
    li.textContet = `${personagem[0]} - ${personagem[1]} voto(s).`;
    if(personagem[1] === maiorVoto && maiorVoto !== 0) {
        li.classList.add('lider');
    }
    
}) */
const form = document.querySelector('#formulario');
const erro = document.querySelector('#erro');
const personagens = document.querySelector('#personagens');
const ranking = document.querySelector('#ranking');
const botao = document.querySelector(`#btnVotar`);

const votos = {
    "Naruto": 0,
    "Goku": 0,
    "Luffy": 0,
    "Sakura": 0
}
function btnVotar(e) {
    e.preventDefault();

    erro.innerText = ``;
    const votado = personagens.value;

    if (votado === `Selecione`) {
        erro.innerText = 'Escolha um personagem valido!';
        return;
    }

    votos[votado]++;

    atualizarRanking();
}
function atualizarRanking(){
    ranking.innerHTML = "";

    const rankingOrdenado = Object.entries(votos).sort((a, b) => b[1] - a[1]);
    const maiorVoto = rankingOrdenado[0][1];

    rankingOrdenado.forEach(personagem => {
    const li = document.createElement(`li`);
    li.textContent = `${personagem[0]} - ${personagem[1]} votos(s)`;

    if (personagem[1] === maiorVoto && maiorVoto !== 0){
        li.classList.add('lider');
    }

    ranking.appendChild(li);
    });
};
botao.addEventListener("click", btnVotar);

