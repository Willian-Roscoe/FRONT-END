const readline = require('readline');

// Catálogo de doces
const catalogo = [
    {
        id: 1,
        nome: "Trufa",
        preco: 8.00,
        descricao: "Trufas de diversos sabores.",
        quantidadeEmEstoque: 100
    },
    {
        id: 2,
        nome: "Bolo no Pote",
        preco: 10.00,
        descricao: "Chocolate ao leite cremoso e saboroso.",
        quantidadeEmEstoque: 50
    },
    {
        id: 3,
        nome: "Copo da felicidade",
        preco: 15.00,
        descricao: "Chocolate ao leite cremoso e saboroso.",
        quantidadeEmEstoque: 200
    },
    {
        id: 4,
        nome: "Docinho ",
        preco: 3.00,
        descricao: "Docinhos de diversos sabores.",
        quantidadeEmEstoque: 30
    },
    {
        id: 5,
        nome: "Pudim",
        preco: 25.00,
        descricao: "Pudim saboroso.",
        quantidadeEmEstoque: 150
    }
];

// Carrinho de compras
let carrinho = [];

// Criando interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log()
console.log("---------------LOJA DOCE COLMEIA!------------------")
console.log()

// Função para exibir o catálogo
function exibirCatalogo() {
    console.log("\nCatálogo de Doces:");
    catalogo.forEach(produto => {
        console.log(`ID: ${produto.id}`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
        console.log(`Descrição: ${produto.descricao}`);
        console.log(`Quantidade em Estoque: ${produto.quantidadeEmEstoque}`);
        console.log('--------------------------');
    });
}


// Função principal para gerenciar a interação do usuário
function menu() {
    console.log("\nEscolha uma opção:");
    console.log("1. Ver catálogo");
    console.log("2. Adicionar ao carrinho");
    console.log("3. Ver carrinho");
    console.log("4. Cancelar item do carrinho");
    console.log("5. Sair");

    rl.question("Opção: ", (opcao) => {
        switch (opcao) {
            case '1':
                exibirCatalogo();
                menu();
                break;
            case '2':
                rl.question("Digite o ID do produto: ", (id) => {
                    rl.question("Digite a quantidade: ", (quantidade) => {
                        adicionarAoCarrinho(Number(id), Number(quantidade));
                        menu();
                    });
                });
                break;
            case '3':
                exibirCarrinho();
                menu();
                break;
            case '4':
                rl.question("Digite o ID do item que deseja cancelar: ", (id) => {
                    cancelarItem(Number(id));
                    menu();
                });
                break;
            case '5':
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                menu();
                break;
        }
    });
}

// Inicia o menu
menu();