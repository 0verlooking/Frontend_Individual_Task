// Таблиця номіналів карт
const cards = [
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "Валет", value: 2 },
    { name: "Дама", value: 3 },
    { name: "Король", value: 4 },
    { name: "Туз", value: 11 },
];

let playerHand = [];
let computerHand = [];

function startGame() {
    const playerName = document.getElementById("player-name").value;
    if (!playerName) {
        alert("Будь ласка, введіть ім'я гравця.");
        return;
    }

    // Очищення рук гравця та комп'ютера
    playerHand = [];
    computerHand = [];
    updateHands();

    // Роздача 3 карт для кожного гравця
    for (let i = 0; i < 3; i++) {
        drawCard(playerHand);
        drawCard(computerHand);
    }

    // Визначення переможця
    const playerScore = calculateScore(playerHand);
    const computerScore = calculateScore(computerHand);
    displayResult(playerScore, computerScore);
}

function drawCard(hand) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    hand.push(card);
    updateHands();
}

function updateHands() {
    displayHand("player-hand", playerHand);
    displayHand("computer-hand", computerHand);
}

function displayHand(elementId, hand) {
    const handContainer = document.getElementById(elementId);
    handContainer.innerHTML = "<h2>" + (elementId.includes("player") ? "Ваша рука:" : "Рука комп'ютера:") + "</h2>";
    
    hand.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.textContent = card.name;
        cardElement.addEventListener("click", () => handleCardClick(card, hand));
        handContainer.appendChild(cardElement);
    });
}

function handleCardClick(card, hand) {
    // Додаткова логіка при кліку на карту, якщо необхідно
}

function calculateScore(hand) {
    return hand.reduce((sum, card) => sum + card.value, 0);
}

function displayResult(playerScore, computerScore) {
    const resultElement = document.getElementById("result");
    if (playerScore > computerScore) {
        resultElement.textContent = "Ви виграли!";
    } else if (playerScore < computerScore) {
        resultElement.textContent = "Ви програли. Спробуйте ще раз.";
    } else {
        resultElement.textContent = "Нічия!";
    }
}
