const articleListScroll = document.getElementById("article-list-scroll");
const projectListScroll = document.getElementById("project-list-scroll"); 

var startPosition;
var endPosition;
var scrollPosition = articleListScroll.scrollLeft;

window.onload = ()=> {
    dragCarousel(articleListScroll);
}

function dragCarousel(element) {
    element.addEventListener("mousedown", (e) => {
        startPosition = e.clientX;
        onmousemove = (e) => {
            endPosition = e.clientX;
            var path = endPosition - startPosition;
            var moviment = (scrollPosition - path);
    
            if(moviment <= articleListScroll.scrollWidth){
                articleListScroll.scrollTo(moviment,0);
                if(moviment <= 0){
                    articleListScroll.scrollTo(0,0);
                    moviment = 0;
                }
            }else {
                articleListScroll.scrollTo(articleListScroll.scrollWidth, 0);
                moviment = articleListScroll.scrollWidth;
            }
            
            scrollPosition = moviment;
        }
        onmouseup = (e) => {
            onmousemove = (e) => {}
        }
    });
};


