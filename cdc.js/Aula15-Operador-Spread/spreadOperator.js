// Spread operators em arrays ...

const listaAmanda = ["Lucas", "Beatriz", "Matheus"];

// const listaMaeAmanda = [listaAmanda[0], listaAmanda[1], listaAmanda[2], "Tais", "Talita"];
// const listaMaeAmanda = [ "Talita",...listaAmanda, "Tais"];
// console.log('Listta mãe da Amanda', listaMaeAmanda);

console.log('Lista da Amanda', listaAmanda);

const listaAmanda2 = [...listaAmanda];

listaAmanda2.push("Luiza");

console.log('Lista da Amanda 2', listaAmanda2);

console.log(" ");

console.log("-----------------------------------------");

console.log(" ");

// Spread operators em objetos ...

const professor1 = {
    materia: "Matemática",
    escola: "Escola Bia Codes",
    nome: "Amanda"
}

const professor2 ={
    ...professor1,
    nome: "Lucas"
}
console.log("Professore 1", professor1);
console.log("Professore 2", professor2);