const paragraph = document.querySelector("p")

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

// Functions

function makeBetweenFunc (x,y){
  return function (num) {
    if (num >= x && num <= y) {
      return true;
    }
  }
}

const isChild = makeBetweenFunc(0,18);

print(isChild(6) ? "is Child 👣" : "is old 👴")

const isInNinties = makeBetweenFunc(1990, 2000);

print(isInNinties(1994) ? 'is in nineties' : 'isnt')




function addElement (text) {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode(text);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  console.log({newDiv, currentDiv});
  document.body.insertBefore(newDiv, currentDiv);
}

function print(text) {
  addElement(text)
}


