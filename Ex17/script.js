const peso = Number(prompt("Digite seu peso em quilogramas:"));
const altura = Number(prompt("Digite sua altura em metros:"));

const imc = peso / (altura * altura);
let classificacao;

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc <= 24.9) {
    classificacao = "Peso adequado";
} else if (imc <= 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

alert("IMC: " + imc.toFixed(2) +
      "\nClassificação: " + classificacao);