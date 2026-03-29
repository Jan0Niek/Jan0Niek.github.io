const currentDate = new Date()
const birthDate = new Date(2008, 2, 30)

let myAgeInMiliSeconds = currentDate.valueOf() - birthDate.valueOf()
// let myAgeInYears = myAgeInMiliSeconds/1000/60/60/24/365
let ageInFullYears = new Date(myAgeInMiliSeconds).getFullYear()-1970

let thatSpanWithMyAge = document.getElementById("currentAge")
thatSpanWithMyAge.innerHTML = ageInFullYears

// a lot of ONZIN above to calculate my current age, more ONZIN right down here to somewhat animate that age... why was this the first thing i did for my page?
thatSpanWithMyAge.innerHTML = 0
let dumbAgeThingAnimInterval = window.setInterval(() => {
    thatSpanWithMyAge.innerHTML = parseInt(thatSpanWithMyAge.innerHTML) + 1
    if (thatSpanWithMyAge.innerHTML == ageInFullYears) clearInterval(dumbAgeThingAnimInterval)
}, 20 + Math.random()*60)


//it shows as flex not as block
function hideShowArticle(/** @type {HTMLElement} */ article) {
    for (let child of article.children) {
        if (child.tagName != 'H1'){
            if (child.style.display == 'none'){
                child.style.display = 'flex'
                article.style.cursor = 'pointer' //could have different cursor depending on state of article (collapsed/visible)
            }else{
                child.style.display = 'none'
                article.style.cursor = 'pointer'
            }
        }
    }
}

function hideArticle(/** @type {HTMLElement} */ article){
    for (let child of article.children) {
            if (child.tagName != 'H1'){
                child.style.display = 'none'
                article.style.cursor = 'pointer'
            }
        }
}

let hidyArticles = document.getElementsByClassName("hideableChildrenNotHeader")
for (let article of hidyArticles) {
    article.addEventListener("click", ()=>{hideShowArticle(article)}) // i love js man
    // console.log(article.id.length)

    // verstopt alles behalve de gelinkte pagina als er een gelinkte pagina is, anders verstopt het alles behalve de elementen met startUnhidden
    // hides everything except the linked to section if there is a linked to section, otherwise hides everything except elements with the startUnhidden class
    if((window.location.href.endsWith(article.id) && article.id.length > 1)){
        for (let article2 of hidyArticles) {
            if(article != article2) hideArticle(article2)
        }
    } else if(!article.classList.contains("startUnhidden")){
        hideArticle(article)
    }
    
}