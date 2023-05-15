// Calculando o valor gasto de uma viagem com etanol ou gasolina

const tipoCombustivel = 'gasolina';

const precoEtanol = 2.89;

const precoGasolina = 5.79;

const distanciaViagem = 100;

const kmLitro = 10;

const totalComGasolina = (distanciaViagem / kmLitro) * precoGasolina

const totalComEtanol = (distanciaViagem / kmLitro) * precoEtanol

if (tipoCombustivel == 'etanol') {
    console.log(`O valor gasto é de R$ ${totalComEtanol.toFixed(2)}`)
}
else if (tipoCombustivel == 'gasolina') {
    console.log(`O valor gasto é de R$ ${totalComGasolina.toFixed(2)}`)
}

else {
    console.log('Tipo de combustível invalido')
}