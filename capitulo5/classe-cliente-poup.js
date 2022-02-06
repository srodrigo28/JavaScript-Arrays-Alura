class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        if(valor < this.saldo){
            this.saldo -= valor
        }else{
            console.log("saldo insuficiente")
        }
    }
    extrato(){
        console.log(this.saldo)
    }
}
// let c1 = new Cliente("ana", "ana@bol.com", "23156", 500)
// console.table(c1)
// c1.sacar(450)
// console.log(c1)

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const c1 = new ClientePoupanca("ana", "ana@bol.com", "23156", 500, 700)
console.log(c1)