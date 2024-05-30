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

/*
let vetor = []; // Inicializa um vetor vazio
// Preenche o vetor com números de 1 a 15
for (let i = 1; i <= 15; i++) {
 vetor.push(i);
}
// Imprime o vetor preenchido
console.log(vetor);
*/



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



//EX 16
/*
function preencherVetor(vetor, tamanho) {
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Math.floor(Math.random() * 100); 
    }
}
function mostrarVetor(vetor) {
    console.log("Números gerados:");
    console.log(vetor.join(", ")); 

}
function ordenarVetor(vetor) {
    vetor.sort((a, b) => a - b); 
}
let numeros = new Array(20);

preencherVetor(numeros, 20);

mostrarVetor(numeros);

ordenarVetor(numeros);

console.log("Números ordenados:");
console.log(numeros.join(", "));
*/

//EX 17)
/*
function lerDados() {
    var nomes = [];
    var idades = [];
  
    for (var i = 0; i < 9; i++) {
      var nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
      var idade = parseInt(prompt("Digite a idade de " + nome + ":"));
  
      nomes.push(nome);
      idades.push(idade);
    }
  
    return { nomes: nomes, idades: idades };
  }
  const prompt = require('prompt-sync')();
  function mostrarMenoresDeIdade(nomes, idades) {
    console.log("Pessoas menores de idade:");
    for (var i = 0; i < idades.length; i++) {
      if (idades[i] < 18) {
        console.log("Nome: " + nomes[i] + ", Idade: " + idades[i]);
      }
    }
  }
  var dados = lerDados();
  
  var nomes = dados.nomes;
  var idades = dados.idades;
  
  mostrarMenoresDeIdade(nomes, idades);
  */

//EX 18
/*
const prompt = require('prompt-sync')();
function criarRegistro(nome, cargo, salario) {
    return {
      nome: nome,
      cargo: cargo,
      salario: salario
    };
  }
  function lerDadosFuncionario() {
    var nome = prompt("Digite o nome do funcionário:");
    var cargo = prompt("Digite o cargo do funcionário:");
    var salario = parseFloat(prompt("Digite o salário do funcionário:"));
  
    return criarRegistro(nome, cargo, salario);
  }
  function mostrarRegistro(funcionario) {
    console.log("Registro do funcionário:");
    console.log("Nome: " + funcionario.nome);
    console.log("Cargo: " + funcionario.cargo);
    console.log("Salário: " + funcionario.salario);
  }
  var funcionario = lerDadosFuncionario();
  mostrarRegistro(funcionario);
  */

  //EX 19
  /*
  const prompt = require('prompt-sync')();
  function validarHorario(horario) {
    var regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
  
    return regex.test(horario);
  }
  function lerHorarios() {
    var horarios = [];
  
    for (var i = 0; i < 5; i++) {
      var horarioValido = false;
      var horario;
      while (!horarioValido) {
        horario = prompt("Digite o horário " + (i + 1) + " no formato HH:MM:SS:");
        horarioValido = validarHorario(horario);
  
        if (!horarioValido) {
          alert("Horário inválido! Por favor, digite no formato HH:MM:SS.");
        }
      }
  
      horarios.push(horario);
    }
  
    return horarios;
  }
  function formatarHorario(horario) {
    return horario;
  }
  var horarios = lerHorarios();
  
  console.log("Horários inseridos:");
  for (var i = 0; i < horarios.length; i++) {
    console.log(formatarHorario(horarios[i]));
  }
  
  */

//EX 20
/*
const prompt = require('prompt-sync')();
function calcularDeducaoINSS(salarioBruto) {
    const taxaINSS = 0.12; 
    return salarioBruto * taxaINSS;
}
function emitirContracheque(funcionario) {
    const deducaoINSS = calcularDeducaoINSS(funcionario.salarioBruto);
    const salarioLiquido = funcionario.salarioBruto - deducaoINSS;
    
    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salarioBruto.toFixed(2));
    console.log("Dedução INSS:", deducaoINSS.toFixed(2));
    console.log("Salário líquido:", salarioLiquido.toFixed(2));
    console.log(); 
}
const funcionarios = [
    { matricula: 1, nome: "João", salarioBruto: 3000 },
    { matricula: 2, nome: "Maria", salarioBruto: 4000 },

];
console.log("Contracheques:");
funcionarios.forEach(funcionario => {
    emitirContracheque(funcionario);
});
*/


//EX 21
/*
function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;
    if (sexo === 'masculino') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo === 'feminino') {
        pesoIdeal = 62.1 * altura - 44.7;
    } else {
        console.log("Sexo inválido. Por favor, insira 'masculino' ou 'feminino'.");
        return;
    }
    return pesoIdeal;
}
const altura = 1.75; 
const sexo = 'masculino'; // Ou 'feminino'
const pesoIdeal = calcularPesoIdeal(altura, sexo);
console.log("O peso ideal é:", pesoIdeal.toFixed(2), "kg");
*/

