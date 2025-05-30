// script.js

let clickCount = 0; // Variável para armazenar a quantidade de cliques
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const resetButton = document.getElementById('resetButton');

// Função para aumentar o contador de cliques
clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = `Cliques: ${clickCount}`;
});

// Função para resetar o contador
resetButton.addEventListener('click', () => {
    clickCount = 0;
    clickCountDisplay.textContent = `Cliques: ${clickCount}`;
});

