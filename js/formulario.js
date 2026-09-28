// ======================================================
// MÓDULO DO FORMULÁRIO
// ======================================================


import {
    obterCadastros,
    salvarCadastros
} from "./storage.js";


// ======================================================
// CONFIGURAÇÃO DO FORMULÁRIO
// ======================================================

export function configurarFormulario() {

    const formulario =
        document.querySelector("#formulario-cadastro");

    const nome =
        document.querySelector("#nome");

    const cpf =
        document.querySelector("#cpf");

    const dataNascimento =
        document.querySelector("#data_nascimento");

    const telefone =
        document.querySelector("#telefone");

    const email =
        document.querySelector("#email");

    const cep =
        document.querySelector("#cep");

    const endereco =
        document.querySelector("#endereco");

    const numero =
        document.querySelector("#numero");

    const cidade =
        document.querySelector("#cidade");

    const estado =
        document.querySelector("#estado");


    const erroNome =
        document.querySelector("#erro-nome");

    const erroCpf =
        document.querySelector("#erro-cpf");


    const regexCPF =
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;


    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            let formularioValido = true;


            // Validação do nome

            if (nome.value.trim() === "") {

                mostrarErro(
                    nome,
                    erroNome,
                    "O campo nome é obrigatório."
                );

                formularioValido = false;

            } else {

                removerErro(nome, erroNome);

            }


            // Validação do CPF

            if (!regexCPF.test(cpf.value)) {

                mostrarErro(
                    cpf,
                    erroCpf,
                    "Digite um CPF válido no formato XXX.XXX.XXX-XX."
                );

                formularioValido = false;

            } else {

                removerErro(cpf, erroCpf);

            }


            // Se o formulário estiver válido

            if (formularioValido) {

                const novoCadastro = {

                    nome: nome.value,
                    cpf: cpf.value,

                    dataNascimento:
                        dataNascimento.value,

                    telefone:
                        telefone.value,

                    email:
                        email.value,

                    cep:
                        cep.value,

                    endereco:
                        endereco.value,

                    numero:
                        numero.value,

                    cidade:
                        cidade.value,

                    estado:
                        estado.value

                };


                // Recupera os cadastros
                // utilizando o módulo storage.js

                const cadastros =
                    obterCadastros();


                cadastros.push(novoCadastro);


                // Salva utilizando storage.js

                salvarCadastros(cadastros);


                // Atualiza a interface

                renderizarCadastros();


                // Feedback visual

                Swal.fire({

                    title: "Cadastro realizado!",

                    text:
                        "Os dados foram salvos com sucesso.",

                    icon: "success",

                    confirmButtonText: "OK"

                });


            } else {

                Swal.fire({

                    title: "Verifique os campos!",

                    text:
                        "Existem informações inválidas no formulário.",

                    icon: "error",

                    confirmButtonText: "Corrigir"

                });

            }

        }
    );


    // Validação em tempo real do CPF

    cpf.addEventListener(
        "input",
        function() {

            if (!regexCPF.test(cpf.value)) {

                mostrarErro(
                    cpf,
                    erroCpf,
                    "CPF inválido."
                );

            } else {

                removerErro(
                    cpf,
                    erroCpf
                );

            }

        }
    );

}


// ======================================================
// RENDERIZAÇÃO DOS CADASTROS
// ======================================================

export function renderizarCadastros() {

    const listaCadastros =
        document.querySelector("#lista-cadastros");


    const cadastros =
        obterCadastros();


    let template = "";


    cadastros.forEach(function(cadastro) {

        template += `
            <section class="cadastro">

                <h3>${cadastro.nome}</h3>

                <p>
                    <strong>E-mail:</strong>
                    ${cadastro.email}
                </p>

                <p>
                    <strong>Telefone:</strong>
                    ${cadastro.telefone}
                </p>

                <p>
                    <strong>Cidade:</strong>
                    ${cadastro.cidade}
                </p>

                <p>
                    <strong>Estado:</strong>
                    ${cadastro.estado}
                </p>

            </section>
        `;

    });


    listaCadastros.innerHTML = template;

}


// ======================================================
// MENSAGENS DE ERRO
// ======================================================

function mostrarErro(
    campo,
    elementoErro,
    mensagem
) {

    campo.classList.add("campo-erro");

    elementoErro.textContent =
        mensagem;

}


function removerErro(
    campo,
    elementoErro
) {

    campo.classList.remove("campo-erro");

    elementoErro.textContent = "";

}