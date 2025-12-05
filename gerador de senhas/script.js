function gerarSenha() { // Declara a funcao gerarSenha que sera executada ao clicar no botao
    var tamanhoSenha = Number(prompt(`Digite o tamanho da senha.`)); // Solicita ao usuario o tamanho da senha que ele quer que seja gerada e transforma em numero
    var incluirNumeros = confirm(`Deseja incluir numeros?`); // Abre uma janela de confirmacao para incluir ou nao numeros na senha
    var incluirMaiusculas = confirm(`Deseja incluir letras Maiusculas?`); // Abre uma janela de confirmacao para incluir ou nao letras maiusculas na senha
    var incluirSimbolos = confirm(`Deseja incluir Simbolos?`); // Abre uma janela de confirmacao para incluir ou nao Simbolos na senha
    var caracteres = "abcdefghijklmnopqrstuvwxyz"; // Conjunto base de caracteres
    if(incluirNumeros === true){ // verifica se o usuario quer numeros
        caracteres = caracteres + "0123456789"; // adiciona numeros ao conjunto de caracteres
    } if(incluirMaiusculas === true){ // verifica se o usuario quer LETRAS MAIUSCULAS
        caracteres = caracteres + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // adiciona LETRAS MAIUSCULAS ao conjunto de caracteres
    } if(incluirSimbolos === true){ // verifica se o usuario quer caracteres especiais
        caracteres = caracteres + "~!@#$%^&*()_=-+<>?:}{][|"; // adiciona simbolos ao conjunto de caracteres
    }
    var senha = ""; // Cria uma string vazia para montar a senha
    var contador = 0; // Inicia o contador de indices em 0
    while(contador < tamanhoSenha){ // Executa enquanto o contador for menor que o tamanho desejado
        var indiceAleatorio = Math.floor(Math.random() * caracteres.length); // Atribui um caractere aletario na variavel indiceAleatorio
        senha = senha + caracteres[indiceAleatorio]; // Concatena o indiceAletorio gerado com a senha 
        contador = contador + 1; // Adiciona um contador +1 para identificar em qual indice a senha esta
    }
    document.getElementById("resultado").innerHTML = `Sua senha foi gerada com sucesso! <br> Sua senha é: ` + senha; // Imprime a senha dentro da div resultado 
}