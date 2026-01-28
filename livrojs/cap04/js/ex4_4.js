const frm = document.querySelector("form");
const result = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const hora = Number(frm.inHora.value);
  let fuso = hora + 5;

  if (fuso > 24) {
    fuso = fuso - 24;
  }

  result.innerText = `Hora na França: ${fuso.toFixed(2)}`;
});
