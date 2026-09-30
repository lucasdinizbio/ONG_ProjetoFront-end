// ======================================================
// MÓDULO DE PROJETOS
// ======================================================


const projetos = [

    {
        titulo: "Encontros semanais e recreativos",
        status: "Ativo",
        descricao:
            "Durante os finais de semana, realizamos encontros recreativos para os adolescentes, promovendo atividades físicas, jogos educativos e momentos de socialização."
    },

    {
        titulo: "Oficina de especialidades",
        status: "Ativo",
        descricao:
            "Oferecemos oficinas de especialidades em diversas áreas, como artes manuais, estudo da natureza, atividade campestre e atividades missionárias, promovendo o desenvolvimento de habilidades e talentos dos adolescentes."
    },

    {
        titulo: "Acampamentos e trilhas",
        status: "Ativo",
        descricao:
            "Organizamos acampamentos e trilhas para os adolescentes, proporcionando experiências ao ar livre, contato com a natureza e aprendizado sobre preservação ambiental."
    },

    {
        titulo: "Competições interclasses",
        status: "Ativo",
        descricao:
            "Organizamos competições interclasses para os adolescentes, promovendo o espírito de equipe, a saúde e o desenvolvimento de habilidades."
    }

];


// Renderiza os projetos na página

export function renderizarProjetos() {

    const listaProjetos =
        document.querySelector("#lista-projetos");


    let template = "";


    projetos.forEach(function(projeto) {

        template += `
            <section>

                <h2>${projeto.titulo}</h2>

                <span class="badge badge-ativo">
                    ${projeto.status}
                </span>

                <p>${projeto.descricao}</p>

            </section>
        `;

    });


    listaProjetos.innerHTML = template;

}

const modalOficinas = document.querySelector("#modal-oficinas");
const botaoFecharModal = document.querySelector("#fechar-modal");

botaoFecharModal.addEventListener("click", function () {
    modalOficinas.style.display = "none";
});