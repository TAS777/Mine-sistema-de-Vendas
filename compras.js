// compras.js

const carrinho = [];

function comprar(nome) {
    const produtoComprado = produtos.find(produto => produto.nome === nome);

    if (produtoComprado) {
        carrinho.push(produtoComprado);
        alert(`Produto ${nome} adicionado ao carrinho!`);
    }
}
