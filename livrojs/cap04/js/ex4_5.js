const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);

  let num = Math.sqrt(numero);
  if (Number.isInteger(num)) {
    resp.innerText = `Raiz: ${num}`;
  } else {
    resp.innerText = `Não há raiz exata para ${numero}`;
  }
});
