/* For in para iterar sobre as propriedaades dentro das notas, calcular a média
e imprimir da turma. Caso a média esteja acima de 3.0, indique que a turma está
acima da média de aprovação
*/

// const professor = {
//     nome : "Petrus",
//     materia  : "JavaScript",
//     notas: {
//         aluno1 : 4.6,
//         aluno2 : 7.8,
//         aluno3 : 2.4
//     }
// }
// let somanotas = 0; 
// let numeroalunos = 0;
// for (let aluno in professor.notas){
//     somanotas += professor.notas[aluno];
//     numeroalunos++;
// }
// let media = somanotas/numeroalunos; 
// console.log(`A média das notas é ${media.toFixed(2)}`)
// console.log(media>=6.0 ? ` A turma de ${professor.nome} está acima da média de aprovação`:
// `A turma de ${professor.nome} está abaixo da média de aprovação.`);



/*
    Use um loop for of para iterar sobre o array biblioteca.
    Para cada livro, verifique se foi publicado antes de 2000.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

// const biblioteca = [
//     { titulo: "12 Regras Para Vida", autor: "Jordan Peterson", ano: 1925 },
//     { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1967 },
//     { titulo: "Nação Dopamina", autor: "Dra. Anna Lembke", ano: 1997 },
//     { titulo: "Percy Jackson", autor: "Rick Riordan", ano: 2005}
// ];

// for(let livro of biblioteca){
//     if (livro.ano<2000){
//     console.log(`O livro "${livro.titulo}", foi escrito pelo ${livro.autor} e foi publicado no ano de ${livro.ano}`)
// }
// }



/*
    Use o método forEach para iterar sobre o array filmes.
    Crie um objeto para armazenar a contagem de filmes por gênero.
    Para cada filme no array, verifique se o gênero já existe no objeto de contagem. Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
    Após o loop, imprima cada gênero e o número de filmes correspondente.
*/

// const filmes = [
//     { titulo: "Tropa de Elite", genero: "Ação" },
//     { titulo: "Capitão Fantástico", genero: "Drama" },
//     { titulo: "O Poderoso Chefão", genero: "Crime" },
//     { titulo: "O Menino do Pijama Listrado", genero: "Drama" },
//     { titulo: "High School Musical", genero: "Musical" },
//     { titulo: "O Senhor dos Anéis: Sociedade do Anel", genero: "Fantasia" },
//     { titulo: "Clube da Luta", genero: "Drama" },
// ];

// let contagemGeneros = {};

// filmes.forEach(filme => {
//     if (contagemGeneros[filme.genero]) {
//         contagemGeneros[filme.genero]++;
//     } else {
//         contagemGeneros[filme.genero] = 1;
//     }
// });

// for (let genero in contagemGeneros) {
//     console.log(`Existem ${contagemGeneros[genero]} filmes no gênero ${genero}.`);
// }





/*Atividade de processo seletivo*/

/*Pesquisa Binária*/

// const binarySearch = (list, item) => {
//     let low = 0;
//     let high = list.length - 1;

//     while (low <= high) {
//         const mid = Math.floor((low + high) / 2);
//         const guess = list[mid];

//         if (guess === item) {
//             return mid;
//         } else if (guess > item) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return null;
// };

// const myList = [1, 3, 5, 7, 9];

// console.log(binarySearch(myList, 5)); // 1
// console.log(binarySearch(myList, -1)); // null



/*Recursos e operadores novos*/

/*
    Spread = espalhar
    Rest = juntar

    Oq define se o operador é spread ou rest é o contexto em q está sendo utilizado, caso espalhe estruturas de dados é spread, caso junte, é rest.

    No contexto spread:
*/

//let tituloArtigo = 'A new approach to convert rice husk waste in a quick and efficient adsorbent to remove cationic dye from water'

//Pode-se espalhar os caracteres da string com spread

// console.log(tituloArtigo)
// console.log(...tituloArtigo)

// /*
//     Espalha a string dentro de um array de forma q cada um dos caracteres ocupe um índice
// */

// console.log([...tituloArtigo])

// //Pode-se espalhar arrays em outros arrays
// let listaCursos1 = ['Lógica de Programação', 'Git e Github']
// let listaCursos2 = ['ReactJs', 'Java']
// let listaCursosCompleto = ['Spring Boot', 'Bancos de Dados', ...listaCursos1, ...listaCursos2]

// console.log(listaCursosCompleto)

// //Spread no contexto de objetos

// let pessoa = { nome: 'João', idade: 15 }
// let dadosCompletos = { endereco: 'Rua teste', ...pessoa }

// console.log(dadosCompletos)


/*
    No contexto Rest (muito utilizado em conjunto com funções):
    Recebe todos os parâmetros e os junta em estrutura de arrays, onde pode-se percorrer todos os índices de forma dinâmica.
 
    na prática seria como: function soma([3, 8, 5, 7]))
*/

function soma(...param) {
    let resultado = 0

    console.log(param)

    param.forEach(v => resultado += v)

    return resultado
}

console.log(soma(3, 8, 5, 7))


/*
    O primeiro parâmetro indicado será recebido pela função e armazenado em 'm', os demais parâmetros serão recebidos e unificados em um parâmetro array 'p'
*/

function multiplicacao(m, ...p) {
    console.log(m)
    console.log(p)

    let resultado = 0

    p.forEach(v => resultado += m * v)

    return resultado
}

console.log(multiplicacao(5, 7, 12, 3, 49))