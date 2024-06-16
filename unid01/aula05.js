// o método 'log' do objeto 'console', utilizado para imprimir informações no comsle ou servidor//
/*
*/

console.log("Hello 'World'");
console.log('Hello "World"');
console.log(`Hello World`);

console.log(111, 435.78, "Bruno");

// Prática:
//console.log('Meu nome é Bruno e estou na aula 05 do Professor Jacques, da Codifica');
//console.log("Meu nome é Bruno e estou na aula" , 5,   "do Professor Jacques da Codifica" );


//  name = "Bruno"; // NÃO RECOMENDADA
// let name = "Bruno"; // Declaração padrão
// var name = "Bruno"; // Antiga e inadequada



// const name = "Bruno";


let Bruno;
console.log(Bruno);

let meunull = null;
console.log(meunull);


console.log("5" + 10);

let meunumber = 897;
console.log(typeof(meunumber));


let num1 = 98;
let num2 = 34;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);

let numteste = "23"
let numtest = Number(numteste);
console.log(numtest + num1);


let numteste2 = parseInt(numteste);
console.log(numteste2 + num1);

let numteste3 = parseFloat(numteste);
console.log(numteste3 + num1)

console.log(10 < 5);
console.log(10 <= 5);
console.log(10 > 5);
console.log(10 >= 5 );
console.log(10 == "10"); //valor
console.log(10 === 5); //valor e tipo


const nota = 65
   if (nota >= 60) {
    console.log("Aprovado")
 } else if (nota >= 40 && nota <= 59) {
    console.log('Está de recuperação')
 } else {
 console.log("Reprovado! Estude mais")
 }


/**
 * Estrutura de decisão semelhante ao if/else,  mas com a sintaxe mais enxuta.
 */
/**
 * <condição> / <verdadeiro> : <falso;
 */
// let resultadotenario = (1000 < 100) ? true : false;
// console.log(resultadotenario);

//   const prompt = require('prompt-sync')();


//   let teste = prompt ("Digite aqui seu nome:");


