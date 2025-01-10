const clearCon = document.querySelector("#clearCon")
const chooseGridSize = document.querySelector("#chooseGridSize")
clearCon.addEventListener("click",clearall)
chooseGridSize.addEventListener("click",promptfunct)

function clear (square) {
    square.classList.remove("affectedSquare")
}
function clearall () {
    allsquares = document.querySelectorAll(".Startsquare")
    allsquares.forEach(clear)
}
function promptfunct () {
    let size = prompt("How Big would you like the grid? Choose a number between 1 and 100","16")
    changegridsize(size)
    return size
    
}

function removeElement(square){
    square.remove()
}
function removeall(){
    allsquares = document.querySelectorAll(".Startsquare");
    allsquares.forEach(removeElement)
}

function changegridsize(size) {
    console.log("hello")
    console.log(size)
    let sizetonumber = Number(size)
    console.log(sizetonumber)
    let startsquaresize = 640 / sizetonumber
    let forivinpairsnumber = sizetonumber * sizetonumber
    removeall()

    for (let i = 0; i < forivinpairsnumber; i++) {
        console.log(i);
        const EtchASketchSquares = document.querySelector("#EtchASketchSquares");
        let startsquare = document.createElement("div");
        /*startsquare.classList.add("Startsquare");*/
        startsquare.classList.add("Startsquare")
        startsquare.style.height = startsquaresize + "px";
        startsquare.style.width = startsquaresize + "px";
        startsquare.style.boxSizing = "border-box";
        startsquare.style.border = "1px, solid, black";




        startsquare.setAttribute('id', i)
        EtchASketchSquares.appendChild(startsquare)
    }
    allsquares = document.querySelectorAll(".Startsquare")
    allsquares.forEach(addclicklisterner)
}



function start() {
    let startsquaresize = 640 / 16
    console.log(startsquaresize)

    for (let i = 0; i < 256; i++) {
        console.log(i);
        const EtchASketchSquares = document.querySelector("#EtchASketchSquares");
        let startsquare = document.createElement("div");
        startsquare.classList.add("Startsquare");
        startsquare.setAttribute('id', i)
        EtchASketchSquares.appendChild(startsquare)
    }
}

function test (event){
    let affectedSquare = event.target
    console.log(affectedSquare.id)
    affectedSquare.classList.add("affectedSquare");
}

start();
let allsquares = document.querySelectorAll(".Startsquare");

function addclicklisterner (square) {
    square.addEventListener("mouseover",test)
}
allsquares.forEach(addclicklisterner)

