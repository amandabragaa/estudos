// função sem parametros e sem retorno
// function imprimir(){
//     console.log("Não tenha medo!");
// }

// imprimir();

// function imprimir(impressao){
//    console.log(impressao);
// }

// expressão de função <-- de preferência a essas que são atribuidas a variáveis
const imprimir = function (impressao){
    console.log(impressao);
}

imprimir("oi");

// function calcularSoma(valor1, valor2){
//     return valor1 + valor2;
// }


const calcularSoma = function (valor1, valor2){
    return valor1 + valor2;
}

const valor1 = 2;
const valor2 = 10;

imprimir(`A soma entre ${valor1} e ${valor2} é: ${calcularSoma(valor1,valor2)}`);