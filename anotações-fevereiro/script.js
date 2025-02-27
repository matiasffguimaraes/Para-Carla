document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("questionsForm");
    const responsesContainer = document.getElementById("responsesContainer");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const question1 = document.getElementById("question1").value.trim();
        const question2 = document.getElementById("question2").value.trim();
        const question3 = document.getElementById("question3").value.trim();
        const question4 = document.getElementById("question4").value.trim();

        if (!question1 || !question2 || !question3 || !question4) {
            alert("Por favor, responda todas as perguntas antes de enviar.");
            return;
        }

        responsesContainer.innerHTML = `
            <p><strong>Qual seria um bom jeito de eu te conhecer melhor sem te atrapalhar na sua rotina?</strong> ${question1}</p>
            <p><strong>Se eu te acompanhasse até o ponto de ônibus um dia desses, você aceitaria?</strong> ${question2}</p>
            <p><strong>Se eu disser que estou disposto a esperar o tempo que for para te conhecer melhor, o que você pensaria?</strong> ${question3}</p>
            <p><strong>Se tivesse que dar um conselho para mim que estou apaixonando por você, qual seria?</strong> ${question4}</p>
        `;

        form.reset();
    });
});
