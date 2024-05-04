//variaveis
const mos = document.querySelector('.mostrar-projetos')
const projinativo = document.querySelectorAll('.projeto:not(.ativo)')
const conteudo = document.getElementById('content')

mos.addEventListener('click', () => {
    mostrarMais();
    esconderBotao();
});


function esconderBotao() {
    mos.classList.add('remover');
}

function mostrarMais() {
    projinativo.forEach(projinativo => {
        projinativo.classList.add('ativo');
    });
}

function toggleLanguage() {
    var textoPT = document.getElementById('texto-pt');
    var textoEN = document.getElementById('texto-en');

    // Alternar a visibilidade dos textos em português e inglês
    if (textoPT.style.display === 'block') {
        textoPT.style.display = 'none';
        textoEN.style.display = 'block';
    } else {
        textoPT.style.display = 'block';
        textoEN.style.display = 'none';
    }
}
