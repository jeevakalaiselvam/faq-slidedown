const container = document.getElementById("container");

const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
];

const answers = ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5"];

function setupFAQ() {
    questions.forEach((question, index) => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="faq-card" id="faq-card${index}">
                <h2 class="question">${questions[index]}</h2>
                <p class="answer">${answers[index]}</p>
                <i class="fas fa-times" id="close-${index}"></i>
                <i class="fas fa-chevron-down" id="open-${index}"></i>
            </div>
        `;

        container.appendChild(card);

        const cardMain = document.getElementById(`faq-card${index}`);
        const openBtn = document.getElementById(`open-${index}`);
        const closeBtn = document.getElementById(`close-${index}`);
        openBtn.addEventListener("click", () => {
            cardMain.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            cardMain.classList.remove("active");
        });
    });
}

setupFAQ();
