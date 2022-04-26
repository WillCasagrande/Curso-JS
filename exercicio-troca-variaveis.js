let a = 'Vermelho';
let b = 'Azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// ao declarar a = b estou dizendo que 'a' é azul
// porém se declarar b = a ainda assim será azul pois ele puxa o resultado de (a = b)
// então declaro uma variável 'c' para guardar o valor 'a'
// com isso b = c é vermelho, pois c se refere ao valor de 'a'