// ======================================================
// MÓDULO DE NAVEGAÇÃO SPA
// ======================================================


import {
    renderizarProjetos
} from "./projetos.js";


import {
    configurarFormulario,
    renderizarCadastros
} from "./formulario.js";


// ======================================================
// FUNÇÃO DE NAVEGAÇÃO
// ======================================================

export function navegar(rota) {

    const conteudo =
        document.querySelector("#conteudo");


    // INÍCIO

    if (rota === "/") {

        conteudo.innerHTML = `
            <section>

                <h2>
                    Como funciona o nosso trabalho?
                </h2>

                <p>
                    Nossa ONG atua com
                    <strong>
                        juvenis e adolescentes de 10 a 15 anos
                    </strong>,
                    aplicando projetos que estimulam a área
                    social, cultural e esportiva, com o
                    objetivo de promover o desenvolvimento
                    integral dos jovens atendidos.
                </p>

            </section>
        `;


    // PROJETOS

    } else if (rota === "/projetos") {

        conteudo.innerHTML = `
            <section>

                <h2>Projetos</h2>

                <p>
                    Conheça os projetos que desenvolvemos
                    para atender os jovens da nossa comunidade.
                </p>

            </section>

            <div id="lista-projetos"></div>
        `;


        renderizarProjetos();


    // CADASTRO

    } else if (rota === "/cadastro") {

        conteudo.innerHTML = `
            <section>

                <h2>Cadastro</h2>

                <p>
                    Preencha o formulário abaixo para
                    se cadastrar em nossos projetos.
                </p>


                <form id="formulario-cadastro">


                    <fieldset>

                        <legend>
                            Dados Pessoais
                        </legend>


                        <p>
                            <label for="nome">
                                Nome Completo:
                            </label>

                            <input
                                type="text"
                                id="nome"
                                required
                            >
                        </p>

                        <small
                            id="erro-nome"
                            class="mensagem-erro">
                        </small>


                        <p>
                            <label for="cpf">
                                CPF:
                            </label>

                            <input
                                type="text"
                                id="cpf"
                                placeholder="000.000.000-00"
                                required
                            >
                        </p>

                        <small
                            id="erro-cpf"
                            class="mensagem-erro">
                        </small>


                        <p>
                            <label for="data_nascimento">
                                Data de nascimento:
                            </label>

                            <input
                                type="date"
                                id="data_nascimento"
                                required
                            >
                        </p>

                    </fieldset>


                    <fieldset>

                        <legend>Contato</legend>


                        <p>
                            <label for="telefone">
                                Telefone:
                            </label>

                            <input
                                type="tel"
                                id="telefone"
                                placeholder="(00) 00000-0000"
                                required
                            >
                        </p>


                        <p>
                            <label for="email">
                                E-mail:
                            </label>

                            <input
                                type="email"
                                id="email"
                                required
                            >
                        </p>

                    </fieldset>


                    <fieldset>

                        <legend>Endereço</legend>


                        <p>
                            <label for="cep">
                                CEP:
                            </label>

                            <input
                                type="text"
                                id="cep"
                                placeholder="00000-000"
                                required
                            >
                        </p>


                        <p>
                            <label for="endereco">
                                Endereço:
                            </label>

                            <input
                                type="text"
                                id="endereco"
                                required
                            >
                        </p>


                        <p>
                            <label for="numero">
                                Número:
                            </label>

                            <input
                                type="text"
                                id="numero"
                                required
                            >
                        </p>


                        <p>
                            <label for="cidade">
                                Cidade:
                            </label>

                            <input
                                type="text"
                                id="cidade"
                                required
                            >
                        </p>


                        <p>
                            <label for="estado">
                                Estado:
                            </label>

                            <input
                                type="text"
                                id="estado"
                                required
                            >
                        </p>

                    </fieldset>


                    <button type="submit">
                        Cadastrar
                    </button>

                </form>


                <h2>
                    Cadastros realizados
                </h2>

                <div id="lista-cadastros"></div>

            </section>
        `;


        configurarFormulario();

        renderizarCadastros();

    }

}