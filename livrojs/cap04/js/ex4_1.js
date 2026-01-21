const frm = document.querySelector("form");
const result1 = document.querySelector("#media");
const result2 = document.querySelector("#situacao");

frm.addEventListener("submit", (e) => {
  const aluno = frm.inAluno.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);

  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    result2.innerText = `Parabéns ${aluno}! Você foi aprovado(a)`;
    result2.style.color = "blue";
  } else if (media >= 4) {
    result2.innerText = `${aluno} você está em exame`;
    result2.style.color = "green";
  } else {
    result2.innerText = `Ops ${aluno}! Você foi reprodado(a)`;
    result2.style.color = "red";
  }

  result1.innerText = `Média das Notas ${media.toFixed(2)}`;

  e.preventDefault();
});
