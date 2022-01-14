"use strict"

var horas = 0
var min = 0
var seg = 0

var tempo = 1000 // Quantos milésimo vale 1 segundo?
var cron

function start() {

    cron = setInterval(timer, tempo)

}

function pause() {
    clearInterval(cron)
}

function stop() {
    clearInterval(cron)
    horas = 0
    min = 0
    seg = 0
    
    document.getElementById("counter").innerHTML = "00:00:00"
}

function timer() {

    seg++

    if(seg == 60) {
        seg == 0
        min++

        if(min == 60){
            min = 0
            horas++
        }
    }



    var format = (horas < 10 ? '0' + horas : horas) + ":" + (min < 10 ? '0' + min : min) + ":" + (seg < 10 ? '0' + seg : seg)
    document.getElementById("counter").innerHTML = format

}