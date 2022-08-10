console.log(`Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let cont = 0;
let destinoExiste = false;

while(cont < 3){

    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
        break;
    } else{
        destinoExiste = false;
    }
    cont += 1;
}

if(destinoExiste == true){
    console.log("Destino existe!");
} if(podeComprar){
    console.log("Boa Viagem!")
} else{
    console.log("Destino não existe")
}

for(let i = 0; cont < 3; i ++){ // i ++ é o mesmo que contador += 1
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
    }
}