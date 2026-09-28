// ======================================================
// MÓDULO DE ARMAZENAMENTO
// ======================================================


// Recupera os cadastros armazenados no localStorage

export function obterCadastros() {

    const cadastrosSalvos =
        localStorage.getItem("cadastros");


    if (cadastrosSalvos) {

        return JSON.parse(cadastrosSalvos);

    } else {

        return [];

    }

}


// Salva o array de cadastros no localStorage

export function salvarCadastros(cadastros) {

    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );

}