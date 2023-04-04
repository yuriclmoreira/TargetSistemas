/* --------------------------------2-------------------------------- */

function Fibonacci() {
  var numero = parseInt(document.getElementById("numero").value);
  var resposta = document.getElementById("resposta");
  var sequencia = document.getElementById("sequencia");

  let fibonacci = [];

  if (numero === 0) {
    resposta.innerHTML =
      "Não é possível criar uma sequência de Fibonacci com 0 elementos. Por favor, insira um novo número no campo acima.";
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
    "<h3> A sequência de fibonacci de " +
    numero +
    " elementos é: <br>" +
    fibonacci +
    "</h3>";
  if (fibonacci.find((number) => number === numero)) {
    resposta.innerHTML =
      "<h3>O número selecionado está na sequência de fibonacci.</h3>";
  } else {
    resposta.innerHTML =
      "<h3>O número selecionado não está na sequência de fibonacci.</h3>";
  }
}
/* --------------------------------3-------------------------------- */
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
    "<p>O maior valor é: " +
    maiorValor +
    "<br>" +
    "O menor valor é:" +
    menorValor +
    "<br>" +
    "O número de valores que ultrapassou a media foi :" +
    contador +
    "</p>";
}
/* --------------------------------4-------------------------------- */

function Percentual() {
  var respostaPercentual = document.getElementById("respostaPercentual");
  const dados = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 },
  ];

  const total = dados.reduce((acc, curr) => acc + curr.valor, 0);
  const percentuais = dados.map((item) =>
    ((item.valor / total) * 100).toFixed(2)
  );

  let html = "<ul>";

  for (let i = 0; i < dados.length; i++) {
    html += `<li>${dados[i].estado}: R$ ${dados[i].valor}: Percentual: R$ ${percentuais[i]}</li>`;
  }

  html += "</ul>";

  respostaPercentual.innerHTML = html;
}
/* --------------------------------5-------------------------------- */

function Inverter() {
  var respostaInverter = document.getElementById("respostaInverter");
  const palavra = document.getElementById("palavra").value;

  let reverse = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    reverse += palavra[i];
  }
  console.log(reverse);
  if (reverse) {
    respostaInverter.innerHTML =
      "<h3>A palavra invertida é:  " + reverse + "</h3>";
  } else {
    respostaInverter.innerHTML =
      "<h3>Digite uma palavra para ser invertida.</h3>";
  }
}
