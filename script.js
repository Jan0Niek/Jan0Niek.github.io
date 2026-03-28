const currentDate = new Date()
const birthDate = new Date(2008, 2, 30)

let myAgeInSeconds = currentDate.valueOf() - birthDate.valueOf()
// let myAgeInYears = myAgeInSeconds/1000/60/60/24/365
let ageInFullYears = new Date(myAgeInSeconds).getFullYear()-1970

let thatSpanWithMyAge = document.getElementById("currentAge")
thatSpanWithMyAge.innerHTML = ageInFullYears

// a lot of ONZIN above to calculate my current age, more ONZIN right down here to somewhat animate that age... why was this the first thing i did for my page?
thatSpanWithMyAge.innerHTML = 0
let dumbAgeThingAnimInterval = window.setInterval(() => {
    thatSpanWithMyAge.innerHTML = parseInt(thatSpanWithMyAge.innerHTML) + 1
    if (thatSpanWithMyAge.innerHTML == ageInFullYears) clearInterval(dumbAgeThingAnimInterval)
}, 20 + Math.random()*60)



