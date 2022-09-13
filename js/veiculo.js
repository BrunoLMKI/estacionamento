export default class veiculo{

    constructor (id, placa, marca, cor, nomeprop){
        this._id = id
        this._placa = placa
        this._marca = marca
        this._cor = cor
        this._nomeprop =  nomeprop
        this._horaEntrada = new Date ()
        this._horaSaida = undefined
    }

    get id (){
        return this._id

    }

    get placa (){
        return this._placa

    }

    get marca (){
        return this._marca

    }
    
    get cor (){
        return this._cor

    }

    get nomeprop (){
        return this._nomeprop

    }

    get horaEntrada (){
        return this._horaEntrada

    }


}
