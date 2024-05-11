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



