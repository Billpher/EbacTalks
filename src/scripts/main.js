AOS.init();

const dataDoEvento = new Date('Dec 11, 2024 20:00:00');
const timeStampEvento = dataDoEvento.getTime();

const contador = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const dias = Math.floor(tempoAteEvento / diaEmMs);
    const horas = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
    const minutos = Math.floor((tempoAteEvento % horaEmMs) / minEmMs);
    const segundos = Math.floor((tempoAteEvento % minEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`

    if(tempoAteEvento < 0) {
        clearInterval(contador);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }

}, 1000);