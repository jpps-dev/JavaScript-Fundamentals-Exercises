const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

const opcao = Number(prompt(
    "Escolha uma opção:\n" +
    "1 - Somar\n" +
    "2 - Subtrair\n" +
    "3 - Multiplicar\n" +
    "4 - Dividir"
));

let resultado;

if (opcao === 1) {
    resultado = numero1 + numero2;
} else if (opcao === 2) {
    resultado = numero1 - numero2;
} else if (opcao === 3) {
    resultado = numero1 * numero2;
} else if (opcao === 4) {
    resultado = numero1 / numero2;
} else {
    alert("Opção inválida");
}

if (opcao >= 1 && opcao <= 4) {
    alert("Resultado: " + resultado);
}