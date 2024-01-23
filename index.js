// Variaveis
let saldoVitorias = 0;
let saldoDerrotas = 0;
let saldoTotal = 0;
let nivel = "";

// Laço de repetição
while (true) {

    saldoVitorias = input.questionInt("Informe a quntidade de vitórias: ");
    saldoDerrotas = input.questionInt("Informe a quntidade de derrotas: ");

    // Função que calcula o saldo total entre as vitorias e as derrotas
    function calculaRanqueada(saldoVitorias, saldoDerrotas) {
        saldoTotal = saldoVitorias * saldoDerrotas;
        return saldoTotal;
    }


    // Estruturas de decisão + operadores relacionais e de atribuição
    if (saldoTotal < 10) {
        nivel = "Ferro";
    } else if (saldoTotal >= 11 && saldoTotal <= 20) {
        nivel = "Bronze";
    } else if (saldoTotal >= 21 && saldoTotal <= 50) {
        nivel = "Prata";
    } else if (saldoTotal >= 51 && saldoTotal <= 80) {
        nivel = "Ouro";
    } else if (saldoTotal >= 81 && saldoTotal <= 90) {
        nivel = "Diamante";
    } else if (saldoTotal >= 91 && saldoTotal <= 100) {
        nivel = "Lendário";
    } else if (saldoTotal >= 101) {
        nivel = "Imortal";
    }


    // Saídas possíveis
    if (saldoVitorias !== 0 && saldoDerrotas !== 0)
        console.log("O Herói tem de saldo de ${saldoTotal} está no nível de ${nivel}");
    else
        console.log("Você precisa informar a quantidade de virtórias e de derrotas.");

}