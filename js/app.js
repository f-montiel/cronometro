window.onload = () => {
    let tiempo = document.getElementById("tiempo");
    tiempo.innerHTML = "00:00:00";
    let timeout;
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let botonIniciar = document.getElementById("iniciar");
    botonIniciar.addEventListener("click", iniciar);
    let botonPausar = document.getElementById("pausar");
    botonPausar.addEventListener("click", pausar);
    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.addEventListener("click", reiniciar);
    function iniciar(event){
        event.preventDefault();
        cronometrar();
        habilitarBotones();
        bloquearBotones(botonIniciar);
    }
    function pausar(event){
        event.preventDefault();
        clearTimeout(timeout);
        habilitarBotones();
        bloquearBotones(botonPausar);
    }
    function reiniciar(event){
        event.preventDefault();
        clearTimeout(timeout);
        horas = 0;
        minutos = 0;
        segundos= 0;
        tiempo.innerHTML = "00:00:00";
        habilitarBotones();
    }
    function cronometrar(){
        segundos += 1;
        if(segundos == 60){
            segundos = 0;
            minutos +=1;
        }
        if(minutos==60){
            minutos = 0;
            horas += 1;
        }
        if(horas == 24){
            segundos = 0;
            minutos = 0;
            horas = 0;
        }
        let horasFormateadas = horas;
        let minutosFormateados = minutos;
        let segundosFormateados = segundos;
        if(horas < 10){
            horasFormateadas = "0" + horas;
        }
        if(minutos < 10){
            minutosFormateados = "0" + minutos;
        }
        if(segundos < 10){
            segundosFormateados = "0" + segundos;
        }
        tiempo.innerHTML = horasFormateadas + ":" + minutosFormateados + ":" + segundosFormateados;
        timeout = setTimeout(cronometrar, 1000);
    }
    function habilitarBotones(){
        let botones = document.getElementsByClassName("disabled");
        for(i=0;i<botones.length;i++){
            botones[i].classList.remove("disabled");
        }
    }
    function bloquearBotones(boton){
        boton.classList.add("disabled")
    }
}