let gridSize = 2; //size of one side of grid

let divGrid = document.querySelector('.grid-container');

//make sure 
let divWidth = divGrid.offsetWidth / gridSize;

for(let i = 0; i < gridSize * gridSize; i++){
    let newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    newDiv.style.minWidth = divWidth + 'px'; //minWidth so that it is forced to wrap and make grid
    newDiv.addEventListener('mouseover', sketchGridItem);
    divGrid.appendChild(newDiv);
}

function sketchGridItem(event){
    event.target.style.backgroundColor = 'black';
}