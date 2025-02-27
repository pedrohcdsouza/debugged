document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura os dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        mensagem: document.getElementById('mensagem').value
    };

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor
    console.log('Dados do formulário:', formData);
    
    // Limpa o formulário
    this.reset();
    
    // Feedback para o usuário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
}); 