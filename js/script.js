function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function removeLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    display.value = eval(display.value);
}

function toggleDarkMode() {
    let calculator = document.getElementById('calculator');
    calculator.classList.toggle('dark-mode');
}
