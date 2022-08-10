console.log(`Trabalhando com listas`);

/*
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis:`);
console.log(salvador, saoPaulo, rioDeJaneiro);
*/

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`, 
    `Curitiba`, 
);

listaDeDestinos.push( // Adicionando um item na Array
    `Ceará`
);

listaDeDestinos.splice(0,1); // Removendo um item da Array
                            // (Posição, qntd de itens para ser excluidos)

console.log(listaDeDestinos[2]);

console.log(`Destinos possíveis: ${listaDeDestinos}`);