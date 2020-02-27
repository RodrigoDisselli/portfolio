const projectList = document.getElementById("project-list");
const articleList = document.getElementById("article-list");

const renderProjects = projects.map( (object) => createProjectList(object.title, object.image, object.url));
const renderArticles = articles.map( (object) => createArticleList(object.title, object.image, object.url));

function createProjectList(title, image, url) {
  var div = document.createElement('div');
  div.classList.add("card-list-horizontal-item");
  div.style.backgroundImage = `url(${image})`;
  div.innerHTML = `
    <a href="${url}" target="_blank" class="card-opacity"></a>
    <h3 class="card-title">${title}</h3>
    `
  return projectList.appendChild(div);
}

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

function goTo(div) {
  document.getElementById(div).scrollIntoView({behavior: "smooth"})
}