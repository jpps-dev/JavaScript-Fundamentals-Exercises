const metros = Number(prompt("Digite um valor em metros:"));

const opcao = Number(prompt(
    "Escolha uma opção:\n" +
    "1 - Converter para centímetros\n" +
    "2 - Converter para milímetros\n" +
    "3 - Converter para quilômetros"
));

let resultado;

if (opcao === 1) {
    resultado = metros * 100;
    alert("Resultado: " + resultado + " cm");
} else if (opcao === 2) {
    resultado = metros * 1000;
    alert("Resultado: " + resultado + " mm");
} else if (opcao === 3) {
    resultado = metros / 1000;
    alert("Resultado: " + resultado + " km");
} else {
    alert("Opção inválida");
}