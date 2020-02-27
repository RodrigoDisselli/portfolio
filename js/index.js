const articleList = document.getElementById("article-list");

const renderArticle = articles.map( (object) => createArticleList(object.title, object.image, object.url));

function createArticleList(title, image, url) {
    var div = document.createElement('div');
    div.classList.add("card-list-horizontal-item");
    div.style.backgroundImage = `url(${image})`;
    div.innerHTML = `
      <a href="${url}" target="_blank" class="card-opacity"></a>
      <h3 class="card-title">${title}</h3>
      `
    return articleList.appendChild(div);
}