// Escopo --> identificar em qual parte do seu código a variável está sendo chamada, sua função sendo declarada

// Escopo Global --> variavel acessada em qualquer lugar
// Escopo de Bloco --> variavel local
// Escopo de Função

const x = 'variavel global';

// escopo de bloco
if (x){
  const z = "varialvel de bloco" 
  console.log("X é: ", x);
  console.log("Z é: ", z);

}


// escopo de função
const funcao = () => {
  const a = 'variavel do escopo da função';
  console.log("Na função, A é", a);
  console.log("Na função, X é", x);
}

funcao();

// Hoisting --> é o comportamento em que declarações de variáveis e funções são "elevadas" para o topo do seu escopo durante a fase de compilação, antes mesmo da execução do código.