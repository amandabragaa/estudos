const area = prompt("Qual área você quer seguir? FRONTEND ou BACKEND");
let linguagem = "";
if (area ==="FRONTEND"){
    linguagem = prompt("Você quer aprender REACT ou VUE?");
} 
else if (area === "BACKEND"){ 
    linguagem = prompt("Você quer aprender C# ou JAVA?")
}
 else {
    alert("Você não inseriu umma área válida!");
}

const escolha = prompt(`1 - Você quer seguir se especializando na area escolhida ou  2 - deseja e tornar um FULLSTACK?`);
if (escolha == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
} else if (escolha == 2){
    alert(`Chegou a horade começar a aprender outras liguagens além de ${linguagem} se você quer se tornr um Fullstack!`);
} else{
    alert("Você não inseriu uma área válida!");
}

let msg =  prompt("Tem mais alguma tecnologia que você quer aprender? Digite 'ok' em caso positivo");
while(msg === "ok"){
    let novaTec = prompt("Qual?");
    alert(`${novaTec} é uma tecnologia muito interesante!`)
    prompt("Tem mais alguma tecnologia que você quer aprender? Digite 'ok' em caso positivo");
}
