function calcular() {
    let basemaior = document.getElementById('basemaior').value;
    let basemenor = document.getElementById('basemenor').value;
    let altura = document.getElementById('altura').value;
    let area = (((+basemaior) + (+basemenor))*altura)/2 ;
    document.getElementById('area').innerHTML =
        `Área do trapézio: ${area.toFixed(2)}`;
}