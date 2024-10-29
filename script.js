let timeInput = document.getElementById('timer');
let startButton = document.getElementById('start');
let clickButton = document.getElementById('clicker');
let resultDisplay = document.getElementById('result');
let clickCountDisplay = document.getElementById('clickCount');

let clicks = 0;
let interval;

startButton.addEventListener('click', function() {
    let timeLeft = parseInt(timeInput.value);

    if (timeLeft > 0 && timeLeft <= 30) {
        clicks = 0;
        clickButton.disabled = false;
        resultDisplay.textContent = "Результат: 0 кликов в секунду";
        clickCountDisplay.textContent = "Кликов: 0";

        interval = setInterval(function() {
            if (timeLeft > 0) {
                timeLeft--;
                timeInput.value = timeLeft;
            } else {
                clearInterval(interval);
                clickButton.disabled = true;
                let cps = (clicks / 10).toFixed(2);
                resultDisplay.textContent = `Результат: ${cps} кликов в секунду`;
                timeInput.value = 0;

                clicks = 0;
                clickCountDisplay.textContent = "Кликов: 0";
            }
        }, 1000);
    }
});

clickButton.addEventListener('click', function() {
    clicks++;
    clickCountDisplay.textContent = `Кликов: ${clicks}`;
});