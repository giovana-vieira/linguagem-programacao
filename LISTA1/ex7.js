function calcular() {
    let peso = document.getElementById('peso').value;
    let peso15 = (+peso) + (peso * 15/100) ;
    let peso20 = peso - (peso * 20/100)
    document.getElementById('resultado+15').innerHTML =
        `Engordar 15%: ${peso15}`;
    document.getElementById('resultado-20').innerHTML =
        `Emagrecer 20%: ${peso20}`;
}