/* Faça  um programa para calcular o valor de um viagem.

Você terá 3 váriaveis. Sendo elas:
1 - Preço do Combustível;

2- Gasto médio de combustível do carro por KM;

3 - Distância em KM da viagem; 

*/


const precoCombustivel = 5.79;

const distanciaViagem = 100;

const kmLitro = 1;

const total = (distanciaViagem / kmLitro)  * precoCombustivel 


console.log(`O valor gasto é de R$ ${total.toFixed(2)}`)
