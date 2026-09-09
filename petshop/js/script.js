// funcoes JavaScript do site Mundo Pet

// mostra a data e a hora na pagina
function atualizarRelogio() {
    var elemento = document.getElementById('relogio');
    if (elemento == null) {
        return;
    }

    var agora = new Date();
    var dia = agora.getDate();
    var mes = agora.getMonth() + 1;
    var ano = agora.getFullYear();
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var segundo = agora.getSeconds();

    if (minuto < 10) {
        minuto = '0' + minuto;
    }
    if (segundo < 10) {
        segundo = '0' + segundo;
    }

    elemento.innerHTML = dia + '/' + mes + '/' + ano + ' - ' + hora + ':' + minuto + ':' + segundo;
}

// atualiza o relogio a cada 1 segundo
function iniciarRelogio() {
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
}

window.onload = iniciarRelogio;

// cadastro do cliente e do pet
function enviarCadastro() {
    var nome = document.getElementById('nome').value;
    var pet = document.getElementById('nomePet').value;
    alert('Cadastro enviado!\nCliente: ' + nome + '\nPet: ' + pet);
    return false;
}

// agendamento de banho ou tosa
function enviarAgendamento() {
    var servico = document.getElementById('servico').value;
    var data = document.getElementById('dataAgenda').value;
    var hora = document.getElementById('horaAgenda').value;
    var telebusca = document.getElementById('telebusca');
    var local = document.getElementById('local');
    var forma = '';

    if (telebusca.checked) {
        forma = 'Tele-busca';
    } else if (local.checked) {
        forma = 'Entrega no local';
    } else {
        alert('Escolha tele-busca ou entrega no local.');
        return false;
    }

    alert('Agendamento feito!\nServico: ' + servico + '\nData: ' + data + '\nHora: ' + hora + '\nForma: ' + forma);
    return false;
}

// formulario de contato
function enviarContato() {
    var nome = document.getElementById('nome').value;
    alert('Mensagem enviada. Obrigado, ' + nome + '!');
    return false;
}
