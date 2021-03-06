// Alterando status - Aberto | Fechado
function verificaHorario() {
    let statusCirculo = document.querySelector('.aberto');
    console.log(statusCirculo);
    let data = new Date();
    let dia = data.getDay();
    if (dia != '0') {
        let hora = data.getHours();
        if (hora >= '7' && hora <= 18) {
            statusCirculo.style.backgroundColor = "#1ab912";
        } else {
            statusCirculo.style.backgroundColor = "#cc0f0f";
        }
    } else {
        statusCirculo.style.background = "#cc0f0f";
    }
}
verificaHorario();
