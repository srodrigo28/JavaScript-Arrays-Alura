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
        this.saldo -= valor
    }
    extrato(){
        console.log(saldo)
    }
}

const c1 = new Cliente("ana", "ana@bol.com", "165448", 200)
const c2 = new Cliente("ana maria", "anamaria@bol.com", "380165448", 1200)
c2.sacar(1000)
console.table(c2)
// let c1 = new Cliente()
//     ana.nome = "Ana Sousa"
//     ana.email = "ana@bol.com"
//     ana.cpf = "321056564"
//     ana.saldo = 200

