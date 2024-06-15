const container = document.querySelector("#container")

function createGrid(row,col){
    for(let i = 0;i<row;i++){
        //each row gets class row
        let divRow = document.createElement("div");
        divRow.setAttribute("class",`row`);
        container.appendChild(divRow);
        //each column gets class tile
        for(let j = 0;j<col;j++){
            let tile = (document.createElement("div"));
            divRow.appendChild(tile);
            tile.setAttribute("class","tile");
            tile.textContent= `[${i},${j}]`;
        }
    }
}

createGrid(16,16)
//set style to rows
const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
    row.setAttribute("style","display: flex; flex-wrap: wrap;flex-grow: 1;")
})
//sets style to tiles
const elements = document.querySelectorAll(".tile");
elements.forEach((element) => {
    element.setAttribute("style","border: 1px solid red; flex: 1; background-color; red");

})
elements.forEach((element) =>{
    element.addEventListener("mouseover", function(){
        element.setAttribute("style","border: 1px solid red; flex: 1; background-color: blue;");
    });
})
const newGridButton = document.getElementById("newGrid");
const clearGridButton = document.getElementById("clearGrid");

clearGridButton.addEventListener("click",function(){
    elements.forEach((element) => {
        element.setAttribute("style","border: 1px solid red; flex: 1; background-color; red");
    })
})