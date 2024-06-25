function calculator(num1, num2, op) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "unknown value";
    } else {
        if (op == "+") {
            return num1 + num2;
        }
        if (op == "-") {
            return num1 - num2;
        }
        if (op == "*") {
            return num1 * num2;
        }
        if (op == "/" && num2 != 0) {
            return num1 / num2;
        }

        return "unknown value";
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value.trim();

    const result = calculator(num1, num2, operator);
    document.getElementById('result').innerText = `Result: ${result}`;
}