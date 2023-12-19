function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.style.display = (menuLinks.style.display === 'none' || menuLinks.style.display === '') ? 'block' : 'none';
}



document.addEventListener('DOMContentLoaded', function () {
    const categorias = ['Roupas', 'Tênis', 'Acessórios'];
    const subcategorias = {
        'Roupas': ['Camisa', 'Bermudas', 'Calças'],
        'Tênis': ['Tênis Coleção Nike', 'Tênis Casual'],
        'Acessórios': ['Bonés', 'Cordões']
    };

    const produtos = [
        { categoria: 'Camisa', nome: 'Camisa Hilfiger', preco: 99.99, imagem: 'imagens/camisa2tommy.jpg' },
        { categoria: 'Bermudas', nome: 'Bermuda Jeans', preco: 29.99, imagem: 'bermuda1.jpg' },
        { categoria: 'Calças', nome: 'Calça Chino', preco: 49.99, imagem: 'calca1.jpg' },
        { categoria: 'Tênis Coleção Nike', nome: 'Tênis just do it', preco: 189.99, imagem: 'imagens/tenis/tenis m/nike1.jpeg' },
        { categoria: 'Tênis Casual', nome: 'Tênis 2', preco: 79.99, imagem: 'tenis2.jpg' },
        { categoria: 'Bonés', nome: 'boné 1 ', preco: 79.99, imagem: 'tenis2.jpg' },
        { categoria: 'Cordões', nome: 'Cordão de ouro', preco: 100.99, imagem: 'tenis2.jpg' },

        // Adicione mais produtos conforme necessário
    ];

    const categoriasElement = document.getElementById('categorias');
    const produtosElement = document.getElementById('produtos');

    categorias.forEach(categoria => {
        const categoriaBtn = document.createElement('button');
        categoriaBtn.textContent = categoria;
        categoriaBtn.addEventListener('click', () => exibirSubcategorias(categoria));
        categoriasElement.appendChild(categoriaBtn);
    });

    function exibirSubcategorias(categoria) {
        produtosElement.innerHTML = '';
        const subcategoriasCategoria = subcategorias[categoria];

        subcategoriasCategoria.forEach(subcategoria => {
            const subcategoriaBtn = document.createElement('button');
            subcategoriaBtn.textContent = subcategoria;
            subcategoriaBtn.addEventListener('click', () => exibirProdutos(categoria, subcategoria));
            produtosElement.appendChild(subcategoriaBtn);
        });
    }

    function exibirProdutos(categoria, subcategoria) {
        produtosElement.innerHTML = '';
        const produtosCategoria = produtos.filter(produto => produto.categoria === subcategoria);

        produtosCategoria.forEach(produto => {
            const produtoArticle = document.createElement('article');
            produtoArticle.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="comprar('${produto.nome}')">Comprar</button>
            `;
            produtosElement.appendChild(produtoArticle);
        });
    }

    window.comprar = function (nome) {
        alert(`Produto ${nome} adicionado ao carrinho!`);
    };

    exibirSubcategorias(categorias[0]); // Exibir subcategorias da primeira categoria por padrão
});

