// Calculo de média com 3 notas.

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`Média: ${media.toFixed(1)}`)

if (media > 7) {
    console.log('Parabéns, você foi aprovado!')
}
else if (media >=5 && media <=7) {
    console.log('Você está de recuperação.')
}
else {
    console.log('Reprovado.')
}