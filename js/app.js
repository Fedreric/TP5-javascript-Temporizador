const cronometroEnPantalla = document.getElementById("cronometro");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnReset = document.getElementById("btnReset");
let segundosActuales = 0;
let minutosActuales = 0;
let horasActuales = 0;
let bandera = true;
let cronometroIndex;
btnPlay.addEventListener("click", play);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);

function cronometroActualizado() {
    function segundos() {
        let segundos0;
        if (segundosActuales < 10) {
            segundos0 = `0${segundosActuales}`
            return segundos0;
        } else {
            return segundosActuales;
        }
    }
    function minutos() {
        let minutos0;
        if (minutosActuales < 10) {
            minutos0 = `0${minutosActuales}`
            return minutos0;
        } else {
            return minutosActuales;
        }
    }
    function horas() {
        let horas0;
        if (horasActuales < 10) {
            horas0 = `0${horasActuales}`
            return horas0;
        } else {
            return horasActuales;
        }
    }
    cronometroEnPantalla.innerHTML = `${horas()}:${minutos()}:${segundos()}`
}

function cronometro() {
    cronometroActualizado();
    segundosActuales++;
    if (segundosActuales === 60) {
        minutosActuales++;
        segundosActuales = 0;
    }
    if (minutosActuales === 60) {
        horasActuales++;
        minutosActuales = 0;
    }
}

function play() {
    if (bandera === true) {
        cronometroIndex = setInterval(cronometro, 1000);
        bandera = false;
    }
}
function pause() {
    clearInterval(cronometroIndex);
    bandera = true;
}
function reset() {
    segundosActuales = 0;
    minutosActuales = 0;
    horasActuales = 0;
    cronometroActualizado();
    pause();
}


