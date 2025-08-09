/* Crie um script Node.js que use um loop for para calcular a soma dos números de 1 a 100

Crie um script que use um loop while para simular um jogo de adivinhação, onde o usuário precisa adivinhar um número secreto entre 1 e 10.

Crie um array de nomes e use for...of para imprimir cada nome com uma saudação personalizada.

Crie um objeto com informações de um produto (nome, preço, quantidade) e use for...in para imprimir todas as suas propriedades.*/

// 1. Calcular a soma dos números de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
    console.log(`Soma até ${i}: ${soma}`);
}

// 2. Jogo de adivinhação
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa = 7; // Variável já declarada com um valor
let tentativas = 0;

console.log(`Número secreto gerado: ${numeroSecreto}`); // Para você ver qual foi gerado
console.log(`Sua tentativa: ${tentativa}`);

while (tentativa !== numeroSecreto) {
    tentativas++;
    
    if (tentativa < numeroSecreto) {
        console.log("Muito baixo! Tente novamente.");
        // Você pode modificar a tentativa aqui se quiser testar diferentes valores
        break; // Sai do loop após a primeira verificação
    }
    else if (tentativa > numeroSecreto) {
        console.log("Muito alto! Tente novamente.");
        // Você pode modificar a tentativa aqui se quiser testar diferentes valores
        break; // Sai do loop após a primeira verificação
    }
}

if (tentativa === numeroSecreto) {
    console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto}!`);
} else {
    console.log(`Você não acertou. O número secreto era ${numeroSecreto} e você tentou ${tentativa}.`);
}

// 3. Array de nomes com saudação personalizada
const nomes = ["Alice", "Bob", "Charlie", "Diana"];
for (const nome of nomes) {
    console.log(`Olá, ${nome}! Bem-vindo(a) ao nosso programa.`);
}

// 4. Objeto com informações de um produto
const produto = {
    nome: "Notebook",
    preco: 2500,
    quantidade: 5
};
for (const propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}