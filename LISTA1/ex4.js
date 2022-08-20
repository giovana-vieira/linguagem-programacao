function calcular() {
    let num1 = document.getElementById('nota1').value;
    let num2 = document.getElementById('nota2').value;
    let resultado = ((num1 * 2) + (num2 * 3)) / (2 + 3);
    document.getElementById('resultado').innerHTML =
        `Média ponderada: ${resultado}`;
}