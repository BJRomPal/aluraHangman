var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext("2d");

function dibujarCanvas(){
    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 1100, 500);
}

function dibujarAhorcado() {
    pincel.fillStyle = '#9B401B';
    pincel.strokeStyle = '#4F1A05';
    pincel.lineWidth = 1;
    pincel.beginPath();
    pincel.moveTo(50, 480);
    pincel.lineTo(70, 450);
    pincel.lineTo(180, 450);
    pincel.lineTo(200, 480);
    pincel.lineTo(50, 480);
    pincel.moveTo(70, 470);
    pincel.lineTo(90, 470);
    pincel.moveTo(90, 460);
    pincel.lineTo(120, 460);
    pincel.moveTo(150, 455);
    pincel.lineTo(170, 455);
    pincel.moveTo(155, 465);
    pincel.lineTo(180, 465);
    pincel.moveTo(135, 472);
    pincel.lineTo(165, 472);
    pincel.moveTo(115, 450);
    pincel.lineTo(115, 150);
    pincel.lineTo(135, 150);
    pincel.lineTo(135, 450);
    pincel.moveTo(120, 400);
    pincel.lineTo(120, 350);
    pincel.moveTo(123, 319);
    pincel.lineTo(123, 289);
    pincel.moveTo(128, 265);
    pincel.lineTo(128, 235);
    pincel.moveTo(124, 202);
    pincel.lineTo(124, 167);
    pincel.moveTo(131, 433);
    pincel.lineTo(131, 407);
    pincel.moveTo(115, 150);
    pincel.lineTo(115, 130);
    pincel.lineTo(300, 130);
    pincel.lineTo(300, 150);
    pincel.lineTo(115, 150);
    pincel.moveTo(120, 140);
    pincel.lineTo(155, 140);
    pincel.moveTo(165, 145);
    pincel.lineTo(207, 145);
    pincel.moveTo(223, 134);
    pincel.lineTo(267, 134);
    pincel.moveTo(227, 146);
    pincel.lineTo(258, 146);
    pincel.moveTo(200, 150);
    pincel.lineTo(135, 200);
    pincel.lineTo(135, 230);
    pincel.lineTo(230, 150);
    pincel.moveTo(160, 200);
    pincel.lineTo(190, 174);
    pincel.moveTo(170, 180);
    pincel.lineTo(200, 154);
    pincel.fill();
    pincel.stroke();
}

function dibujarLineas(palabra) {
    var cantidadLineas = palabra.length;
    pincel.strokeStyle = 'black';
    pincel.moveTo(350, 480);
    var x = 350;
    for (i = 1; i <= cantidadLineas; i++) {
        pincel.lineTo(x+50, 480);
        x += 50;
        pincel.moveTo(x+20, 480);
        x += 20;
    }
    pincel.stroke();
}

function dibujarLetrasErroneas(letra) {
    if (letrasErroneas.length == 0) {
        var pantalla = document.querySelector('canvas');
        var pincel = pantalla.getContext("2d");
        pincel.fillStyle = 'red';
        pincel.font = "bold 36px sans-serif";
        pincel.fillText(listadoLetrasErroneas + letra + " ", 125, 50);
        letrasErroneas.push(letra);
        listadoLetrasErroneas = listadoLetrasErroneas + letra + " ";
        dibujarCabeza();
    }
    else {
        var pantalla = document.querySelector('canvas');
        var pincel = pantalla.getContext("2d");
        pincel.fillStyle = 'red';
        pincel.font = "bold 36px sans-serif";
        pincel.fillText(listadoLetrasErroneas + "- " + letra , 125, 50);
        letrasErroneas.push(letra);
        listadoLetrasErroneas = listadoLetrasErroneas + "- " + letra + " ";
        if (letrasErroneas.length == 2) {
            dibujarLineaPersona(213, 280, 328);
        }
        else if (letrasErroneas.length == 3) {
            dibujarLineaPersona(213, 220, 268);
        }
        else if (letrasErroneas.length == 4) {
            dibujarLineaPersona(213, 340, 268);
        }
        else if (letrasErroneas.length == 5) {
            dibujarLineaPersona(328, 220, 383);
        }
        else if (letrasErroneas.length == 6) {
            dibujarLineaPersona(328, 340, 383);
        }   
    }
};

function dibujarJuegoTerminado() {
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = 'black';
    pincel.font = "bold 36px sans-serif";
    pincel.fillText("El juego ha terminado", 450, 250)
};

function haGanado() {
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = 'blue';
    pincel.font = "bold 36px sans-serif";
    pincel.fillText("HA GANADO", 530, 310)
};

function haPerdido() {
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = 'red';
    pincel.font = "bold 36px sans-serif";
    pincel.fillText("HA PERDIDO", 530, 310)
};

function eraEsta(palabra) {
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = 'red';
    pincel.font = "bold 24px sans-serif";
    pincel.fillText("La palabra era " + palabra, 510, 360)
};



function dibujarLetra(letra, x) {
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = 'black';
    pincel.font = "bold 36px sans-serif";
    pincel.fillText(letra, x, 470);
};

//x = 280
//y = 150
function dibujarLineaPersona(y, X, Y) {
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext("2d");
    pincel.strokeStyle = 'black';
    pincel.beginPath();
    pincel.moveTo(280, y);
    pincel.lineTo(X, Y);
    pincel.lineWidth = 5;
    pincel.stroke();
};

function dibujarCabeza() {

    pincel.strokeStyle = "black"; //propiedad
    pincel.beginPath();
    pincel.arc(280, 183, 30, 0, 2*3.14); //función
    pincel.lineWidth = 5;
    pincel.stroke()
};

function limpiarPantalla() { 
    
    pincel.clearRect(0, 0, 1100, 500);

}