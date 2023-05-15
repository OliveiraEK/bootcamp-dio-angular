// Calculando o que deve ser pago considerando o preço da etiqueta e a escolha da condição de pagamento

/* codigo condição de pagamento:
1 - Débito: 10% desconto
2 - Pix ou A vista: 15% desconto
3 - Parcelado em até 2x: Preço normal
4 - Parcelado em mais de 2x: Juros de 10% */


console.log('Formas de pagamento: \n 1 - Debito \n 2 - Pix \n 3 - A vista \n 4 - Credito')

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log('Forma de pagamento selecionada: Débito')
    const desconto = precoEtiqueta * 0.10;
    const total = precoEtiqueta - desconto;
    console.log(`Total: ${total.toFixed(2)}`)
}

else if (formaPagamento === 2) {
    console.log('Forma de pagamento selecionada: Pix ou A vista no dinheiro')
    const desconto = precoEtiqueta * 0.15;
    const total = precoEtiqueta - desconto;
    console.log(`Total: ${total.toFixed(2)}`)
}

else if (formaPagamento === 3){ 
    console.log('Forma de pagamento selecionada: Parcelado em 2x')
    console.log(`Total: ${precoEtiqueta.toFixed(2)}`)
}

else {
    console.log('Forma de pagamento selecionada: Parcelado em 4x')
    const juros =  precoEtiqueta * 0.10;
    const total = precoEtiqueta + juros;
    console.log(`Total: ${total.toFixed(2)}`)
}