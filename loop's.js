// 1- For
// 2- While
// 3- Do..while
// 4- For..in
// 5- For..of

// 1-

for(let i = 1; i <= 5; i++){
    console.log('Estou aprendendo!',i);
}

for(let i = 1; i <=5; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// 2-

/*let i = 5;

while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i);
    }
i--;
}

// 3-

let i = 0;
do {
    console.log('digitando!', i);
    i++;
} while (i <= 10)

// 4-

const pessoa = {
    nome: 'Willian',
    idade: 23
};
// key-value
for(let chave in pessoa) {
    console.log(chave,pessoa);
}

const cores = ['vermelho','azul','verde'];

for (let indice in cores) {
    console.log(indice,cores[indice])
}

// 5-

for(let cor of cores){
    console.log(cor);
}*/