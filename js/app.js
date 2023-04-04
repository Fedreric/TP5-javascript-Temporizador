const temporizadorEnPantalla = document.getElementById("temporizador");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnReset = document.getElementById("btnReset");
const btnListo = document.getElementById("btnListo");
let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let segundosActuales = 0;
let minutosActuales = 0;
let horasActuales = 0;
let bandera = true;
let temporizadorIndex;
btnPlay.addEventListener("click", play);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
btnListo.addEventListener("click", listo);

function listo(e){
    e.preventDefault();
    horasActuales = parseInt(horas.value);
    minutosActuales = parseInt(minutos.value);
    segundosActuales = parseInt(segundos.value);
    temporizadorActualizado();
    pause();
}
function validacion(){
    if(isNaN(horasActuales)){
        horasActuales = 0;
    }
    if(isNaN(minutosActuales)){
        minutosActuales = 0;
    }
    if(isNaN(segundosActuales)){
        segundosActuales = 0;
    }
} 

function temporizadorActualizado() {
    validacion();
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
    temporizadorEnPantalla.innerHTML = `${horas()}:${minutos()}:${segundos()}`
}

function temporizador() {
    temporizadorActualizado();
    if(segundosActuales > 0){
        segundosActuales--;
    }  
    if (segundosActuales === 0) {
        if(minutosActuales > 0){
            minutosActuales--;
            segundosActuales = 59;
        }           
    }
    if (minutosActuales === 0) {
        if(horasActuales > 0){
            horasActuales--;
            minutosActuales = 59;
            segundosActuales = 59;
        }                   
    }
}

function play() {
    if (bandera === true) {
        temporizadorIndex = setInterval(temporizador, 1000);
        bandera = false;
    }
}
function pause() {
    clearInterval(temporizadorIndex);
    bandera = true;
}
function reset() {
    horasActuales = parseInt(horas.value);
    minutosActuales = parseInt(minutos.value);
    segundosActuales = parseInt(segundos.value);
    temporizadorActualizado();
    pause();
}


