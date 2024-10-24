const readline = require('readline');

// Criação de entrada e saída de usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário
function lerEntradas() {
    rl.question('Digite a largura do retângulo: ', (largura) => {
        rl.question('Digite a altura do retângulo: ', (altura) => {
            // Convertendo as entradas para números
            const larguraNum = parseFloat(largura);
            const alturaNum = parseFloat(altura);
            
            // Calculando a área
            const area = larguraNum * alturaNum;
            console.log(`A área do retângulo é: ${area}`);
            
            // Fechando a interface
            rl.close();
        });
    });
}

// Chama a função para iniciar a leitura das entradas
lerEntradas();
