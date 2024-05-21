// const prompt = require('prompt-sync')();
// let cigarrospordia = parseInt(prompt("Quantidade de cigarros fumados por dia:"))
// let anosfumando = parseInt(prompt("Quantidade de anos fumando:"))

// //Calculo de redução de tempos de vida
// //1 ano = 365 dias

// quantidadedias = anosfumando * 365
// totalcigarrosfumados = quantidadedias * cigarrospordia


// //1 dia = 24 horas = 1440 min = 86400 seg
// //1 hora = 60 min = 3600 seg  
// //1 min = 60 seg

// minutosperdidos = totalcigarrosfumados *10
// diasperdidos = parseInt(minutosperdidos/1440)

// console.log(`A quantidade de dias perdidos é de ${diasperdidos}`)




//// MULTA

// const prompt = require('prompt-sync')();
// let velocidadecarro = parseFloat(prompt(" Qual a velocidade do carro?"))
// if(velocidadecarro > 80){
//   console.log("Você foi multado! O limite é de 80KM")
//   multa = (velocidadecarro) * 5
//   console.log(`O valor da multa é de ${multa} reais`)
// } else{
//   console.log("Você está dentro do limite de velocidade.")
// }




//PREÇO PASSAGEM

// const prompt = require('prompt-sync')();
// let distancia = parseFloat(prompt(" Qual a distancia que você pretende percorrer? "))
// let menordistancia = distancia * 0.50
// let maiordistancia = distancia * 0.45
//  if(distancia <= 200){ 
//   console.log(`O preço da passagem é de ${menordistancia}`)
// } else{
//   console.log(`O preço da passagem é de ${maiordistancia.toFixed(2)}`)
// }




// const prompt = require('prompt-sync')();
// let lado1 = parseInt(prompt("Insira a medida do primeiro lado:"))
// let lado2 = parseInt(prompt("Insira a medida do segundo lado:"))
// let lado3 = parseInt(prompt("Insira a medida do terceiro lado:"))
// if(lado1 <=  lado2 + lado3 && lado2 <= lado1 + lado2 && lado3 <= lado2 + lado1){
//   console.log("É possivel formar um triangulo com as medidas")
// } else{
//   console.log("Não é possivel formar um triangulo")
// }


// Número sorteaado entre 1 e 5.
// const prompt = require('prompt-sync')();
// const numeroSorteado = Math.floor(Math.random() * 5) + 1;
// let tentativa;
// do {
//     tentativa = parseInt(prompt("Qual foi o número sorteado entre 1 e 5?"));
//     if (tentativa < numeroSortado) {
//         console.log("Tente um número maior.");
//     } else if (tentativa > numeroSorteado) {
//         console.log("Tente um número menor.");
//     }
// } while (tentativa !== numeroSorteado);
// console.log("Parabéns! Você acertou o número sorteado.");






// const prompt = require('prompt-sync')();
// let modelocarro = parseInt(prompt("Qual foi o modelo de carro alugado? Digite 1 - Carro Popular ou 2 - Carro de Luxo: "))
// let diasalugados = parseInt(prompt("Quantos dias de aluguel?"))
// let kms = parseFloat(prompt("Quantos kms foram percorridos?"))
// if( modelocarro == 1 && kms <= 100){
//   valortotal = diasalugados * 90 + kms * 0.20
// } else if(modelocarro == 1 && kms > 100){
//   valortotal = diasalugados * 90 + kms * 0.10
// } else if (modelocarro == 2 && kms <= 200){
//   valortotal = diasalugados * 150 + kms * 0.30
// } else if(modelocarro == 2 && kms > 200){
//   valortotal = diasalugados * 150 + kms * 0.25
// } else(
//   console.log("INSIRA O NÚMERO 1 OU 2!!")
// )
// console.log(`O valor total a ser pago é de ${valortotal}`)






// const prompt = require('prompt-sync')()
// let horasatividade = parseInt(prompt("Quantas horas de atividade física você fez no mês?"))
// let pontos;
// let pontuação;
// if(horasatividade <= 10){
//     pontos = 2
//     pontuação = pontos * horasatividade
//     valorganho = pontuação * 0.05
//     console.log(valorganho)
// } else if(horasatividade >= 10 && horasatividade < 20){
//   pontos = 5
//   pontuação = pontos * horasatividade
//   valorganho = pontuação * 0.05
//   console.log(valorganho)
// } else if (horasatividade > 20 ){
//   pontos = 10 
//   pontuação = pontos * horasatividade
//   valorganho = pontuação * 0.05
// } else(
//   console.log("INSIRA DADOS VÁLIDOS")
// )




// const prompt = require('prompt-sync')();
// let jogador1 = parseInt(prompt("JOGADOR 1: Jogue 1 para pedra, 2 para papel e 3 para tesoura:"))
// let jogador2 = parseInt(prompt("JOGADOR 2: Jogue 1 para pedra, 2 para papel e 3 para tesoura:"))
// if(jogador1 == 1 && jogador2 == 2){
//   console.log("Parabéns jogador 2, você é o ganhador!")
// } else if(jogador1 == 2 && jogador2 == 1){
//     console.log("Parabéns jogador 1, você é o ganhador!")
// } else if(jogador1 == 3 && jogador2 == 1){
//     console.log("Parabéns jogador 2, você é o ganhador!")
// } else if(jogador1 == 1 && jogador2 == 3){
//     console.log("Parabéns jogador 1, você é o ganhador!")
// } else if(jogador1 == 3 && jogador2 == 1){
//     console.log("Parabéns jogador 2, você é o ganhador!")
// } else if(jogador1 == 2 && jogador2 == 3){
//     console.log("Parabéns jogador 2, você é o ganhador!")
// } else if(jogador1 == 3 && jogador2 == 2){
//     console.log("Parábens jogador 1, você é o ganhador!")
// } else(
//     console.log("Insira um caracter válido!")
// )





