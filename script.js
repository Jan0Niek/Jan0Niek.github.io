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
function hideShowArticle(/** @type {Element} */ article) {
    console.log('clicked')
    for (let child of article.children) {
        if (child.tagName != 'H1'){
            if (child.style.display == 'none'){
                child.style.display = 'flex'
            }else{
                child.style.display = 'none'
            }
        }
    }
}

let hidyArticles = document.getElementsByClassName("hideableChildrenNotHeader")
for (let article of hidyArticles) {
    article.addEventListener("click", function(){hideShowArticle(article)}) // i love js man


    if (!article.classList.contains("startUnhidden")){
        for (let child of article.children) {
            if (child.tagName != 'H1'){
                child.style.display = 'none'
            }
        }
    }
}