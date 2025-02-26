let currentPage = 0;
const newsPerPage = 12;
let allArticles = [];

const API_URL = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://newsapi.org/v2/everything?q=tech&language=pt&apiKey=7899286a92104be189c9e4344d3f2b18');
async function fetchNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (data.status === 'ok') {
            allArticles = data.articles;
            displayNews(currentPage);
            updateNavigationButtons();
        } else {
            console.error('Erro ao carregar notícias');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

function displayNews(page) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Limpa o container
    
    const start = page * newsPerPage;
    const end = start + newsPerPage;
    const pageArticles = allArticles.slice(start, end);
    
    pageArticles.forEach(article => {
        const imageSection = article.urlToImage 
            ? `<img src="${article.urlToImage}" 
                   alt="${article.title}" 
                   class="news-image"
                   onerror="this.style.display='none'">`
            : '';

        const card = `
            <article class="news-card" onclick="window.open('${article.url}', '_blank')">
                ${imageSection}
                <div class="news-content">
                    <h2 class="news-title">${article.title}</h2>
                    <p class="news-excerpt">
                        ${article.description || 'Descrição não disponível'}
                    </p>
                    <div class="news-meta">
                        <span class="news-date">${formatDate(article.publishedAt)}</span>
                        <span class="news-source">${article.source.name}</span>
                    </div>
                </div>
            </article>
        `;
        
        newsContainer.innerHTML += card;
    });
}

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

function updateNavigationButtons() {
    const totalPages = Math.ceil(allArticles.length / newsPerPage);
    
    // Remove navegação existente se houver
    const existingNav = document.querySelector('.news-navigation');
    if (existingNav) {
        existingNav.remove();
    }
    
    // Adiciona os botões de navegação se houver mais de uma página
    if (totalPages > 1) {
        const navigation = `
            <div class="news-navigation">
                <button onclick="previousPage()" ${currentPage === 0 ? 'disabled' : ''}>
                    ← Anterior
                </button>
                <button onclick="nextPage()" ${currentPage >= totalPages - 1 ? 'disabled' : ''}>
                    Próximo →
                </button>
            </div>
        `;
        
        document.getElementById('news-container').insertAdjacentHTML('afterend', navigation);
    }
}

function nextPage() {
    currentPage++;
    displayNews(currentPage);
    updateNavigationButtons();
}

function previousPage() {
    currentPage--;
    displayNews(currentPage);
    updateNavigationButtons();
}

document.addEventListener('DOMContentLoaded', fetchNews); 