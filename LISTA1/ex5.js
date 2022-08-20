function calcular() {
    let valor = document.getElementById('valor').value;
    let resultado = valor - (valor * 10/100);
    document.getElementById('resultado').innerHTML =
        `Valor com desconto: ${resultado}`;
}