class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
        this.imprimeCliente = function(){
            console.log( `nome: ${this.nome}, email: ${this.email}, cpf: ${this.cpf}, saldo R$ ${this.saldo}`)
        }
    }
    depositar(valor){
        this.saldo += this.valor
    }
    sacar(valor){
        if(valor > this.saldo){
            console.log('não pode sacar valor')
        }else{
            this.saldo -= valor
        }
    }
    extrato(){
        console.log(saldo)
    }

}

const c1 = new Cliente("ana", "ana@bol.com", "165448", 200)
const c2 = new Cliente("ana maria", "anamaria@bol.com", "380165448", 1200)
c2.sacar(1000)
c2.imprimeCliente()
//console.table(c2)
// let c1 = new Cliente()
//     ana.nome = "Ana Sousa"
//     ana.email = "ana@bol.com"
//     ana.cpf = "321056564"
//     ana.saldo = 200

