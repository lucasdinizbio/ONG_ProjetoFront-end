const botaoContraste = document.querySelector("#modo-contraste");

if (botaoContraste) {
    botaoContraste.addEventListener("click", () => {

        document.body.classList.toggle("alto-contraste");

        const ativo =
            document.body.classList.contains("alto-contraste");

        botaoContraste.textContent =
            ativo ? "Contraste normal" : "Alto contraste";

        botaoContraste.setAttribute(
            "aria-label",
            ativo
                ? "Desativar modo de alto contraste"
                : "Ativar modo de alto contraste"
        );
    });
}