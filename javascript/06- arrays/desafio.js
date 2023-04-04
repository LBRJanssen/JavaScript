// 1) Crie um programa que dado um número, imprima a sua tabuada.
/*
// Definindo um lista vazia.
const tabuada = [];

// Defini um item na lista.
tabuada.push(1);
// Multiplicando o número.

for (let i = 1; i <= 10; i++) {
    console.log(i * tabuada);
}


// 2) Crie um programa que percorre uma lista e imprima cada numero PAR encontrado.

// Definindo uma lista vazia;
const list = [];
// Definindo itens da lista;
list.push(11);
list.push(24);
list.push(35);
list.push(42);
list.push(57);
list.push(65);
// Percorrendo a lista e separando os numeros PARES.
for (let i = 0; i < list.length; i++) {
    const number = list[i];
    if (number % 2 === 0) {
        console.log(number);
    }
}

*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.



let media = gets();

if (media < 5) {
    print('REP');
} else if (media >= 5 && media < 7) {
    console.log('REC');
} else if (media > 7) {
    console.log('APR')
}