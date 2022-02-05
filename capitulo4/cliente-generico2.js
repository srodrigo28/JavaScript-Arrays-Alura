function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositar = function(valor){
        this.saldo += valor
    }
    this.sacar = function(valor){
        this.saldo -= valor
    }

    this.extrato = function(){
        return console.log(this.saldo)
    }
}

const andre = new Cliente("André", "01046038189", "andre@bol.com", 2000)
andre.depositar(30)
andre.sacar(2000)
console.log(andre.extrato())
//const beatriz = new Cliente("Beatriz Sousa", "29026038108", "bia@bol.com", 4000)