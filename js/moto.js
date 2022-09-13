import veiculo from "./veiculo.js";
export default class moto extends veiculo {

    constructor(id, placa, marca, cor, nomeprop) {
        super(id, placa, marca, cor, nomeprop)
    }

    calcpreco() {
        this._horaSaida = new Date()
        let duracao = (this._horaSaida - this._horaEntrada) / 60000;
        if (duracao <= 30) {
            return 0;
        } else if (valor <= 240) {
            return (duracao / 60) * 2;
        } else {
            return 10;
        }
    }
}