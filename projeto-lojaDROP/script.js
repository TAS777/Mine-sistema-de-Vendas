function mostrarDetalhes(produto) {
    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescricao = document.getElementById("modal-descricao");
    const modalBotoes = document.getElementById("modal-botoes");

    switch (produto) {
        case "produto1":
            modalTitulo.innerText = "Produto 1";
            modalDescricao.innerHTML = "Detalhes do Produto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
            modalBotoes.innerHTML = "<button onclick='saibaMais(\"https://www.seusite.com/produto1\")'>Saiba Mais</button> <button onclick='compreAgora(\"https://www.seusite.com/compra1\")'>Compre Agora</button>";
            break;
        case "produto2":
            modalTitulo.innerText = "Produto 2";
            modalDescricao.innerHTML = "Detalhes do Produto 2. COMPRE AGORA MESMO NA SHOPE OU FALE COM A GENTE.";
            modalBotoes.innerHTML = "<button onclick='saibaMais(\"https://www.seusite.com/produto2\")'>Saiba Mais</button> <button onclick='compreAgora(\"https://www.seusite.com/compra2\")'>Compre Agora</button>";
            break;
        // Adicione mais casos conforme necessário
    }

    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function saibaMais(link) {
    window.open(link, "_blank");
}

function compreAgora(link) {
    window.open(link, "_blank");
}