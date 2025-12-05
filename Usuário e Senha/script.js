// ENUNCIADO:
    // Vamos criar um sistema de login simples (crie um arquivo index.html com a estrutura basica).
    // 1. Crie um array de objetos com 3 usuários já cadastrados.
    //    Cada objeto deve ter:
    //       - nome
    //       - senha
    // 2. Pergunte ao usuário (com prompt):
    //       - Nome de usuário
    //       - Senha
    // 3. Verifique se existe algum usuário no array com esses dados.
    //       - Se existir, mostre "Bem-vindo, [nome]!"
    //       - Se não existir, mostre "Usuário ou senha incorretos."
    // 4. Exiba o resultado na tela.
    // EXEMPLO:
    // Usuários cadastrados: (joao,1234), (maria,abcd), (ana,senha)
    // Entrada: nome = joao, senha = 1234
    // Saída: "Bem-vindo, joao!"
    // Entrada: nome = jose, senha = 0000
    // Saída: "Usuário ou senha incorretos."
    
//////////////////SOLUCAO////////////////////

const usuarios = [
    {nome: "Joao", senha: 12345},  // indice 0
    {nome: "Carla", senha: 98745}, // indice 1
    {nome: "Jose", senha: 54321}   // indice 2
];
const nomeUsuario = prompt('Digite o nome de usuario');
const senhaUsuario = Number(prompt('Digite a senha do usuario'));
let mensagem = "Usuário ou senha incorretos."; 
// PASSAMOS A UTILIZAR INDICE AO INVES DE CONTADOR.
for(let indice = 0; indice < usuarios.length; indice++){
    if(usuarios[indice].nome === nomeUsuario && usuarios[indice].senha === senhaUsuario){
        mensagem = `Bem vindo(a), ${usuarios[indice].nome}!`;
    }
}
document.body.innerHTML += `<h2 class="msg">${mensagem}</h2>`;