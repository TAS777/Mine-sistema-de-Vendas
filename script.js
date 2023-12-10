function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.style.display = (menuLinks.style.display === 'none' || menuLinks.style.display === '') ? 'block' : 'none';
}

function mostrarDetalhes(produto) {
    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescricao = document.getElementById("modal-descricao");
    const modalBotoes = document.getElementById("modal-botoes");

    switch (produto) {
        case "produto1":
            modalTitulo.innerText = "Camisa Tommy Hilfiger";
            modalDescricao.innerHTML = "Camisa Gola Polo, Qualidade inigualável, uma paleta de cores vibrantes para celebrar o fim de ano. Compre Agora na nossa loja shopee ou chama no whatsaapp";
            modalBotoes.innerHTML = "<button onclick='saibaMais(\"https://shp.ee/rakrfhg\")'>Link Shopee</button> <button onclick='compreAgora(\"https://wa.me/message/FFU5OZUU7HDRL1\")'>Compre Agora</button>";
            break;
        case "produto2":
            modalTitulo.innerText = "5 Camisas por Apenas R$100";
            modalDescricao.innerHTML = "5 Camisas por Apenas R$100. POR TEMPO LIMITADO!! È ISSO MESMO ! COMPRE AGORA NA SHOPE OU PEÇA NO WHATSAPP, ENTRAGA GRATIS PARA SÃO LUIS.";
            modalBotoes.innerHTML = "<button onclick='saibaMais(\https://shp.ee/5e4n9x3\")'>Link Shopee</button> <button onclick='compreAgora(\"https://wa.me/message/FFU5OZUU7HDRL1\")'>Compre Agora</button>";
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