function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}

console.log("🔧 Aplicación iniciada");
console.log("➡️ Suma(5, 3):", suma(5, 3));
console.log("➡️ Resta(10, 4):", resta(10, 4));
console.log("➡️ Multiplicacion(6, 7):", multiplicacion(6, 7));
console.log("➡️ Division(20, 4):", division(20, 4));

function modulo(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a % b;
}

module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    modulo,
};
