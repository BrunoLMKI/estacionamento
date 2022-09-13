import estacionamento from "./estacionamento.js";

let parking = new estacionamento(20)
let botaoregistrar = document.getElementById("registrarveiculo")
let liberarveiculo = document.getElementById("liberarveiculo")
let relatorio = document.getElementById("relatorio")
let valor = document.getElementById("valor")
let botaoestacionar = document.getElementById("botaoestacionar")
let novoid = document.getElementById("id")
let novoplaca = document.getElementById("placa")
let novomarca = document.getElementById("marca")
let novocor = document.getElementById("cor")
let novonomeprop = document.getElementById("nomeprop")
let novonumportas = document.getElementById("numportas")
let novotipo = document.getElementById("tipo")
let freecar = document.getElementById("freecar")
let liberarplaca = document.getElementById("liberarplaca")
let valorsaldo = document.getElementById("valorsaldo")
let saldobtn = document.getElementById("saldobtn")
let conteudorelatorio = document.getElementById("conteudorelatorio")
let relatoriobtn = document.getElementById("relatoriobtn")

botaoregistrar.addEventListener("click", () => {
    document.getElementById("estacionar").style.display = 'flex'
})

botaoestacionar.addEventListener("click", () => {
    parking.estacionar (novoid.value, novotipo.value, novoplaca.value, novomarca.value, novocor.value, novonomeprop.value, novonumportas.value)
    document.getElementById("estacionar").style.display = 'none'
})

liberarveiculo.addEventListener("click", () => {
    document.getElementById("liberar").style.display = 'flex'
})

freecar.addEventListener("click", () => {
    document.getElementById("liberar").style.display = 'none'
    parking.liberar(liberarplaca.value)
})

valor.addEventListener("click", () => {
    document.getElementById("saldo").style.display = 'flex'
    valorsaldo.innerHTML = parking.saldo

})

saldobtn.addEventListener("click", () => {
    document.getElementById("saldo").style.display = 'none'
    
})

relatorio.addEventListener("click", () => {
    document.getElementById("relatoriodiv").style.display = 'flex'
    console.log(parking.historico)
    let texto = ''
    for (let i = 0; i<parking.historico.length; i++){
        texto += " ID: " +  parking.historico[i].id + " PLACA: " + parking.historico[i].placa + " MARCA: " + parking.historico[i].marca + " COR " +  parking.historico[i].cor + " NOME DO PROPRIETÁRIO: " + parking.historico[i].nomeprop + "\n"
    }
    for (let i = 0; i<parking.vagas.length; i++){
        texto += " ID: " +  parking.vagas[i].id + " PLACA: " + parking.vagas[i].placa + " MARCA: " + parking.vagas[i].marca + " COR " +  parking.vagas[i].cor + " NOME DO PROPRIETÁRIO: " + parking.vagas[i].nomeprop + "\n"
    }
    console.log(texto)
    conteudorelatorio.innerHTML = texto
})

relatoriobtn.addEventListener("click", () => {
    document.getElementById("relatoriodiv").style.display = 'none'
    
})

