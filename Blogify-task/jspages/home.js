
const searchform = document.querySelector('.search-form');
const links = document.querySelectorAll('.navbar a');
const newpost =document.getElementById('post');
const popularpost =document.querySelector('.popular');
const colmbtn = document.getElementById('colmbtn');
const gridbtn=  document.getElementById('gridbtn');
const newpost2 =document.getElementById('post-page');


  const blogAPI= fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json')  
  .then(res => res.json())
  .then(data => {

  data.articles.slice(0,6).forEach(article => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('new-card');
        cardDiv.innerHTML= `
          <img src="${article.urlToImage}" alt="">
          <div class="card-content">
          <div class="links">

          <a href="#" class="user">
          <i class="far fa-user"></i>
          <span> ${article.source.name}</span>
          </a>

          <a href="#" class="icon">
          <i class="far fa-comment"></i>
          <span class="puplishAt">${new Date(article.publishedAt)?.toUTCString()}
          </span>
          </a>
          </div>
            <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a class="read-more" href="${article.url}" target="_blank">Read more</a>
        </div>
      `;
      newpost.appendChild(cardDiv)
    });

    data.articles.slice(0,3).forEach(article => {
      const cardDiv2 =document.createElement("div");
      cardDiv2.classList.add('popularpost');
      cardDiv2.innerHTML=`
      <img src="${article.urlToImage}" alt="">
            <h4>${article.title}</h4>

      `;
      popularpost.appendChild(cardDiv2);
    });
  
  })
  colmbtn.onclick=()=>{
  newpost.style.display='block';
  
  }
  gridbtn.onclick =() =>{
  newpost.style.display='grid';

  }