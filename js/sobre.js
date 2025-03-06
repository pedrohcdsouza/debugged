document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        mensagem: document.getElementById('mensagem').value
    };

    console.log('Dados do formulário:', formData);
    
    this.reset();
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

}); 