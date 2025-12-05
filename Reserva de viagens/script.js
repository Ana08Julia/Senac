const reservas = [];
const form = document.querySelector(`#form-reserva`);
const lista = document.querySelector(`#lista`);
form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const nome = form.querySelector(`#nome`).value;
    const data = form.querySelector(`#data`).value;
    const destino = form.querySelector(`#destino`).value;
    const reserva = {nome, data, destino};
    reservas.push(reserva);
    mostrarReservas();
    form.reset();
});
function mostrarReservas(){
    lista.innerHTML = ``;
    const hoje = new Date().toISOString().split(`T`)[0];
    for(let i = 0; i < reservas.length; i++){
        const reserva = reservas[i];
        let status = ``;
        let classeStatus = ``;
        if(reserva.data < hoje){
            classeStatus = `passada`;
            status = `Data invalida!`;
        } else if(reserva.data === hoje){
            classeStatus = `hoje`;
            status = `A viagem e hoje!`;
        } else {
            classeStatus = `futura`;
            status = `Viagem confirmada!`;
        }
        const formataData = reserva.data.split(`-`).reverse().join(`/`); // antes: 2025-10-08 | depois: 08/10/2025
        lista.innerHTML += `
            <div class="reserva ${classeStatus}">
                <p><b>Passageiro: </b>${reserva.nome}</p>
                <p><b>Destino: </b>${reserva.destino}</p>
                <p><b>Data: </b>${formataData}</p>
                <span>${status}</span>
            </div>
        `;
    }
}