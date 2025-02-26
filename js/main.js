const API_KEY = '7899286a92104be189c9e4344d3f2b18';
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

async function fetchNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            console.error('Erro ao carregar notícias');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    
    articles.forEach(article => {
        const card = `
            <article class="news-card" onclick="window.open('${article.url}', '_blank')">
                <img src="${article.urlToImage || './assets/imgs/default-image.jpg'}" 
                     alt="${article.title}" 
                     class="news-image"
                     onerror="this.src='./assets/imgs/default-image.jpg'">
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

// Carregar as notícias quando a página carregar
document.addEventListener('DOMContentLoaded', fetchNews);