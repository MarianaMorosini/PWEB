const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

var numMaior;
var ordemCrescente;

function maiorNum() {
    if(parseInt(num1.value) > parseInt(num2.value) && parseInt(num1.value) > parseInt(num3.value)){
        numMaior = parseInt(num1.value);
    }
    else if (parseInt(num2.value) > parseInt(num3.value) && parseInt(num2.value) > parseInt(num3.value)){
        numMaior = parseInt(num2.value);
    }
    else {
        numMaior = parseInt(num3.value);
    }

    alert("Maior número: " + numMaior);

}

function ordenaCrescente(){
    ordemCrescente = [num1.value, num2.value, num3.value];

    ordemCrescente.sort((a, b) => {
        return a-b;
    });

    alert("Ordem Crescente: " + ordemCrescente);

}