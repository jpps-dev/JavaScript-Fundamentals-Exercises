const produtoOpcao = Number(prompt(
    "PRODUTOS\n" +
    "1 - Camiseta - R$ 50,00\n" +
    "2 - Calça - R$ 100,00\n" +
    "3 - Tênis - R$ 200,00"
));

const quantidade = Number(prompt("Digite a quantidade desejada:"));

let produto;
let preco;

if (produtoOpcao === 1) {
    produto = "Camiseta";
    preco = 50;
} else if (produtoOpcao === 2) {
    produto = "Calça";
    preco = 100;
} else if (produtoOpcao === 3) {
    produto = "Tênis";
    preco = 200;
} else {
    alert("Produto inválido");
}

if (produtoOpcao >= 1 && produtoOpcao <= 3) {
    const subtotal = preco * quantidade;

    const pagamento = Number(prompt(
        "FORMA DE PAGAMENTO\n" +
        "1 - Pix: 10% de desconto\n" +
        "2 - Dinheiro: 5% de desconto\n" +
        "3 - Cartão: sem desconto"
    ));

    let desconto = 0;

    if (pagamento === 1) {
        desconto = subtotal * 0.10;
    } else if (pagamento === 2) {
        desconto = subtotal * 0.05;
    } else if (pagamento === 3) {
        desconto = 0;
    } else {
        alert("Forma de pagamento inválida");
    }

    if (pagamento >= 1 && pagamento <= 3) {
        const valorFinal = subtotal - desconto;

        alert(
            "Produto: " + produto +
            "\nQuantidade: " + quantidade +
            "\nSubtotal: R$ " + subtotal.toFixed(2) +
            "\nValor do desconto: R$ " + desconto.toFixed(2) +
            "\nValor final: R$ " + valorFinal.toFixed(2)
        );
    }
}