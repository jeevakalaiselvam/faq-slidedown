const container = document.getElementById("container");

const questions = [
    "How do the different plans compare?",
    "I already have an Evernote Basic account. How do I select a different plan?",
    "I've upgraded but nothing has changed. What should I do?",
    "Can I use Evernote Points, redemption codes, or gift cards to pay for a subscription?",
    "Can I subscribe to Evernote Plus?",
];

const answers = [
    `For a detailed comparison of Evernote account plans, see this <a href="https://help.evernote.com/hc/en-us/articles/209005157">article.<a/>`,
    `Go to your <a href="https://www.evernote.com/Settings.action">account settings</a> to upgrade.`,
    `Make sure you <a href="https://help.evernote.com/hc/articles/209005257">have the latest version of Evernote</a> installed on all your devices and sync your account to take advantage of all the new features.`,
    `Yes. <a href="https://help.evernote.com/hc/articles/208314268">Evernote Points</a>, valid redemption codes, or gift cards may be used towards Evernote Premium.`,
    `As of early April 2018, Evernote Plus is no longer available for purchase. To get more features than Basic provides, upgrade to Premium. Note: Current Plus subscribers will maintain their subscription as long as their subscription remains active.`,
];

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
