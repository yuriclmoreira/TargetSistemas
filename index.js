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
    "<h3> A sequencia de fibonacci de " +
    numero +
    " elementos é: <br>" +
    fibonacci +
    "</h3>";
  if (fibonacci.find((number) => number === numero)) {
    resposta.innerHTML =
      "<h3>O número selecionado está na sequencia de fibonacci.</h3>";
  } else {
    resposta.innerHTML =
      "<h3>O número selecionado não esta na sequencia de fibonacci.</h3>";
  }
}
/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/
async function getValores(valores) {
  try {
    const response = await fetch("dados.json");
    const json = await response.json();
    valores.length = 0; // Limpa o array
    json.forEach((item) => valores.push(item.valor)); // Preenche o array com os valores
  } catch (error) {
    console.error(error);
  }
}
async function Faturamento() {
  let valores = [];
  var respostaFaturamento = document.getElementById("respostaFaturamento");
  let contador = 0;

  await getValores(valores);

  const arrayFiltrado = valores.filter((valor) => valor !== 0);

  const maiorValor = arrayFiltrado.reduce(function (prev, current) {
    return prev > current ? prev : current;
  });

  const menorValor = arrayFiltrado.reduce(function (prev, current) {
    return prev < current ? prev : current;
  });

  const media =
    arrayFiltrado.reduce((acumulador, valor) => acumulador + valor, 0) /
    arrayFiltrado.length;

  for (let i = 0; i < arrayFiltrado.length; i++) {
    if (arrayFiltrado[i] > media) {
      contador++;
    }
  }

  respostaFaturamento.innerHTML =
    "<h3>O maior valor é: " +
    maiorValor +
    "<br>" +
    "O menor valor é:" +
    menorValor +
    "<br>" +
    "O número de valores que ultrapasou  a media foi :" +
    contador +
    "</h3>";
}
