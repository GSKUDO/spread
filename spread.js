// exercicio a

const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [45, 50, 55, 60];

function multiplicacao(n1, n2, n3, n4) {
    let resultado = n1 * n2 * n3 * n4;
    return resultado;
}

console.log(multiplicacao(... numbers));
console.log(multiplicacao(...numbers2));

// exercicio b 

function juntatudo(vetor1, vetor2){
	juncao = [...vetor1, ...vetor2]; 
  return juncao;
}

console.log(juntatudo(numbers, numbers2));

// exercicio c

let numerossorteados = []; 

for (var i = 0; i < 10; i++) {
    valor = parseInt(Math.random() * 100);
    numerossorteados.push(valor);
}

console.log(numerossorteados);

console.log(Math.max(...numerossorteados));