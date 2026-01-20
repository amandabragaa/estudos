const frm = document.querySelector("form");
const result1 = document.querySelector("#promocao");
const result2 = document.querySelector("#total");

frm.addEventListener("submit", (e) => {
  const promo = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);

  const valor = Math.floor(preco * 2);

  result1.innerText = `Promoção de ${promo}`;
  result2.innerText = `Leve 2 por apenas R$: ${valor.toFixed(2)}`;

  e.preventDefault();
});
