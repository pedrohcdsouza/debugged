let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.miniatura');
    const imagemAtual = document.getElementById('imagemAtual');
    const dots = document.querySelectorAll('.miniatura');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    imagemAtual.src = slides[slideIndex - 1].src;

    dots.forEach(dot => dot.classList.remove('ativa'));

    dots[slideIndex - 1].classList.add('ativa');
}

document.querySelector('.seta-direita').addEventListener('click', () => plusSlides(1));
document.querySelector('.seta-esquerda').addEventListener('click', () => plusSlides(-1));

document.querySelectorAll('.miniatura').forEach((miniatura, indice) => {
    miniatura.addEventListener('click', () => currentSlide(indice + 1));
});