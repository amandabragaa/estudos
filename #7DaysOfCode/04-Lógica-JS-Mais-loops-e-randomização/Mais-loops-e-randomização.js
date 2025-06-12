
// Meu código

for (let rodada = 2; rodada >= 0; rodada--) {
    console.log("rodada " + rodada);

    escolhaJogador = prompt("Escolha um número de 0 á 10");
    escolhaPc = Math.floor(Math.random() * 10) + 1;

    if(escolhaJogador == escolhaPc) {
        alert("Você acertou! Parabéns!");
        break;
    } else if (escolhaJogador > 10){
        alert(`Ops! Escolha um número de 1 a 10. Vamos de novo?`);
    } else {
        alert(`Você errou, o número era ${escolhaPc}. Você tem mais ${rodada} tentativas!`);
    }
}

// Correção

// const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
// let chute = "";
// let acertou = false;

// for(let contador = 0; contador < 3; contador++){    
//     chute = prompt("Tente adivinhar o número de 0 a 10:");
//     if(chute == numeroAdivinhacao){
//         alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
//         acertou = true;
//         break;
//     }
//     alert("Errado!");
// }
// if(!acertou){
//     alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
// }




