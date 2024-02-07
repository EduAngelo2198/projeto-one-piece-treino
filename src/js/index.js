const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');
console.log(personagens)

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
        
        botao.classList.add("selecionado");
        personagens[index].classList.add("selecionado");
     })
})

function desselecionarPersonagem() {
    const charSelecionado = document.querySelector(".personagem.selecionado");
    charSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
