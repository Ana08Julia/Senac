const consumoEmKwh = Number(prompt(`Digite o seu consumo`));
const tipoCliente = prompt(`Voce e cliente Residencial, Comercial ou Industrial?`);
let precoPorKwh = 0;
if(tipoCliente.toLowerCase() === `residencial`){
    precoPorKwh = 0.60;
} else if(tipoCliente.toLowerCase() === `comercial`){
    precoPorKwh = 0.75;
} else if(tipoCliente.toLowerCase() === `industrial`){
    precoPorKwh = 0.90;
} else{
    alert('Esse tipo de Cliente não existe.');
}
let valorBase = consumoEmKwh * precoPorKwh;
let acrescimo = 0;
if(consumoEmKwh > 500){
    acrescimo = valorBase * 0.15;
}
const valorFinal = valorBase + acrescimo;
if(tipoCliente.toLowerCase() === `residencial` || tipoCliente.toLowerCase() === `industrial` || tipoCliente.toLowerCase() === `comercial`){
    document.body.innerHTML += `
    <div class="card">
        <h2>Resumo da conta</h2>
        <p><b>Cliente:</b> ${tipoCliente}</p>
        <p><b>Consumo:</b> ${consumoEmKwh}kWh</p>
        <p><b>Valor Base:</b> R$${valorBase.toFixed(2)}</p>
        <p><b>Acrescimo:</b> R$${acrescimo.toFixed(2)}</p>
        <p><b>Valor Final:</b> R$${valorFinal.toFixed(2)}</p>
    </div>`;
} else{
    document.body.innerHTML = '<h1 class="danger">Tente novamente!</h1>';
}