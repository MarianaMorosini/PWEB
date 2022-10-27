var elemento = document.getElementById('resposta');
const qtdePessoas = 3;
var pessoas = [];
var cont = 0;

do{
    var idade = Number(prompt("Infome sua idade: "));
    var sexo = Number(prompt("Qual o seu sexo: \n1- Feminino \n2- Masculino"));
    var opniao = Number(prompt("Qual sua avaliação do filme: \n1- Ótimo \n2- Bom \n3- Regular \n4- Péssimo"));

    pessoas.push({idade, sexo, opniao});
    cont++;
} while(cont < qtdePessoas);


var idades = pessoas.map((pessoa) => pessoa.idade);

function idadesMedia(idades) {
    var soma = 0;
    for(var x in idades)
        soma += idades[x];

    return soma / idades.length;
}

function menorIdade(idades) {
    return Math.min.apply(null, idades);
}

function maiorIdade(idade) {
    return Math.max.apply(null, idades);
}

var opnioes = pessoas.map((pessoa) => pessoa.opniao);
function opniaoPessimo(opnioes) {
    x = 0;
    opnioes.forEach(opniao => {
        if(opniao === 4){
            x++;
        }
    }); 
    return x;
}

function porcentagemBomOtimo(opnioes) {
    x = 0;
    opnioes.forEach(opniao => {
        if(opniao === 1 || opniao === 2){
            x++;
        }
    }); 
    return (x/opnioes.length)*100;
}

var sexos = pessoas.map((pessoa) => pessoa.sexo);

function contaMulher(sexos) {
    x = 0;
    sexos.forEach(sexo => {
        if(sexo === 1){
            x++;
        }
    }); 
    return x;
}

function contaHomem(sexos) {
    x = 0;
    sexos.forEach(sexo => {
        if(sexo === 2){
            x++;
        }
    }); 
    return x;
}

var idadeMedia = idadesMedia(idades);
var idadeMin = menorIdade(idades);
var idadeMax = maiorIdade(idades);
var qtdePessimo = opniaoPessimo(opnioes);
var porcOtimoBom = porcentagemBomOtimo(opnioes);
var qtdeMulher = contaMulher(sexos);
var qtdeHomem = contaHomem(sexos);


elemento.innerHTML = 'Resultado:<br><br>Média idades: ' + idadeMedia + 
                    '<br>Menor idade: ' + idadeMin +
                    '<br>Maior idade: ' + idadeMax +
                    '<br>Quantidade Péssimo: ' + qtdePessimo +
                    '<br>Porcentagem de Ótimo e Bom: ' + porcOtimoBom +
                    '<br>Quantidade Mulher: ' + qtdeMulher +
                    '<br>Quantidade Homem: ' + qtdeHomem;