//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.


// const prompt = require('prompt-sync')();
// let celsius = parseFloat(prompt("Insira a temperatura em °C: "));
// let test = 1.8;
// let fahrenheit = 32;
//     console.log("A temperatura em Fahrenheit é de ",celsius * test + fahrenheit);


// const prompt = require('prompt-sync')();
// let eleitores = parseFloat(prompt("Qual a quantidade de eleitores?"))
// let votbranco = parseFloat(prompt("Qual a quantidade de votos brancos?"))
// let votnulo = parseFloat(prompt("Qual a quantidade de votos nulos?"))
// let votvalido = parseFloat(prompt("Qual a quantidade de votos válidos?"))

// console.log("O percentual de votos brancos é", votbranco/eleitores*100);
// console.log("O percentual de votos nulos é", votnulo/eleitores*100);
// console.log("O percentual de votos válidos é", votvalido/eleitores*100 );


// const prompt = require ('prompt-sync')();
// let soma = parseInt(prompt("Insira um nùmero:" ))
// let vezes = parseInt(prompt("Insira um número:"))
// let porcentagem = parseInt(prompt("Insira um nùmero:"))
    
// console.log("A soma de 25 ao primeiro número inteiro é", soma+25)
// console.log("O valor do segundo número triplicado é ", vezes*3)
// console.log("O valor reajustado é de", (12/100)*porcentagem + porcentagem)
// console.log("O total dos números inteiros é" , soma + vezes + porcentagem)  


// const prompt = require ('prompt-sync')();
// let nota1 = parseInt(prompt("Insira a nota da primeira prova:"))
// let nota2 = parseInt(prompt("Insira a nota da segunda prova:"))

// if(nota1 + nota2/2 == 6){
//     console.log("PARABÉNS! Você foi aprovado!")
// } else { console.log("Você foi REPROVADO!Estude mais")}

// const prompt= require ('prompt-sync')();
// let ladoA = parseInt(prompt("Insira o valor do lado A:"))
// let ladoB = parseInt(prompt("Insira o valor do lado B:"))
// let ladoC = parseInt(prompt("Insira o valor do lado C:"))

// if (ladoA >= ladoB + ladoC){
//   console.log("Não forma nenhum dos três triângulos")
// } else{

// if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
//   console.log("Este é um triângulo isósceles")

// }
//   else { (ladoA == ladoB &&  ladoB == ladoC)
//     console.log("Este é um triângulo equilátero");
//   }
//    if (ladoA != ladoB && ladoB != ladoC) 
//    {
//    console.log("Este é um triângulo escaleno")
// } }
  





// const prompt= require ('prompt-sync')();
// let ladoA = parseInt(prompt("Insira o valor do lado A:"))
// let ladoB = parseInt(prompt("Insira o valor do lado B:"))
// let ladoC = parseInt(prompt("Insira o valor do lado C:"))

// if (ladoA >= ladoB + ladoC){
//   console.log("Não forma nenhum dos três triângulos")
// } else{

// if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
//   console.log("Este é um triângulo isósceles")

// }
//   else if (ladoC > ladoA == ladoB && ladoA > ladoB == ladoC){
//     console.log("Este é um triângulo equilátero");
//   }
//    else (ladoA != ladoB && ladoB != ladoC) 
//    {
//    console.log("Este é um triângulo escaleno")
// } }
  
// const prompt = require ('prompt-sync')();
// const varejo = 0.30
// const atacado = 0.25
// let maçacomprada = parseInt(prompt("Insira o número de maças compradas:"))

// let totalcompra
// if (maçacomprada <= 11 )  { totalcompra = (maçacomprada * varejo) 
//     console.log("O valor total da compra é de", totalcompra , " reais" )
//   } else if (maçacomprada >= 12) { totalcompra = (maçacomprada * atacado) 
//      console.log("O valor total da compra é de ", totalcompra , "reais")
//   }


// const prompt = require('prompt-sync')();
// let valor1 = parseInt(prompt("Insira o primeiro valor:"))
// let valor2 = parseInt(prompt("Insira o segundo valor:"))

