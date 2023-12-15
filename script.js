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
            modalTitulo.innerText = "PROMOÇÃO DE TÊNIS. R$99,90 QUALQUER MODELO";
            modalDescricao.innerHTML = "Tênis Disponivel a PRONTA ENTREGA, e diversos outros modelos, para celebrar o fim de ano. Disponivel a pronta entrega no nosso Whatsaapp , CLICK NO BOTÃO COMPRAR AGORA";
            modalBotoes.innerHTML = "<button onclick='saibaMais(\"https://wa.me/c/559881286938\")'>CATALOGO</button> <button onclick='compreAgora(\"https://wa.me/message/FFU5OZUU7HDRL1\")'>Compre Agora</button>";
            break;
        case "produto2":
            modalTitulo.innerText = "5 Camisas por Apenas R$100";
            modalDescricao.innerHTML = "5 Camisas por Apenas R$100. POR TEMPO LIMITADO!! È ISSO MESMO ! COMPRE AGORA NA SHOPE OU PEÇA NO WHATSAPP, ENTRAGA GRATIS PARA SÃO LUIS.";
            modalBotoes.innerHTML = "<button onclick='saibaMais(\https://shp.ee/5e4n9x3\")'>Link Shopee</button> <button onclick='compreAgora(\"https://wa.me/p/6882087665215068/559881286938\")'>Compre Agora</button>";
            break;
        case "produto3":
            modalTitulo.innerText = "camisa tommy";
            modalDescricao.innerHTML = "5 Camisas por Apenas R$100. POR TEMPO LIMITADO!! È ISSO MESMO ! COMPRE AGORA NA SHOPE OU PEÇA NO WHATSAPP, ENTRAGA GRATIS PARA SÃO LUIS.";
            modalBotoes.innerHTML = "<button onclick='saibaMais(\https://shp.ee/5e4n9x3\")'>Link Shopee</button> <button onclick='compreAgora(\"https://wa.me/p/6882087665215068/559881286938\")'>Compre Agora</button>";
            break;
        // Adicione mais casos conforme necessário
    }

    document.addEventListener('DOMContentLoaded', function () {
        const galeria = document.getElementById('galeria');
        const imagens = document.querySelectorAll('.galeria img');
        let index = 0;

        setInterval(() => {
            index = (index + 1) % imagens.length;
            updateGaleria();
        }, 2000);

        function updateGaleria() {
            const translateValue = -index * 100 + '%';
            galeria.style.transform = `translateX(${translateValue})`;
        }
    });


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