const idade = Number(prompt("Digite sua idade:"));

const opcao = Number(prompt(
    "FILMES\n" +
    "1 - Filme livre\n" +
    "2 - Filme com classificação de 12 anos\n" +
    "3 - Filme com classificação de 16 anos\n" +
    "4 - Filme com classificação de 18 anos"
));

let classificacao;
let idadeMinima;

if (opcao === 1) {
    classificacao = "Livre";
    idadeMinima = 0;
} else if (opcao === 2) {
    classificacao = "12 anos";
    idadeMinima = 12;
} else if (opcao === 3) {
    classificacao = "16 anos";
    idadeMinima = 16;
} else if (opcao === 4) {
    classificacao = "18 anos";
    idadeMinima = 18;
} else {
    alert("Opção inválida");
}

if (opcao >= 1 && opcao <= 4) {
    if (idade >= idadeMinima) {
        alert("Filme: " + classificacao + "\nVocê possui idade suficiente para assisti-lo.");
    } else {
        alert("Filme: " + classificacao + "\nVocê não possui idade suficiente para assisti-lo.");
    }
}