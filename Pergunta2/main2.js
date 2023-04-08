function verificarSequenciaFibonacci() {
  let numero = document.getElementById("numero").value;

  let a = 0;
  let b = 1;
  let c = 0;
  let numeroEncontrado = false;

  while (c < numero) {
    c = a + b;
    a = b;
    b = c;
    if (c == numero) {
      numeroEncontrado = true;
      break;
    }
  }

  let resposta = document.getElementById("resposta");

  if (numeroEncontrado) {
    resposta.innerHTML += `<p> O número ${numero} PERTENCE à sequência Fibonacci.</p>`;
  } else {
    resposta.innerHTML += `<p> O número ${numero} NÃO PERTENCE à sequência Fibonacci.</p>`;
  }
}
