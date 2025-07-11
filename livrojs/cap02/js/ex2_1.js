// cria referência ao form e ao elemento h3 (onde sera exibida a resposta)
const frm = document.querySelector("form");
let resp = document.querySelector("h3");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inName.value //obtém o nome digitado no form
    resp.innerText = `Olá ${nome}` //exibe a resposta do programa
    e.preventDefaut() //evita o envio do form
});