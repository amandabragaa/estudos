
// PADRÃO/ORIGINAL

// function calcularSoma(valor1, valor2){
//     return valor1 + valor2;
// }

// console.log(calcularSoma(valor1, valor2));

// EXPRESSÃO DE FUNÇÃO --> evitar os problemas de hoisting

// const calcularSoma = function (valor1, valor2){
//     return valor1 + valor2;
// }

//ARROW FUNCTIONS <-- mais comum de ser utilizado

// const calcularSoma = (valor1, valor2) => valor1 + valor2; <-- Uteis quando tem pequenasfuções que executas pequenas coisas

const calcularSoma = (valor1, valor2) => {
    return valor1 + valor2;
}

const valor1 = 2;
const valor2 = 10;

const resultadoSoma = calcularSoma(valor1, valor2);

console.log(`Resultado da soma de ${valor1} + ${valor2}: ${resultadoSoma}`);

const imprimir = impressao => console.log(impressao);

imprimir("oi");