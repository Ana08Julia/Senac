// Criem uma página HTML(index.html) simples que: 
    // Pergunte ao Usuário
        // O nome do produto
        // O preço do produto
        // O tipo de cliente (Comum, Estudante, Assinante) 
        // 'Você é cliente: Comum, Estudante ou Assinante?'
    // Faça uma verificação (condição if, else)
        // Se o cliente for assinante - Aplica 20% de desconto
        // Se for cliente estudante - Aplica 10% de desconto
        // Se for cliente comum - Não aplica desconto
    // Exibe na tela(imprime dentro do HTML)
        // Nome do produto
        // Tipo de cliente
        // Preço original
        // Valor do desconto aplicado
        // Preço com desconto

//////////////////////////////////////////////////////////////

// Exemplo de impressão:
    // Produto: Camiseta
    // Cliente: Estudante
    // Preço Original: R$100.00
    // Desconto aplicado: R$10.00
    // Preço final: R$90.00


/////////////////SOLUCAO/////////////////

const nomeProduto = prompt('Digite o nome do produto:');
const precoProduto = Number(prompt('Digite o valor do produto:'));
const tipoCliente = prompt('Você é cliente: Comum, Estudante ou Assinante?');

let desconto = "";

if (tipoCliente.toLowerCase() === "assinante"){ 
    desconto = 0.20;
} else if (tipoCliente.toLowerCase() === "estudante"){
    desconto = 0.10;
} else {
    desconto = 0;
}

const valorDesconto = precoProduto * desconto;
const valorFinal = precoProduto - valorDesconto;

document.body.innerHTML += `<b>Produto:</b> ${nomeProduto}<br>
    <b>Cliente:</b> ${tipoCliente}<br>
    <b>Preço Original:</b> ${precoProduto.toFixed(2)}<br>
    <b>Desconto aplicado:</b> ${valorDesconto.toFixed(2)}<br>
    <b>Preço final:</b> ${valorFinal.toFixed(2)}`;