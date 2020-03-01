const projectList = document.getElementById("project-list");
const articleList = document.getElementById("article-list");

const renderProjects = projects.map( (object) => createList(object.title, object.image, object.url, projectList));
const renderArticles = articles.map( (object) => createList(object.title, object.image, object.url, articleList));

function createList(title, image, url, parent) {
  var div = document.createElement('div');
  div.classList.add("card-list-horizontal-item");
  div.style.backgroundImage = `url(${image})`;
  div.innerHTML = `
    <a href="${url}" target="_blank" class="card-opacity"></a>
    <a href="${url}" class="card-title">${title}</a>
    `
  return parent.appendChild(div);
}

function goTo(div) {
  document.getElementById(div).scrollIntoView({behavior: "smooth"})
}

function copyText(text, label, elementId){
  var target = document.getElementById(elementId);
  var copyAlert = document.createElement('div');
  copyAlert.classList.add("inline-alert");
  copyAlert.innerHTML=`
    ${label}
  `


  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);


  if(target.offsetLeft > (window.innerWidth / 2)){
    copyAlert.style.right = "0px";
    copyAlert.style.left = "unset";
  }


  target.style.position = "relative";
  target.appendChild(copyAlert);
  setTimeout(() => {
    target.removeChild(copyAlert);
  },"1500");
}