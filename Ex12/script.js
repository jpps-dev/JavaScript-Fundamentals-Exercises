const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const numero3 = Number(prompt("Digite o terceiro número:"));

let maior;

if (numero1 >= numero2 && numero1 >= numero3) {
    maior = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maior = numero2;
} else {
    maior = numero3;
}

alert("O maior número é: " + maior);