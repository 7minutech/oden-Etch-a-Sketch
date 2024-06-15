const container = document.querySelector("#container")
const newGridButton = document.getElementById("newGrid");
const clearGridButton = document.getElementById("clearGrid");

function randomColor(){
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

}
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
        element.setAttribute("style","flex: 1;");
    
    })
    elements.forEach((element) =>{
        element.addEventListener("mouseover", function(){
            if(!(element.hasAttribute("id"))){
                element.setAttribute("style",`flex: 1; background-color: ${randomColor()};`);
                element.setAttribute("id","colored");
            }
            
        });
    })
    clearGridButton.addEventListener("click",function(){
        elements.forEach((element) => {
            element.setAttribute("style","flex: 1;");
            element.removeAttribute("id");
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
    if(dimension > 100){
        alert("Over limit of 100")
        dimension = prompt("Please enter the dimension of the new grid: ");
    }
    deleteGrid();
    createGrid(dimension,dimension);
})
