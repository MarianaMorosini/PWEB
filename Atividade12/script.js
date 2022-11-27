const janela = document.getElementById("janela");

const texto = document.getElementById("lblJanela");

function abrir() {
    janela.src = "janelaaberta.png";
    texto.innerHTML = "Janela está aberta!";
}

function fechar() {
    janela.src = "janelafechada.png";
    texto.innerHTML = "Janela está fechada!"
}

function quebrar() {
    janela.src = "janelaquebra.png";
    texto.innerHTML = "Janela está quebrada!"
}