// EX 22
/*
const prompt = require('prompt-sync')();
function calcularEstatisticasPopulacao() {
    let totalPessoas = 0;
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = -Infinity;
    let salarioAte350 = 0;

    while (true) {
        let salario = parseFloat(prompt("Informe o salário da pessoa (ou digite 'fim' para encerrar):"));
        if (isNaN(salario)) break; // Se não for um número, encerra a entrada de dados

        let numFilhos = parseInt(prompt("Informe o número de filhos da pessoa:"));

        totalPessoas++;
        totalSalario += salario;
        totalFilhos += numFilhos;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            salarioAte350++;
        }
    }

    const mediaSalario = totalSalario / totalPessoas;
    const mediaFilhos = totalFilhos / totalPessoas;
    const percentualSalarioAte350 = (salarioAte350 / totalPessoas) * 100;

    return {
        mediaSalario: mediaSalario.toFixed(2),
        mediaFilhos: mediaFilhos.toFixed(2),
        maiorSalario: maiorSalario.toFixed(2),
        percentualSalarioAte350: percentualSalarioAte350.toFixed(2)
    };
}
const estatisticas = calcularEstatisticasPopulacao();
console.log("Média de salário da população:", estatisticas.mediaSalario);
console.log("Média do número de filhos:", estatisticas.mediaFilhos);
console.log("Maior salário:", estatisticas.maiorSalario);
console.log("Percentual de pessoas com salário até R$ 350,00:", estatisticas.percentualSalarioAte350 + "%");
*/

//EX 23

// Função para criar e imprimir a matriz identidade
/*
function matrizIdentidade() {
    const tamanho = 7;
    let matriz = [];

    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            if (i === j) {
                matriz[i][j] = 1; 
            } else {
                matriz[i][j] = 0; 
            }
        }
    }
    console.log("Matriz Identidade:");
    for (let i = 0; i < tamanho; i++) {
        console.log(matriz[i].join(" "));
    }
}
matrizIdentidade();
*/



//EX 24
/*
function preencherMatriz() {
    const linhas = 6;
    const colunas = 8;
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 21) - 10; 
        }
    }
    return matriz;
}
function contarNegativosPorLinha(matriz) {
    let vetorC = [];

    for (let i = 0; i < matriz.length; i++) {
        let contador = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                contador++;
            }
        }
        vetorC.push(contador);
    }

    return vetorC;
}
function imprimirMatriz(matriz) {
    console.log("Matriz M:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}
function imprimirVetor(vetor) {
    console.log("Vetor C (Quantidade de elementos negativos por linha):");
    console.log(vetor.join(" "));
}
let matrizM = preencherMatriz();
imprimirMatriz(matrizM);
let vetorC = contarNegativosPorLinha(matrizM);
imprimirVetor(vetorC);
*/


//EX 25
/*
const prompt = require('prompt-sync')();
function preencherMatriz() {
    const linhas = 15;
    const colunas = 20;
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor da posição (${i+1},${j+1}):`));
        }
    }

    return matriz;
}
function somaColunas(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    let somas = new Array(colunas).fill(0);

    for (let i = 0; i < colunas; i++) {
        for (let j = 0; j < linhas; j++) {
            somas[i] += matriz[j][i];
        }
    }

    return somas;
}
function imprimirSomasColunas(somas) {
    console.log("Soma de cada coluna:");
    for (let i = 0; i < somas.length; i++) {
        console.log(`Coluna ${i+1}: ${somas[i]}`);
    }
}


let matriz = preencherMatriz();
let somas = somaColunas(matriz);

imprimirSomasColunas(somas);
*/

//EX 26)
/*
function multiplicarMatrizes(A, B) {
    const linhasA = A.length;
    const colunasA = A[0].length;
    const colunasB = B[0].length;
    
    let P = [];

    for (let i = 0; i < linhasA; i++) {
        P[i] = [];
        for (let j = 0; j < colunasB; j++) {
            P[i][j] = 0;
        }
    }

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                P[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return P;
}

let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let B = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let P = multiplicarMatrizes(A, B);

console.log("Matriz produto P[1..3,1..5]:");
for (let i = 0; i < P.length; i++) {
    console.log(P[i].join(" "));
}
*/




// EX 27)
/*
const prompt = require('prompt-sync')();
function preencherMatriz() {
    const linhas = 6;
    const colunas = 6;
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor da posição (${i+1},${j+1}):`));
        }
    }

    return matriz;
}

function multiplicarMatrizPorA(matriz, A) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    let vetorV = [];

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            vetorV.push(matriz[i][j] * A);
        }
    }

    return vetorV;
}

function imprimirVetor(vetor) {
    console.log("Vetor V(36):");
    console.log(vetor.join(", "));
}

let matriz = preencherMatriz();
let A = parseFloat(prompt("Digite o valor de A:"));
let vetorV = multiplicarMatrizPorA(matriz, A);
imprimirVetor(vetorV);

*/

