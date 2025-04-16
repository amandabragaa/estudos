console.log("------------------------------------------")
// operadores que a gente usa para coparar dois valores do JS.
// os operadores de comparação sempre vão retornar um valor boolean.

const idadeAmanda = 26;
const idadeLucas = 26;

console.log("Amanda é mais velha que Lucas?", idadeAmanda > idadeLucas);
console.log("Lucas é mais velho que Amanda?", idadeLucas > idadeAmanda);

console.log("Amanda e Luucas tem a mesma idade?", idadeAmanda == idadeLucas);

console.log("Amanda tem idade igual OU maior que Lucas?", idadeAmanda >= idadeLucas);
console.log("Amanda tem idade igual OU menor que Lucas?", idadeAmanda <= idadeLucas);

const maiorIdade = 18;

console.log("Amanda é maior de idade?", idadeAmanda >= maiorIdade);
console.log("Lucas é menor de idade?", idadeLucas < maiorIdade);

// Operadores de comparação de igualdade == / ===
// *evitar usar* == igualdade frouxa - coerção dos tipos  das variaveis 'converter a strring p/ tipo number' compara número + string
// === igualdade estrita - compara número + número
// sempre optem pela igualdade estrita === e deesigualdade estrita !==

const x = 10;
const y = 20;
const z = "10"; 

console.log("O número " + x + " é igual ao número " + y, x === y);
console.log("O número " + x + " é igual ao número " + z, x == z);

//desigualdade estrita !==
console.log("O número " + x + " é diferente do número " + y, x !== y);

console.log("O número " + x + " é diferente do número " + z, x !== z);

//desigualdade frouxa !=
console.log("O número " + x + " é diferente do número " + z, x != z);