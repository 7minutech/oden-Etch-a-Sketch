const container = document.querySelector("#container")
const newGridButton = document.getElementById("newGrid");
const clearGridButton = document.getElementById("clearGrid");


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
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.setAttribute("style","display: flex; flex-wrap: wrap;flex-grow: 1;")
    })
    let elements = document.querySelectorAll(".tile");
    elements.forEach((element) => {
        element.setAttribute("style","flex: 1;min-height: 50px;min-width:50px");
    
    })
    elements.forEach((element) =>{
        element.addEventListener("mouseover", function(){
            element.setAttribute("style","flex: 1; background-color: #86b6b6;min-height: 50px;min-width:50px");
        });
    })
    clearGridButton.addEventListener("click",function(){
        elements.forEach((element) => {
            element.setAttribute("style","flex: 1;min-height: 50px;min-width:50px");
        })
    })

}
function deleteGrid(){
    let container = document.querySelector("#container");
    let rows = document.querySelectorAll(".row");
    let rowChild = rows.lastElementChild;
    let containerChild = container.lastElementChild;
    while(rowChild){
        rows.removeChild(rowChild);
        rowChild = rows.lastElementChild;
    }
    while(containerChild){
        container.removeChild(containerChild);
        containerChild = container.lastElementChild;
    }
}
window.onload = createGrid(16,16);

//set style to rows
const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
    row.setAttribute("style","display: flex; flex-wrap: wrap;flex-grow: 1;")
})

newGridButton.addEventListener("click",function(){
    let dimension = prompt("Please enter the dimension of the new grid: ");
    dimension = parseInt(dimension);
    deleteGrid();
    createGrid(dimension,dimension);
})
