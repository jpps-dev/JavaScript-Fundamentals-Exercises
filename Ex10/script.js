const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;
let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 4) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

alert("Média: " + media.toFixed(2) + "\nSituação: " + situacao);