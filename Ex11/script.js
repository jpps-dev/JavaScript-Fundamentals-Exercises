const valor = Number(prompt("Digite o valor da compra:"));
let valorFinal;

if (valor >= 200) {
    valorFinal = valor * 0.90;
} else {
    valorFinal = valor;
}

alert("Valor final da compra: R$ " + valorFinal.toFixed(2));