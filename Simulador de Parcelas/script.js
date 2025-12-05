const form = document.querySelector('#form-parcelas');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const valorTotal = Number(form.querySelector('#valor').value);
    const quantParcelas = Number(form.querySelector('#quantidade').value);
    if(quantParcelas < 1 || quantParcelas > 12){
        resultado.innerHTML = '<p class="alerta">A Quantidade de Parcelas deve ser entre 1 e 12.</p>';
        return;
    }
    const valorParcela = valorTotal / quantParcelas;
    resultado.innerHTML = '';
    const hoje = new Date();
    for(let i = 1; i <= quantParcelas; i++){
        const vencimento = new Date(hoje);
        vencimento.setMonth(vencimento.getMonth() + (i - 1));
        const diaSemana = vencimento.getDay();
        let status = '';
        if(diaSemana === 0 || diaSemana === 6){
            status = '(Vencimento adiado.)';
        }
        const dia = String(vencimento.getDate()).padStart(2, '0');
        const mes = String(vencimento.getMonth() + 1).padStart(2, '0');
        const ano = vencimento.getFullYear();
        resultado.innerHTML += `
            <p>
                ${i}ª Parcela - R$${valorParcela.toFixed(2)} - Vencimento: ${dia}/${mes}/${ano}<br>${status}
            </p>
        `;
    }
});