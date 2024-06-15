const container = document.querySelector("#container")
const rows = document.querySelectorAll(".rows");
 
//element.setAttribute("style","width: 200px; height: 200px;")
function createGrid(row,col){
    for(let i = 0;i<row;i++){
        let divRow = document.createElement("div");
        divRow.setAttribute("class",`row`);
        divRow.setAttribute("style","display: flex; flex-wrap: wrap;flex-grow: 1;")
        container.appendChild(divRow);
        
        for(let j = 0;j<col;j++){
            let tile = (document.createElement("div"));
            divRow.appendChild(tile);
            tile.setAttribute("class","tile");
            tile.textContent= `[${i},${j}]`;
        }
    }
}

createGrid(16,16);
const elements = document.querySelectorAll(".tile");
elements.forEach((element) => {
    element.setAttribute("style","border: 1px solid black; flex: 1; background-color; red")

})