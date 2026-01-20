const frm = document.querySelector("form");
const result = document.querySelector("#pagar");

frm.addEventListener("submit", (e) => {
  const quilo = Number(frm.inBuffet.value);
  const cliente = Number(frm.inConsumo.value);

  const valor = (quilo / 1000) * cliente;

  result.innerText = `Valor a pagar R$ ${valor.toFixed(2)}`;

  e.preventDefault();
});
