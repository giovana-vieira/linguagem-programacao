function calcular() {
    let lado = document.getElementById('lado').value;
    let area = (lado * lado) ;
    document.getElementById('area').innerHTML =
        `Área do quadrado: ${area.toFixed(2)}`;
}