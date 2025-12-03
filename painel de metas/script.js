
// Selecionando elementos
const form = document.getElementById('form-metas');
const listaMetas = document.getElementById('lista-metas');
const erro = document.querySelector('.erro');

// Função para criar uma meta na lista
function criarMeta(nome, descricao, prioridade, data) {
    const li = document.createElement('li');

    // Adiciona classe de prioridade (baixa, media, alta)
    li.classList.add(prioridade.toLowerCase());

    li.innerHTML = `
        <p><strong>Nome:</strong>${nome}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><strong>Prioridade:</strong> ${prioridade}</p>
        <p><strong>Data:</strong> ${data}</p>
        <button class="meta-btn btn-concluir">Concluir</button>
        <button class="meta-btn btn-remover">Remover</button>
    `;

    // Botão concluir
    const btnConcluir = li.querySelector('.btn-concluir');
    btnConcluir.addEventListener('click', () => {
        li.classList.toggle('concluida');
    });

    // Botão remover
    const btnRemover = li.querySelector('.btn-remover');
    btnRemover.addEventListener('click', () => {
        li.remove();
    });

    listaMetas.appendChild(li);
}

// Evento de submit do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const prioridade = document.getElementById('prioridade').value;
    const data = document.getElementById('data').value;

    if (!nome || !descricao || !prioridade || !data) {
        erro.textContent = "Preencha todos os campos!";
        return;
    }

    erro.textContent = ""; // limpa erros

    criarMeta(nome, descricao, prioridade, data);

    form.reset();
}); 