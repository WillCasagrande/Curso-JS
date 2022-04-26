// 1-Operadores Aritiméticos (matemáticos)
// 2-Operadores Atribuição
// 3-Operadores de Comparação
// 4-Operadores Lógicos
// 5-Operadores Bitwise

// 1-
let salario = 1500;

// +, -, *, /, **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

// ++, -- (incremento e decremento)

let idade = 23;

console.log(++idade);
console.log(--idade);

// 2- (=, -=, +=-)

let valorTeclado = 100;
valorTeclado -= valorTeclado;
valorTeclado += valorTeclado;

// 3- 
// Igualdade estrita (compara tipo e valores)
console.log(1 === 1);
console.log('1' === 1);

// Igualdade solta (compara somente valores)
 console.log(1 == 1);
 console.log('1' == 1);

// Operador ternário
// ex: um cliente, 100 pontos ele é premium, caso contrário, comum 
let pontos = 100;
let tipo = pontos > 100? 'premium' : 'comum';
console.log(tipo);

// 4-
// Operador Lógico e (&&)
// Retorna TRUE se os dois operandos forem true
// console.log(true && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

// Operador Lógico ou (||)
// Retorna true se um dos operandos forem true

let menorDeIdade = false;
let nãoPossuiCarteiraDeTrabalho = true;
let poderáAplicar = menorDeIdade || nãoPossuiCarteiraDeTrabalho;

console.log(podeAplicar);

// Operador Lógico NOT (!)

let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);
