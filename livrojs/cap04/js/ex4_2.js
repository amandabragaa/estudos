const frm = document.querySelector("form");
const resp = document.querySelector("h3");

const inNome = document.querySelector("#inNome");
const inMasculino = document.querySelector("#inMasculino");
const inAltura = document.querySelector("#inAltura");

frm.addEventListener("submit", (e) => {
  const nome = inNome.value;
  const masculino = inMasculino.checked;
  const altura = Number(inAltura.value);

  // let peso;
  // if (masculino) {
  //   peso = 22 * Math.pow(altura, 2);
  // } else {
  //   peso = 21 * Math.pow(altura, 2);
  // }

  // Aprendendo operador ternário
  const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

  resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;

  e.preventDefault();
});

frm.addEventListener("reset", () => {
  resp.innerText = "";
});