// const prompt = require('prompt-sync')();
// function totalInfos(salario, sexo){
//     let infos = (salario * salario && sexo * sexo)
//     return infos
// }
// let salario
// let sexo
// do {
//     salario = prompt("Qual é o valor do salário? Digite 0 para encerrar:")
// }while(salario != 0)
//     // do {
//     //     sexo = prompt("Qual é o sexo do funcionario? Digite 1 para masculino e 2 feminino:")
//     // } whlie ()

// totalsalario = salario*salario
// console.log(totalsalario)




// EX 08
//const prompt = require('prompt-sync')();
// console.log("Digite 0 para encerrar a contagem")
// let soma = 0
// let salario;
// let sexo;
// let resultado;
// do{
//   salario = parseFloat(prompt("Qual é o valor do salário?"))
//   sexo = parseInt(prompt("Qual é o sexo? Digite 1 para masculino e 2 feminino:"))
//   for(let i = salario; salario == 0; salario++){
//     soma += salario
//   }
//   //resultado = salario++
// }while(salario != 0 && sexo != 0)
// console.log(resultado)



//EX 09
// const prompt = require('prompt-sync')();
// let totalSalarioHomens = 0;
// let totalSalarioMulheres = 0;

// do {
//     let salario = parseFloat(prompt("Digite o salário do funcionário:"));
//     let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):").toUpperCase();

//     if (sexo === 'M') {
//         totalSalarioHomens += salario;
//     } else if (sexo === 'F') {
//         totalSalarioMulheres += salario;
//     } else {
//         alert("Sexo inválido! Por favor, digite M para masculino ou F para feminino.");
//         continue; // Volta ao início do loop para pedir novamente os dados
//     }

//     let continuar = prompt("Deseja continuar? (s/n):");
//     if (continuar.toLowerCase() !== 's') {
//         break; // Sai do loop se o usuário não quiser continuar
//     }
// } while (true);

// console.log("Total de salário pago aos homens:", totalSalarioHomens);
// console.log("Total de salário pago às mulheres:", totalSalarioMulheres);







// EX 10
/*const prompt = require('prompt-sync')();

let soma = 0;
let menor;
let quantidade = 0;
let pares = 0;

do {
    let numero = parseFloat(prompt("Digite um número:"));
    soma += numero;
    quantidade++;

    if (menor === undefined || numero < menor) {
        menor = numero;
    }

    if (numero % 2 === 0) {
        pares++;
    }

    let continuar = prompt("Deseja continuar? (s/n):");
    if (continuar.toLowerCase() !== 's') {
        break;
    }
} while (true);

let media = soma / quantidade;

console.log("a) O somatório entre todos os valores é:", soma);
console.log("b) O menor valor digitado é:", menor);
console.log("c) A média entre todos os valores é:", media);
console.log("d) Quantidade de valores pares:", pares);



// 11
*/

//
// function calcularPA(primeiroTermo, razao) {
//     var elementosPA = [];
//     var soma = 0;

//     // Calcula os 10 primeiros elementos da PA e a soma
//     for (var i = 0; i < 10; i++) {
//         var elemento = primeiroTermo + razao * i;
//         elementosPA.push(elemento);
//         soma += elemento;
//     }

//     // Mostra os elementos da PA e a soma na tela
//     console.log("Os 10 primeiros elementos da PA são:");
//     console.log(elementosPA);
//     console.log("A soma dos elementos da PA é: " + soma);
// }

// // Exemplo de uso da função
// var primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA:"));
// var razao = parseInt(prompt("Digite a razão da PA:"));

// calcularPA(primeiroTermo, razao);

// EX 12
// let n = 10;
// let fib = [0, 1];


// for (let i = 2; i < n; i++) {
//  fib.push(fib[i - 1] + fib[i - 2]);
// }


// console.log(fib);


// EX 13
// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("qual seu num:"));
// let fib = [0, 1];


// for (let i = 2; i < n; i++) {
//  fib.push(fib[i - 1] + fib[i - 2]);
// }

// console.log(fib);



// EX13


let vetor = []; // Inicializa um vetor vazio
// Preenche o vetor com números de 1 a 15
for (let i = 1; i <= 15; i++) {
 vetor.push(i);
}
// Imprime o vetor preenchido
console.log(vetor);




//EX 14
// let nomes1 = ['João', 'Pedro', 'Matheus', 'Ryan', 'Vitor', 'Julia', 'Isabela','Giovanna','Daniela', 'Clara']
// nomes1.reverse();  
// console.log(nomes1)






//EX 15)
/*
let valinteiros = [1, 20, 15, 7, 13, 92, 55, 80, 95, 34, 79, 47, 8, 24]
let pares = valinteiros.filter(function(valinteiros){
  return valinteiros % 2 === 0;
})
 
console.log(pares)
let posicoesPares = [];
pares.forEach(function(par) {
    posicoesPares.push(valinteiros.indexOf(par));
});

console.log("Posições dos números pares:", posicoesPares);
*/



//EX 16)

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (let i = 0 ; i < 99 ; i++){
  array.push(getRandom(0,99));
}

console.log(array);
