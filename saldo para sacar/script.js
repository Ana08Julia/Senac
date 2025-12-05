// Criem uma página HTML simples que: 
    // Pergunte o Nome do Cliente
    // Peça o Saldo inicial da conta
    // Pergunte o valor que deseja sacar 
    
    // Faça uma verificação 
        // Se o saque for maior que o saldo da conta
            // Exibe uma mensagem de saldo insuficiente e o valor disponível na conta
        // Caso contrário, subtraia o valor do saque do valor do saldo
            // Exibe uma mensagem de saque realizado e o valor atual disponível após o saque

//////////////////////////////////////////////////////////////

// Exemplo de impressão:
    // Cliente: Nome Cliente
    // Saldo incial: R$500
    // Saque: R$200
    // Novo Saldo: R$300

/////////////////SOLUCAO////////////////////
const nomeCliente = prompt('Digite o seu nome:');
const saldoInicial = Number(prompt('Digite o saldo inicial da conta.'));
const valorSaque = Number(prompt('Digite o valor que deseja sacar.'));

let mensagem = "";
let saldoFinal = saldoInicial;

if(valorSaque > saldoInicial){
    mensagem = `Saldo Insuficiente! Você tem apenas R$${saldoInicial.toFixed(2)}`;
} else {
    saldoFinal = saldoInicial - valorSaque;
    mensagem = `Saque realizado com Sucesso!! Seu novo saldo é: R$${saldoFinal.toFixed(2)}`;
}

document.body.innerHTML = `<h2>Resumo da Operação</h2>Cliente: ${nomeCliente}<br>Saldo Inicial: R$${saldoInicial.toFixed(2)}<br>Saque: R$${valorSaque.toFixed(2)}<br>${mensagem}`;
