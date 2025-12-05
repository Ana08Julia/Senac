const frases = [
"Você não precisa ser perfeito, só precisa começar.",
"A coragem aparece quando a preguiça perde o argumento.",
"Cada erro é só uma aula disfarçada de frustração.",
"Seu futuro agradece o que você fizer hoje — mesmo que seja pouco.",
"Dificuldade não é sinal de fracasso, é sinal de tentativa.",
"Você já sobreviveu a dias piores. Esse é só mais um.",
"Enquanto você duvida, alguém com menos talento tá tentando.",
"Amanhã é o prêmio de quem não desistiu hoje.",
"Ninguém acorda motivado todo dia. A diferença é quem levanta mesmo assim.",
"Pare de esperar o momento certo. O momento certo é quando você decide."
];

const botao = document.querySelector('button');
const frase = document.querySelector('#frase');

function gerarFrase(){
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    frase.innerHTML = frases[indiceAleatorio];
};
botao.addEventListener('click', gerarFrase);