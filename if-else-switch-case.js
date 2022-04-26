// IF - ELSE

let hora = 10;


if (hora > 6 && hora < 12) {
    console.log("bom dia");
}
else if (hora > 12 && hora < 18) {
    console.log("boa tarde");
}
else {
    console.log("boa noite");
}

// Switch - case   

let permissao; // comum, gerente, diretor
permissao = 'diretor';
switch(permissao) {
    case 'comum':
    console.log('usuário comum');
    break;

    case 'gerente':
    console.log('usuário gerente');
    break;

    case 'diretor':
    console.log('usuário diretor');
    break;

    default:
    console.log('usuário não reconhecido!');
}