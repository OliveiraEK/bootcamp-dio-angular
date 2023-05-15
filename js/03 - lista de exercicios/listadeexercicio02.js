// Calculo IMC

let altura = 1.71;
let peso = 60;
let imc = parseFloat(peso/Math.pow(altura,2)); //A função Math. pow() retorna a base elevada ao expoente power, ou seja, baseexpoente .


console.log('Seu IMC é: '+imc.toFixed(2))
if(imc >= 18.5 && imc <=25){
  console.log('Peso normal')
}else if(imc < 18.5){
  console.log('Abaixo do peso')
}else if(imc >=25 && imc<=30){
  console.log('Acima do peso')
}else{
  console.log('Obeso')
}