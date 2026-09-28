// ======================================================
// ARQUIVO PRINCIPAL DA APLICAÇÃO
// ======================================================


import {
    navegar
} from "./navegacao.js";


console.log("Aplicação carregada!");


// Seleciona os links da SPA

const links =
    document.querySelectorAll("[data-link]");


// Configura a navegação

links.forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            const rota =
                link.getAttribute("data-route");

            navegar(rota);

        }
    );

});


// Carrega a página inicial

navegar("/");