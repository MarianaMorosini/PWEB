//Questão 1
function Retangulo(x, y){

    this.calcArea = function() {
        return x * y;
    };
}

var base = parseFloat(prompt("Informe a base do trinângulo: "));
var altura = parseFloat(prompt("Informe a altura do trinângulo: "));
var retangulo = new Retangulo(base, altura);

alert("Área retângulo: " + retangulo.calcArea());

//Questão 2
function Conta(){
    var nome, banco, numConta, saldo;

    this.getNome = function(){
        return nome;
    }

    this.setNome = function(nome){
        this.nome = nome;
    }

    this.getBanco = function(){
        return banco;
    }

    this.setBanco = function(banco){
        this.banco = banco;
    }

    this.getNumConta = function(){
        return numConta;
    }

    this.setNumConta = function(numConta){
        this.numConta = numConta;
    }

    this.getSaldo = function(){
        return saldo;
    }

    this.setSaldo = function(saldo){
        this.saldo = saldo;
    }
}

function ContaCorrente() {
    var saldoEspecial;

    this.getSaldoEspecial = function(){
        return saldoEspecial;
    }

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    }
}

function ContaPoupanca() {
    var juros, dataVencimento;

    this.getjuros = function(){
        return juros;
    }

    this.setjuros = function(juros){
        this.juros = juros;
    }

    this.getDataVencimento = function(){
        return dataVencimento;
    }

    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento;
    }
}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

objContaCorrente = new ContaCorrente();
objContaPoupanca = new ContaPoupanca();

objContaCorrente.setNome('Marinha');
objContaCorrente.setBanco('Nubank');
objContaCorrente.setNumConta('123456789');
objContaCorrente.setSaldo(500.0);
objContaCorrente.setSaldoEspecial(700.00);

objContaPoupanca.setNome('Gabriel');
objContaPoupanca.setBanco('Itau');
objContaPoupanca.setNumConta('789654123');
objContaPoupanca.setSaldo(2000.00);
objContaPoupanca.setjuros(100.00);
objContaPoupanca.setDataVencimento('12/03/2027');


alert("Verificar resultado no console");
console.log(objContaCorrente);
console.log(objContaPoupanca);