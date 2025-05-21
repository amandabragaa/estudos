const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// MAP

const distanciaEmKm = distanciaEmMetros.map(distancia => distancia / 1000);
console.log("distancia em km", distanciaEmKm);

//FILTER
const itensFiltrados = distanciaEmMetros.filter((distancia) => {
  if (distancia > 2000) return distancia;
});

// const itensFiltrados = distanciaEmMetros.filter((distancia, index, arrayOriginal) => {
//     console.log(`Array original: ${arrayOriginal}`)
//     console.log(`A distância ${distancia} está no indice ${index}`)
//     if (distancia > 2000) return distancia;
// });

// const itensFiltrados = distanciaEmMetros.filter(distancia => distancia > 2000);
console.log("Itens filtadros", itensFiltrados);

//REDUCE
const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => {
    return acc + distancia
},);
console.log("Distânia Total: ", distanciaTotal);