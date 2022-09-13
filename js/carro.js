import veiculo from "./veiculo.js";
export default class carro extends veiculo {

    constructor(id, placa, marca, cor, nomeprop, numportas) {
        super(id, placa, marca, cor, nomeprop)
        this._numportas = numportas
    }
    get numportas() {
        return this._numportas

    }

    calcpreco() {
        this._horaSaida = new Date()
        let duracao = (horaSaida - this.horaEntrada) / 60000;
        if (duracao <= 15) {
            return 0;
        } else if (valor <= 240) {
            return (duracao / 60) * 4;
        } else {
            return 20;
        }
    }
}