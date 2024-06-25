function calculator(num1, num2, op) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "unknown value";
    }
    
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "undefined";
            } else {
                return num1 / num2;
            }
        default:
            return "unknown value";
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    const result = calculator(num1, num2, operator);
    document.getElementById('result').innerText = `Result: ${result}`;
}
