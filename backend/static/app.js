const paragraph = document.querySelector("p")
console.log(paragraph);
paragraph.textContent = "amo a yeyo"
console.log("Topics to search in mdn");
console.log("Truly values");
console.log("operator precedent");


const scores = {
  team: "guajus",
  sport:"pinball",
  wins: [],
}

if(!scores.wins.length){ // ✅  if  length  is  0 and 0 is falsy
  paragraph.textContent = "no wins"
}