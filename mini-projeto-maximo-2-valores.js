let valorMaior = MaxDoisNumeros(10,20);
console.log(valorMaior);

function MaxDoisNumeros(numero1,numero2){
    if(numero1 > numero2)
        return numero1;
    else return numero2;

// Projeto executado usando if/else
// Pode ser feito com operador ternário (para funcionar comentar código acima)

let doisNumeros = maiorEntreNumeros(12,22);
console.log(doisNumeros);

function maiorEntreNumeros (valor1,valor2){
    return valor1 > valor2 ? valor1 : valor2;
}