var visor = document.getElementById("visor");
var calculo;

init();

function init() {
    calculo = false;
    var inputs = document.getElementsByTagName("button");

    for(var i = 0; i !== inputs.length; i++) {
        inputs[i].addEventListener("click", function() {
            calcular(this.id)
        });
    }

}

function calcular(tecla) {
    tecla = tecla.trim();
    switch(tecla) {
        case "=":
            visor.innerText = eval(visor.innerText);
            calculo = true;
            break;
        case "c":
            visor.innerText = "";
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            calculo = false;
        default: 
            if(visor.innerText == "0" || calculo) visor.innerText == "";
                calculo == false;
                visor.innerText = visor.innerText + tecla;
    }
}