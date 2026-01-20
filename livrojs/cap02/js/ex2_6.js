const frm = document.querySelector("form");
const result = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const uso = Number(frm.inUso.value);
  const tempo = Number(frm.inTempo.value);

  const pagar = Math.ceil(tempo / 15) * uso;

  result.innerText = `Valor a Pagar R$: ${pagar.toFixed(2)}`;

  e.preventDefault();
});
