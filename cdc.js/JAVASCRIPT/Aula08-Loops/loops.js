// FOR / WHILE / DO WHILE
// For = a variável pode ser declarado dentro do loop
// while e do while = a variável tem que ser declada fora do loop

for (let dia = 1; dia <= 30; dia++){
    console.log("Dia", dia);
};

console.log("----------------------------------------");

let dia2 = 1;
while (dia2 <= 30){
    console.log("Dia", dia2);
    dia2++;
};

console.log("----------------------------------------");

let dia3 = 1;
do{
    console.log("Dia", dia3);
    dia3++;
}while(dia3 <= 30);