// if(valor1 > valor2){
//   console.log("A ordem crescente dos valores é:", valor2,",", valor1)
// }  else {
//   console.log("A ordem crescente dos valores é:", valor1,",", valor2)
// }




// const prompt = require ('prompt-sync')();
// let código = parseInt(prompt("Adicione o código do produto e veja de qual região ele vem:"))

// if(código == 1 ){
//     console.log("O produto vem do Sul do Brasil")
// }
// else if(código == 2){
//     console.log("O produto vem do Norte do Brasil")
// } 
// else if(código == 3){
//     console.log("O produto vem do Leste do Brasil")
// } 
// else if(código == 4){
//     console.log("O produto vem do Oeste do Brasil")
// }
// else if(código == 5 || código == 6){
//     console.log("O produto vem do Nordeste do Brasil")
// }
// else if(código >= 7 && código <= 9){
//     console.log("O produto vem do Sudeste do Brasil")
// }
// else if(código >= 10 && código <= 20){
//     console.log("O produto vem do Centro-Oeste")
// }
// else if(código >= 25 && código <= 50){
//     console.log("O produto vem do Nordeste")
// } else{(código <= 0 && código >= 21 && código <=24)
//     console.log("O produto é importado")
// }




// const prompt = require('prompt-sync')();
// let valor1 = parseInt(prompt("Insira o primeiro valor:"))
// let valor2 = parseInt(prompt("Insira o segundo valor:"))

// if(valor1 > valor2){
//   console.log("A ordem crescente dos valores é:", valor2,",", valor1)
// }  else {
//   console.log("A ordem crescente dos valores é:", valor1,",", valor2)
// }



// const prompt = require('prompt-sync')();
// let número = parseInt(prompt("Insira o número:"))
// let contador = 0 
// for (contador = 0; contador <= 10; contador++){
//     console.log(número); 
//  }



// const prompt = require('prompt-sync')();
// let multiplicando = parseInt(prompt("Insira o primeiro número e veja sua tabuada até ele mesmo: "))

// for (contador = 1; contador <= multiplicando; contador++){
//     console.log(`${multiplicando} x ${contador} =`, multiplicando * contador); 
//  }





//  for (i=1000; i <= 1999; i++){
//     if (i%11==5) {
//         console.log(i);
//     }
//  }




// const prompt = require('prompt-sync')();

//  console.log("Digite o número decimal e se digitar 0 encerra.")

//  let soma = 0;
//  let contador = 0;
//  let numdecimal;

// while(true){
//     numdecimal= parseFloat(prompt("Digite aqui o número decimal:"))
//    if (numdecimal === 0){
//        break;
// }
 
//     soma += numdecimal
//     contador++;
// }
//     let media = soma / contador;

//     if (contador === 0) {
//     console.log("Nenhum número foi inserido.");
// } else {
//     console.log("A média aritmética dos números inseridos é:", media.toFixed(2));
// }





// const prompt = require("prompt-sync")();
// console.log("Digite números decimais e seus pesos. Digite 0 para encerrar.");

// let somaProdutos = 0;
// let somaPesos = 0;
// let numero;
// let peso;

// while (true) {
//     numdecimal = parseFloat(prompt("Digite um número decimal: "));

//     if (numdecimal === 0) {
//         break;
//     }
//     peso = parseFloat(prompt("Digite o peso deste número: "));
//     somaProdutos += numdecimal * peso;
//     somaPesos += peso;
// }

// if (somaPesos === 0) {
//     console.log("Nenhum número foi inserido.");
// } else {
//     let mediaPonderada = somaProdutos / somaPesos;
//     console.log("A média ponderada dos números inseridos é:", mediaPonderada.toFixed(2));
// }




// function numeroprimo(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log("Os 50 primeiros números primos maiores que 100 são:");

// let contador = 0;
// let num = 101; 

// while (contador < 50) {
//     if (numeroprimo(num)) {
//         console.log(num);
//         contador++;
//     }
//     num++;
// }