//EX 28
/*
const prompt = require('prompt-sync')();

function preencherMatriz() {
    const linhas = 10;
    const colunas = 10;
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor da posição (${i+1},${j+1}):`));
        }
    }

    return matriz;
}

function somaAcimaDiagonalPrincipal(matriz) {
    const linhas = matriz.length;
    let soma = 0;

    for (let i = 0; i < linhas; i++) {
        for (let j = i + 1; j < linhas; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

function somaAbaixoDiagonalPrincipal(matriz) {
    const linhas = matriz.length;
    let soma = 0;

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < i; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

let matriz = preencherMatriz();
let somaAcimaDiagonal = somaAcimaDiagonalPrincipal(matriz);
let somaAbaixoDiagonal = somaAbaixoDiagonalPrincipal(matriz);

console.log("Soma dos elementos acima da diagonal principal:", somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixoDiagonal);
*/


//EX 29
/*
function somaLinha4(matriz) {
    let soma = 0;
    for (let j = 0; j < matriz[4].length; j++) {
        soma += matriz[4][j];
    }
    return soma;
}
function somaColuna2(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][2];
    }
    return soma;
}
function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}
function somaTotal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}
let matrizM = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
let somaLinha4Result = somaLinha4(matrizM);
let somaColuna2Result = somaColuna2(matrizM);
let somaDiagonalResult = somaDiagonalPrincipal(matrizM);
let somaTotalResult = somaTotal(matrizM);

console.log("Soma da linha 4: " + somaLinha4Result);
console.log("Soma da coluna 2: " + somaColuna2Result);
console.log("Soma da diagonal principal: " + somaDiagonalResult);
console.log("Soma total da matriz: " + somaTotalResult);
console.log("Matriz M:");
imprimirMatriz(matrizM);
*/

//EX 30
/*
const prompt = require('prompt-sync')();
function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
        matriz.push([]);
        for (let j = 0; j < 5; j++) {
            matriz[i].push(parseInt(prompt(`Insira o elemento da posição ${i},${j}: `)));
        }
    }
    return matriz;
}

function calcularSomas(matriz) {
    let vetorSomaLinhas = [];
    let vetorSomaColunas = [];

    for (let i = 0; i < 5; i++) {
        vetorSomaLinhas.push(0);
        vetorSomaColunas.push(0);
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            vetorSomaLinhas[i] += matriz[i][j];
            vetorSomaColunas[j] += matriz[i][j];
        }
    }

    return [vetorSomaLinhas, vetorSomaColunas];
}

function imprimirMatrizEVetores(matriz, vetorSomaLinhas, vetorSomaColunas) {
    console.log("Matriz M:");
    for (let i = 0; i < 5; i++) {
        console.log(matriz[i].join(" "));
    }

    console.log("Vetor de soma das linhas:");
    console.log(vetorSomaLinhas.join(" "));

    console.log("Vetor de soma das colunas:");
    console.log(vetorSomaColunas.join(" "));
}

let matrizM = lerMatriz();
let [vetorSomaLinhas, vetorSomaColunas] = calcularSomas(matrizM);

imprimirMatrizEVetores(matrizM, vetorSomaLinhas, vetorSomaColunas);
*/

)// Função para ler uma matriz 5x5
function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
        matriz.push([]);
        for (let j = 0; j < 5; j++) {
            // Aqui você pode substituir o prompt pelo método que preferir para inserir os elementos da matriz
            matriz[i].push(parseInt(prompt(`Insira o elemento da posição ${i},${j}: `)));
        }
    }
    return matriz;
}

// Função para calcular as somas das linhas e das colunas e armazená-las em vetores
function calcularSomas(matriz) {
    let vetorSomaLinhas = [];
    let vetorSomaColunas = [];

    // Inicializa os vetores com zeros
    for (let i = 0; i < 5; i++) {
        vetorSomaLinhas.push(0);
        vetorSomaColunas.push(0);
    }

    // Calcula as somas das linhas e das colunas
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            vetorSomaLinhas[i] += matriz[i][j];
            vetorSomaColunas[j] += matriz[i][j];
        }
    }

    return [vetorSomaLinhas, vetorSomaColunas];
}

// Função para imprimir a matriz e os vetores
function imprimirMatrizEVetores(matriz, vetorSomaLinhas, vetorSomaColunas) {
    console.log("Matriz M:");
    for (let i = 0; i < 5; i++) {
        console.log(matriz[i].join(" "));
    }

    console.log("Vetor de soma das linhas:");
    console.log(vetorSomaLinhas.join(" "));

    console.log("Vetor de soma das colunas:");
    console.log(vetorSomaColunas.join(" "));
}

// Lê a matriz 5x5
let matrizM = lerMatriz();

// Calcula as somas das linhas e das colunas
let [vetorSomaLinhas, vetorSomaColunas] = calcularSomas(matrizM);

// Imprime a matriz e os vetores
imprimirMatrizEVetores(matrizM, vetorSomaLinhas, vetorSomaColunas);

//EX 31)
