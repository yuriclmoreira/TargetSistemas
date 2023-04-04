/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

function Fibonacci() {
  var numero = parseInt(document.getElementById("numero").value);
  var resposta = document.getElementById("resposta");
  var sequencia = document.getElementById("sequencia");

  let fibonacci = [];

  if (numero === 0) {
    resposta.innerHTML =
      "Não é possivel criar uma sequencia de fibonacci com 0 elementos por favor insira um novo numero no campo acima.";
  } else if (numero === 1) {
    fibonacci[0] = 0;
  } else {
    for (var i = 2; i <= numero; i++) {
      fibonacci[0] = 0;
      fibonacci[1] = 1;
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
  }
  sequencia.innerHTML =
    "<h1> A sequencia de fibonacci de " +
    numero +
    " elementos é: <br>" +
    fibonacci +
    "</h1>";
  if (fibonacci.find((number) => number === numero)) {
    resposta.innerHTML =
      "<h2>O número selecionado está na sequencia de fibonacci.</h2>";
  } else {
    resposta.innerHTML =
      "<h2>O número selecionado não esta na sequencia de fibonacci.</h2>";
  }
}
