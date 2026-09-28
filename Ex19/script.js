const opcao = Number(prompt(
    "POSTO DE COMBUSTÍVEL\n" +
    "1 - Gasolina - R$ 6,20 por litro\n" +
    "2 - Etanol - R$ 4,30 por litro\n" +
    "3 - Diesel - R$ 6,00 por litro"
));

const litros = Number(prompt("Digite a quantidade de litros:"));

let combustivel;
let preco;

if (opcao === 1) {
    combustivel = "Gasolina";
    preco = 6.20;
} else if (opcao === 2) {
    combustivel = "Etanol";
    preco = 4.30;
} else if (opcao === 3) {
    combustivel = "Diesel";
    preco = 6.00;
} else {
    alert("Combustível inválido");
}

if (opcao >= 1 && opcao <= 3) {
    const valorAntes = preco * litros;
    let desconto = 0;

    if (valorAntes > 200) {
        desconto = valorAntes * 0.05;
    }

    const valorFinal = valorAntes - desconto;

    alert(
        "Combustível: " + combustivel +
        "\nQuantidade: " + litros + " litros" +
        "\nValor antes do desconto: R$ " + valorAntes.toFixed(2) +
        "\nValor do desconto: R$ " + desconto.toFixed(2) +
        "\nValor final: R$ " + valorFinal.toFixed(2)
    );
}