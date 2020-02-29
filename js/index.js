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
    <a href="${url}" class="card-title">${title}</a>
    `
  return projectList.appendChild(div);
}

function createArticleList(title, image, url) {
    var div = document.createElement('div');
    div.classList.add("card-list-horizontal-item");
    div.style.backgroundImage = `url(${image})`;
    div.innerHTML = `
      <a href="${url}" target="_blank" class="card-opacity"></a>
      <a href="${url}" class="card-title">${title}</a>
      `
    return articleList.appendChild(div);
}

function goTo(div) {
  document.getElementById(div).scrollIntoView({behavior: "smooth"})
}

// function track(category, label, action) {
//   gtag('event', 'play', {
//     'event_category': 'Videos',
//     'event_label': 'Fall Campaign'
//   });
// }

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


  target.style.position = "relative";
  target.appendChild(copyAlert);
  setTimeout(() => {
    target.removeChild(copyAlert);
  },"1500");
}