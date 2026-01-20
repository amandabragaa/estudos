const frm = document.querySelector("form");
const result1 = document.querySelector("#promo");
const result2 = document.querySelector("#produto");

frm.addEventListener("submit", (e) => {
  const desconto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);

  const total = preco * 0.5;
  const resultado = preco * 2 + total;

  result1.innerText = `${desconto} - Promoção: Leve 3 por R$: ${resultado.toFixed(2)}`;
  result2.innerText = `O 3° produto custa apenas R$: ${total.toFixed(2)}`;

  e.preventDefault();
});
