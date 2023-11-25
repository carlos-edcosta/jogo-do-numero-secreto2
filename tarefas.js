diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

//--------------------------------------------------

let numero = prompt('Digite um número')

if (numero > 0) {
    alert(`${numero} é um número positivo`)
} else {
    alert(`${numero} é um número negativo`)
}

//--------------------------------------------------

let pontos = prompt('Insira seus pontos')

if (pontos >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar')
}
//--------------------------------------------------

let saldo = prompt('Digite o seu saldo')

alert(`Seu saldo atual é de R$${saldo}`)

//--------------------------------------------------
let nome = prompt('Digite seu nome')

alert(`Bem vindo(a) ${nome}`)

//--------------------------------------------------

let contador = 1 

while (contador == 10) {
    contador++
}

//--------------------------------------------------

console.log('Boas vindas'); //

//--------------------------------------------------

let nome2= 'Carlos';
console.log(`Olá ${nome2}`);//

//--------------------------------------------------

let nome3 = 'Carlos';
alert(`Olá ${nome3}`)//

//--------------------------------------------------

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?')
console.log(`Você gosta de ${linguagem}`)//

//--------------------------------------------------

let valor1 = 5;
let valor2 = 10;
let resultado = (valor1 + valor2);
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`); //

//--------------------------------------------------

let valor3 = 20;
let valor4 = 10;
let resultado2 = (valor3 - valor4);
console.log(`A diferença de ${valor3} e ${valor4} é igual a ${resultado2}`);//

//--------------------------------------------------

let idade = prompt('Qual é a sua idade?')
if (idade > 17) {
    console.log('Você é maior de idade')
} else {
    console.log('Você é menor de idade')
} //

//--------------------------------------------------
/*
let numero = parseFloat(prompt("Digite um número:"));
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
*/

//--------------------------------------------------
/*
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
*/
//--------------------------------------------------

let nota = 8

if (nota >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

//--------------------------------------------------

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//--------------------------------------------------

let numeroInteiro = parseInt(Math.random() * 10) + 1
console.log(numeroInteiro)

//--------------------------------------------------

let numeroInteiro2 = parseInt(Math.random() * 1000) + 1
console.log(numeroInteiro2)

//--------------------------------------------------