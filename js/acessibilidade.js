const botaoContraste = document.querySelector("#modo-contraste");

const contrasteSalvo = localStorage.getItem("altoContraste");

if (contrasteSalvo === "ativo") {
    document.body.classList.add("alto-contraste");
    botaoContraste?.setAttribute(
        "aria-label",
        "Desativar modo de alto contraste"
    );
}

botaoContraste?.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

    const ativo = document.body.classList.contains("alto-contraste");

    localStorage.setItem(
        "altoContraste",
        ativo ? "ativo" : "inativo"
    );

    botaoContraste.setAttribute(
        "aria-label",
        ativo
            ? "Desativar modo de alto contraste"
            : "Ativar modo de alto contraste"
    );
});