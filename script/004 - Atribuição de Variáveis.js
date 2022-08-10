console.log("Trabalhando com atribuição de variáveis");

const idade = 29; // Variável imutável
let nome = "Davi"; // Variável mutável

// Manter sempre que puder em const

const sobrenome = "Hasson";

console.log(nome, sobrenome);
//console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`)

nome = nome + " " + sobrenome;
console.log(`Meu nome é ${nome}`);

let old; // Declarando variável
old = 26; // Atribuindo Valor
old += 1;
console.log(old)