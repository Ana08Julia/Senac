const biblioteca = [];
const form = document.querySelector('#form-livro');
const lista = document.querySelector('#lista');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const titulo = form.querySelector('#titulo').value;
    const autor = form.querySelector('#autor').value;
    const ano = form.querySelector('#ano').value;

    const livro = { titulo, autor, ano }
    biblioteca.push(livro);

    mostrarLivros();
    form.reset();
});
function criaTag(){
    const span = document.createElement('span');
    return span;
}
function mostrarLivros(){
    lista.innerHTML = '';
    for(let i = 0; i < biblioteca.length; i++){
        const livro = biblioteca[i];
        const card = document.createElement('div');
        card.classList.add('card');
        const span = criaTag();
        if(livro.ano < 2000){ 
            card.classList.add('classico');
            span.classList.add('tag-classica');
        } 
        else { 
            card.classList.add('moderno');
            span.classList.add('tag-moderna');
        }
        card.innerHTML = `
            <div>
                <h3>Título: ${livro.titulo}</h3><hr>                
                <p>Autor: ${livro.autor}</p>
            </div>
            <p>Ano de Publicação:<span>${livro.ano}</span></p>`;
        lista.appendChild(card);
        card.appendChild(span);
    }
}