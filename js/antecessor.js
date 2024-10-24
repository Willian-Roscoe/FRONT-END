const readline = require('readline');

// Cria uma interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário
rl.question("Digite um número: ", (valor) => {
    // Converte o valor para um número
    const numero = Number(valor);

    // Verifica se a conversão foi bem-sucedida
    if (!isNaN(numero)) {
        // Calcula o antecessor
        const antecessor = numero - 1;

        // Exibe o antecessor
        console.log("O antecessor de " + numero + " é " + antecessor);
    } else {
        console.log("Por favor, digite um número válido.");
    }

    // Fecha a interface
    rl.close();
});
