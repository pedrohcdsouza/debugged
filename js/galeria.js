const imagemAtual = document.getElementById('imagemAtual');
const miniaturas = document.querySelectorAll('.miniatura');
const setaDireita = document.querySelector('.seta-direita');
const setaEsquerda = document.querySelector('.seta-esquerda');
let indiceAtual = 0;

function atualizarImagem(indice) {
    imagemAtual.src = miniaturas[indice].src;
    document.querySelector('.miniatura.ativa').classList.remove('ativa');
    miniaturas[indice].classList.add('ativa');
}

setaDireita.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % miniaturas.length;
    atualizarImagem(indiceAtual);
});

setaEsquerda.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + miniaturas.length) % miniaturas.length;
    atualizarImagem(indiceAtual);
});

miniaturas.forEach((miniatura, indice) => {
    miniatura.addEventListener('click', () => {
        indiceAtual = indice;
        atualizarImagem(indiceAtual);
    });
});