let faturamentoDiario = [
  22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258,
  46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448,
  18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662,
  13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61,
];

let somaFaturamento = 0;
let qtdDiasComFaturamentoAcimaDaMedia = 0;
let faturamentoMinimo = Infinity;
let faturamentoMaximo = -Infinity;

let menorValor = document.getElementById("menorValor");
let maiorValor = document.getElementById("maiorValor");
let numeroDeDias = document.getElementById("numeroDeDias");

for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > 0) {
    somaFaturamento += faturamentoDiario[i];
    numeroDeDias.innerText = qtdDiasComFaturamentoAcimaDaMedia;

    if (faturamentoDiario[i] > somaFaturamento / faturamentoDiario.length) {
      qtdDiasComFaturamentoAcimaDaMedia++;
      menorValor.innerText = faturamentoMinimo;
    }

    if (faturamentoDiario[i] < faturamentoMinimo) {
      faturamentoMinimo = faturamentoDiario[i];
      maiorValor.innerText = faturamentoMaximo;
    }

    if (faturamentoDiario[i] > faturamentoMaximo) {
      faturamentoMaximo = faturamentoDiario[i];
    }
  }
}

// console.log("Menor faturamento: " + faturamentoMinimo);
// console.log("Maior faturamento: " + faturamentoMaximo);
// console.log(
//   "Número de dias com faturamento acima da média: " +
//     qtdDiasComFaturamentoAcimaDaMedia
// );
