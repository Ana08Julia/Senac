const form = document.querySelector("#form");
const selectPrato = document.querySelector("#prato");
const selectBebida = document.querySelector("#bebida");
const adicionais = document.querySelectorAll(".adicional");

const erro = document.querySelector("#erro");

const resultado = document.querySelector("#resultado");
const rPrato = document.querySelector("#rPrato");
const rBebida = document.querySelector("#rBebida");
const rAdicionais = document.querySelector("#rAdicionais");
const rTotal = document.querySelector("#rTotal");

const btnCalcular = document.querySelector("#btnCalcular");
let btnNovoPedido; 


const precos = {
  prato: { lasanha: 25, Hamburguer: 18, Frango : 22 },
  bebida: { refrigerante: 6, Suco:4, Água : 3 },
  adicionais: { sobremesa: 7, molho: 3, embalagem: 5}};


// -------------------------------
// 3) Função calcular()
// -------------------------------
function calcular() {

    erro.classList.add("esconder");
    erro.textContent = "";

    const pratoTexto = selectPrato.options[selectPrato.selectedIndex].text;
    const bebidaTexto = selectBebida.options[selectBebida.selectedIndex].text;

    // VALIDAR ESCOLHAS
    if (selectPrato.value === "") {
        erro.textContent = "Selecione um prato.";
        erro.classList.remove("esconder");
        return;
    }

    if (selectBebida.value === "") {
        erro.textContent = "Selecione uma bebida.";
        erro.classList.remove("esconder");
        return;
    }

    // SOMA TOTAL
    let total = 0;

    total += precos.prato[pratoTexto];
    total += precos.bebida[bebidaTexto];

    // limpar lista antes de montar novamente
    rAdicionais.innerHTML = "";

    adicionais.forEach(add => {
        if (add.checked) {
            const nomeAdd = add.parentElement.textContent.trim();
            const li = document.createElement("li");
            li.textContent = nomeAdd;
            rAdicionais.appendChild(li);
            total += precos.adicionais[nomeAdd];
        }
    });

    // EXIBIR RESULTADOS
    rPrato.textContent = pratoTexto;
    rBebida.textContent = bebidaTexto;
    rTotal.textContent = total.toFixed(2);

    form.classList.add("esconder");
    resultado.classList.remove("esconder");

    // CRIAR BOTÃO NOVO PEDIDO SE AINDA NÃO EXISTIR
    if (!document.querySelector("#novoPedido")) {
        btnNovoPedido = document.createElement("button");
        btnNovoPedido.id = "novoPedido";
        btnNovoPedido.textContent = "Novo Pedido";
        resultado.appendChild(btnNovoPedido);

        btnNovoPedido.addEventListener("click", resetar);
    }
}


// -------------------------------
// 4) Função resetar()
// -------------------------------
function resetar() {

    form.reset();

    adicionais.forEach(add => add.checked = false);

    resultado.classList.add("esconder");
    form.classList.remove("esconder");
}


// -------------------------------
// 5) Eventos
// -------------------------------
btnCalcular.addEventListener("click", calcular);
/////////////////////////////////