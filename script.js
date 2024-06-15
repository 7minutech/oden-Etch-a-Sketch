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
    element.setAttribute("style","flex: 1;min-height: 50px;min-width:50px");

})
elements.forEach((element) =>{
    element.addEventListener("mouseover", function(){
        element.setAttribute("style","flex: 1; background-color: #86b6b6;min-height: 50px;min-width:50px");
    });
})
const newGridButton = document.getElementById("newGrid");
const clearGridButton = document.getElementById("clearGrid");

clearGridButton.addEventListener("click",function(){
    elements.forEach((element) => {
        element.setAttribute("style","flex: 1;min-height: 50px;min-width:50px");
    })
})