// Falsy:
// Undefined
// null
// 0
// false
// ''
// NaN - not a number

// Truthy: tudo que não está acima

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
// A resposta será vermelho pois ele já achou um 'string' na primeira opção e vai parar de comparar
// Se fosse um 'string' vazio a resposta seria a outra, ex:

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);