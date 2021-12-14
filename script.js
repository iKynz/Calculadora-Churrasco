let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')
let resultado = document.getElementById('resultado')

// criando a função pra dar resultado ao clicar em calcular

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    // criando as váriaveis para multiplicar, somar e dividir por quandidade de pessoas

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let totalCerveja = cervejaPP(duracao) * adultos;
    let totalRefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);

    

    resultado.innerHTML = `<p class='resultado'>${Math.ceil(totalCarne / 1000)} Kg de carne</p>`
    resultado.innerHTML += `<p class='resultado'>${Math.ceil(totalCerveja / 350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p class='resultado'>${Math.ceil(totalRefri / 2000)} Refrigerantes</p>`

}

// criando as condições de acordo com a quantidade e hórario do churrasco

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function refriPP(duracao){
    if(duracao >= 6){
        return 4000
    } else {
        return 2000
    }
}