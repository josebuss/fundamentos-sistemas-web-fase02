document.addEventListener('DOMContentLoaded', () => {
    const inputData = document.getElementById('data');
    if(inputData){
        setMenorDataParaHoje(inputData, 4);
    }
});

function setMenorDataParaHoje(input, dias) {
    const minData = new Date();
    minData.setDate(minData.getDate() + 1);
    minData.setHours(0, 0, 0, 0);
    input.min = formatDateTimeLocal(minData);

    const maxData = new Date();
    maxData.setDate(maxData.getDate() + dias);
    maxData.setHours(23, 59, 0, 0);
    input.max = formatDateTimeLocal(maxData);
}

function formatDateTimeLocal(date) {
    const pad = (n) => String(n).padStart(2, '0');

    return date.getFullYear() + '-' +
           pad(date.getMonth() + 1) + '-' +
           pad(date.getDate()) + 'T' +
           pad(date.getHours()) + ':' +
           pad(date.getMinutes());
}

function validarHorario(input) {
    let msg = document.getElementById("mensagem_erro");
    msg.textContent = "";

    if (!input.value) return;

    let data = new Date(input.value);
    let hora = data.getHours();

    if (hora < 8 || hora > 21) {
        msg.textContent = "O horário permitido é entre 09:00 e 21:00";
        input.value = "";
    }
}

function habilitarInformacoesAdicionais(inputId, condicao, fieldsetId) {
    let input = document.getElementById(inputId);
    let fieldset = document.getElementById(fieldsetId);

    if (input.checked && input.value === condicao) {
        fieldset.disabled = false; // habilita
    } else {
        fieldset.disabled = true; // desabilita
        fieldset.querySelectorAll("input, select").forEach(campo => campo.value = "");//limpa tudo do fieldset
    }
}

function salvarRegistro(event, form){
    event.preventDefault();
    form.reset();
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
}