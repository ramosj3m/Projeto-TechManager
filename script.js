
const botao = document.querySelector("#btnBoasVindas");

botao.style.color = "white";
botao.style.borderRadius = "10px";
botao.style.padding = "12px 20px";

const mensagem = document.querySelector("#mensagem");
const titulo = document.querySelector("h2");

let sistemaAtivo = false;

botao.addEventListener("click", function() {

    if (sistemaAtivo === false) {

        mensagem.textContent = "Sistema iniciado com sucesso!";
        botao.textContent = "Desligar sistema";
        titulo.textContent = "Painel de controle";

        botao.style.backgroundColor = "green";
        botao.classList.add("botao-ativo");
        botao.classList.remove("botao-inativo");

        sistemaAtivo = true;

    } else {

        mensagem.textContent = "Sistema aguardando inicialização.";
        botao.textContent = "Conhecer o sistema";

        botao.classList.add("botao-inativo");
        botao.classList.remove("botao-ativo");

        titulo.textContent = "Dashboard";
        botao.style.backgroundColor = "red";

        sistemaAtivo = false;
    }
});
