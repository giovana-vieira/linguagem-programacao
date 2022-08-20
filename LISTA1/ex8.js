function calcular() {
    let peso = document.getElementById('peso').value;
    let peso_gramas = peso * 1000 ;
    document.getElementById('peso_gramas').innerHTML =
        `Peso em gramas: ${peso_gramas}`;
}