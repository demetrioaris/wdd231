document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    timestampField.value = new Date().toISOString();

    const npModal = document.getElementById("npModal");
    const bronzeModal = document.getElementById("bronzeModal");
    const silverModal = document.getElementById("silverModal");
    const goldModal = document.getElementById("goldModal");

    const npButton = document.getElementById("npButton");
    const bronzeButton = document.getElementById("bronzeButton");
    const silverButton = document.getElementById("silverButton");
    const goldButton = document.getElementById("goldButton");

    function displayModal(modal, title, content) {
        modal.innerHTML = `
            <div class="modal-content">
                <button id="close-${modal.id}">&times;</button>
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        `;
        modal.showModal();

        document
            .getElementById(`close-${modal.id}`)
            .addEventListener("click", () => {
                modal.close();
            });
    }

    npButton.addEventListener("click", () => {
        displayModal(
            npModal,
            "Non Profit Membership Benefits",
            "Access to community events, free resources, and more."
        );
    });

    bronzeButton.addEventListener("click", () => {
        displayModal(
            bronzeModal,
            "Bronze Membership Benefits",
            "Discounted services, networking opportunities, and exclusive events."
        );
    });

    silverButton.addEventListener("click", () => {
        displayModal(
            silverModal,
            "Silver Membership Benefits",
            "Includes everything from Bronze plus premium resources and marketing support."
        );
    });

    goldButton.addEventListener("click", () => {
        displayModal(
            goldModal,
            "Gold Membership Benefits",
            "Full premium support, priority services, and elite event invitations."
        );
    });
});

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
        currentWordIndex === maxWordIndex
            ? words[0]
            : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);
