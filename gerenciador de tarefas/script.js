const tarefas = [];
const form = document.querySelector(`#form-tarefa`);
const lista = document.querySelector(`#lista`);
form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const titulo = document.querySelector(`#titulo`).value;
    const descricao = document.querySelector(`#descricao`).value;
    const prioridade = document.querySelector(`#prioridade`).value;
    const tarefa = { titulo, descricao, prioridade };
    tarefas.push(tarefa);
    mostrarTarefas();
    form.reset();
});
function mostrarTarefas(){
    lista.innerHTML = '';
    for(let indice = 0; indice < tarefas.length; indice++){
        const tarefa = tarefas[indice];
        const card = document.createElement('div');
        card.classList.add('card');
        if(tarefa.prioridade === 'Alta'){
            card.classList.add('alta');
        } else if(tarefa.prioridade === 'Média'){
            card.classList.add('media');
        } else if(tarefa.prioridade === 'Baixa'){
            card.classList.add('baixa');
        }
        card.innerHTML = `
            <div>
                <h3>Título:
                    ${tarefa.titulo}
                </h3>
                <hr>
                <p>Descrição:<br>
                    ${tarefa.descricao}
                </p>
            </div>
            <p>Prioridade:<span>${tarefa.prioridade}</span></p>`;
        lista.appendChild(card);
    }
}