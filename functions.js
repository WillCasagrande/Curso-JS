// Verbo + Substantivo
// ex: 

let corSite = "azul";
function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
}

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite);


let fonteHTML = "arial";
function alteraFonte(fonte,textura){
    fonteHTML = fonte + ' ' + textura;
}

console.log(fonteHTML);
alteraFonte("calibra","opaco");
console.log(fonteHTML);

// Tipos de funções:
// Realizar uma tarefa, não devolve nada
// ex:
function dizerNome(){
    console.log('Will');
}

dizerNome();

// Faz um cálculo ou operação e retorna algo
function MultiplicaPorDois(valor){
    return valor* 2;
}

console.log(MultiplicaPorDois(10));

let resultado = MultiplicaPorDois(10);

console.log(resultado);


