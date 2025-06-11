const area = prompt("Qual área você quer seguir? 1 - FRONTEND ou 2 - BACKEND");

if (area == 1){
    const frontend1 = prompt("Você quer aprender? 1 - REACT ou 2 - VUE")
    alert(`Que você tenha uma carreira brilhante!`)
} else {
    const backend2 = prompt("Você quer aprender? 1 - C# ou 2 - JAVA")
    alert(`Que você tenha uma carreira brilhante!`)
}

const escolha = prompt(`Você quer seguir se especializando em ${area} a ou deseja e tornar um FULLSTACK? 1 - SIM ou 2 - NÃO`);

prompt("Qual tecnologia você quer aprender?");
let iniciar = 0
while(iniciar < 8){
    prompt("em mais alguma tecnologia que você gostaria de aprender?")
    iniciar = iniciar + 1;
}
