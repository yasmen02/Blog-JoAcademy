
const searchform = document.querySelector('.search-form');
const links = document.querySelectorAll('.navbar a');
const searchbox = document.getElementById('search-box');
const newpost2 = document.getElementById('post-page');
let articlesData = []; // Store all articles data

// Fetch data from API and populate articlesData
const fetchAndPopulateData = () => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json')
    .then(res => res.json())
    .then(data => {
        articlesData = data.articles;
        displayArticles(articlesData); 
    });
}
// Function to display articles
const displayArticles = (articles) => {
    newpost2.innerHTML = ''; 
    articles.forEach(article => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('new-card');
        cardDiv.innerHTML = `
            <img src="${article.urlToImage}" alt="">
            <div class="card-content">
                <div class="links">
                    <a href="#" class="user">
                        <i class="far fa-user"></i>
                        <span> ${article.source.name}</span>
                    </a>
                    <a href="#" class="icon">
                        <i class="far fa-comment"></i>
                        <span>${article.publishedAt}</span>
                    </a>
                
                </div>
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a class="read-more" href="${article.url}" target="_blank">Read more</a>
            </div>
        `;
        newpost2.appendChild(cardDiv);
    });
}

// Function to filter articles 
const searchArticles = (query) => {
    const filteredArticles = articlesData.filter(article => {
        const title = article.title.toLowerCase();
        return title.includes(query) ;
    });
    displayArticles(filteredArticles);
}

// Event listener for search box input
searchbox.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    searchArticles(query);
});

// Initial fetch and display
fetchAndPopulateData();
