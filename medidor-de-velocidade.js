 // Velocidade máxima de 80
 // A cada 5km acima do limite ganha 1 ponto
 // Math.floor
 // 12 pontos a carteira é suspensa

verificarVelocidade(135);

 function verificarVelocidade(velocidade){
     const velocidadeMaxima = 80;
     const kmPorPonto = 5;
     if(velocidade <= velocidadeMaxima)
     console.log('OK');
     else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if(pontos >= 12)
        console.log('Carteira suspensa');
        else
        console.log('Pontos', pontos);
     }
 }