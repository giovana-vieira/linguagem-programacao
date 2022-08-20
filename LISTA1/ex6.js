function calcular() {
    let salfixo = document.getElementById('salfixo').value;
    let vendas = document.getElementById('vendas').value;
    let resultado_comissao = vendas * 4/100 ;
    let resultado_salfinal = (+salfixo) + resultado_comissao
    document.getElementById('resultado_comissao').innerHTML =
        `Valor da comissão: R$${resultado_comissao.toFixed(2)}`;
    document.getElementById('resultado_salfinal').innerHTML =
        `Salário Final: R$${resultado_salfinal.toFixed(2)}`;
}