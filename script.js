// Carne - 400gr por pessoa + 6 horas - 650
// Cerve - 1200 ml por Pessoa + 6horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne   = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


// coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um InnerHTMl
resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`

    resultado.innerHTML += `
    <div class="result-block">
    <p>${qdtTotalCarne}g de Carne</p>
    </div>
    `

    resultado.innerHTML += `
    <div class="result-block">
    <p>${Math.ceil(qdtTotalCerveja/355)}  latinhas de cerveja</p>
    `
    
    
    
    resultado.innerHTML += `
    <div class="result-block">
    <p>${Math.ceil(qdtTotalBebidas/2000)}  garrafas de 2L de bebidas</p>
    `

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

   


function cervejaPP(duracao){
        if(duracao >= 6){
            return 2000;
        } else{
            return 1200;
        }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}