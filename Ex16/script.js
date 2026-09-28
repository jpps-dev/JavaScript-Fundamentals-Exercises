const valor = Number(prompt("Digite o valor da compra:"));

const opcao = Number(prompt(
    "FORMA DE PAGAMENTO\n" +
    "1 - Pix\n" +
    "2 - Dinheiro\n" +
    "3 - Cartão à vista\n" +
    "4 - Cartão parcelado"
));

let valorFinal;

if (opcao === 1) {
    valorFinal = valor * 0.90;
} else if (opcao === 2) {
    valorFinal = valor * 0.95;
} else if (opcao === 3) {
    valorFinal = valor;
} else if (opcao === 4) {
    valorFinal = valor * 1.10;
} else {
    alert("Forma de pagamento inválida");
}

if (opcao >= 1 && opcao <= 4) {
    alert("Valor final a pagar: R$ " + valorFinal.toFixed(2));
}