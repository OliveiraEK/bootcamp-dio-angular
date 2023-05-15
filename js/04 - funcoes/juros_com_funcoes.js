console.log('Formas de pagamento: \n 1 - Debito \n 2 - Pix \n 3 - A vista \n 4 - Credito')

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + ( valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log('Forma de pagamento selecionada: Débito');
    console.log(`Total: ${aplicarDesconto(precoEtiqueta, 10)}`);
}

else if (formaPagamento === 2) {
    console.log('Forma de pagamento selecionada: Pix ou A vista no dinheiro');
    console.log(`Total: ${aplicarDesconto(precoEtiqueta, 15)}`);
}

else if (formaPagamento === 3) {
    console.log('Forma de pagamento selecionada: Parcelado em 2x')
    console.log(`Total: ${precoEtiqueta.toFixed(2)}`)
}

else {
    console.log('Forma de pagamento selecionada: Parcelado em 4x')
    console.log(`Total: ${aplicarJuros(precoEtiqueta, 10)}`)
}

