function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc >= 18.5 && imc <= 25) {
        return 'Peso normal'
    } else if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 25 && imc <= 30) {
        return 'Acima do peso';
    } else {
        return 'Obeso';
    }
}


//main
(function () {
    const peso = 60;
    const altura = 1.71;

    const imc = calcularImc(peso, altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`)
    console.log(classificarImc(imc));
})(); //forma de invocar a função imediatamente sem precisar declarar
/*sem nome você não consegue chamar ela novamente,
apenas executar ela imediatamente. */
