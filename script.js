const botao = document.querySelector("#btnBoasVindas");

const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function() {

    mensagem.textContent = "Sistema iniciado com sucesso!";

});