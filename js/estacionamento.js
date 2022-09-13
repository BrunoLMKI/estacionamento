import carro from "./carro.js";
import moto from "./moto.js";

export default class estacionamento {

    constructor(numeroDeVagas) {
        this._numeroDeVagas = numeroDeVagas
        this._vagas = []
        this._historico = []
        this._saldo = 0
    }

    estacionar(id, tipo, placa, marca, cor, nomeprop, numportas) {
        if (this._numeroDeVagas === 0) {
            alert('NAO HÁ VAGAS')
            return

        }

        if (tipo === 'carro') {
            let veiculo = new carro(id, placa, marca, cor, nomeprop, numportas)
            this._vagas.push(veiculo)
            this._numeroDeVagas -= 1

        } else {
            let veiculo = new moto(id, placa, marca, cor, nomeprop)
            this._vagas.push(veiculo)
            this._numeroDeVagas -= 1
        }
        alert ("Veiculo estacionado com sucesso!")

    }

    liberar(placa) {
        let x = this._vagas.findIndex(veiculo => veiculo.placa === placa)
        if (x === -1) {
            alert('Veiculo não encontrado')
            return
        }
        alert('SUCESSO!')
        let veiculo = this._vagas[x]
        let preco = veiculo.calcpreco()
        this._saldo += preco
        delete this._vagas[x]
        this._numeroDeVagas += 1
        this._historico.push(veiculo)
    }

    get saldo() {
        return this._saldo

    }

    get historico() {
        return this._historico

    }
}