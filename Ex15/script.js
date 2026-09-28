const opcao = Number(prompt(
    "CARDÁPIO\n" +
    "1 - Hambúrguer - R$ 15,00\n" +
    "2 - Cachorro-quente - R$ 12,00\n" +
    "3 - Pizza - R$ 20,00\n" +
    "4 - Refrigerante - R$ 6,00"
));

const quantidade = Number(prompt("Digite a quantidade:"));
let produto;
let preco;

if (opcao === 1) {
    produto = "Hambúrguer";
    preco = 15;
} else if (opcao === 2) {
    produto = "Cachorro-quente";
    preco = 12;
} else if (opcao === 3) {
    produto = "Pizza";
    preco = 20;
} else if (opcao === 4) {
    produto = "Refrigerante";
    preco = 6;
} else {
    alert("Produto inválido");
}

if (opcao >= 1 && opcao <= 4) {
    const total = preco * quantidade;
    alert("Produto: " + produto +
          "\nQuantidade: " + quantidade +
          "\nValor total: R$ " + total.toFixed(2));
}