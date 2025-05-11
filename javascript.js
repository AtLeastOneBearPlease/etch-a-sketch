let gridSize = 16;

let gridContainer = document.querySelector('.grid-container');

let button = document.querySelector('.reset-button');

button.addEventListener('click', newGrid);

gridContainer.addEventListener('mouseover', sketchGridItem);

generateDivGrid(gridSize);

//generates new div grid, place inside doc fragment, and returns the fragment
function generateDivGrid(gridSize){
    let divWidth = gridContainer.offsetWidth / gridSize; 
    let docFragment = document.createDocumentFragment();

    for(let i = 0; i < gridSize * gridSize; i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'grid-item';
        newDiv.style.minWidth = divWidth + 'px'; //minWidth to force wrap for grid
        docFragment.appendChild(newDiv);
    }

    gridContainer.appendChild(docFragment);
}

function promptUserForGridSize(){
    let acceptableSize = false;
    let size;

    while(!acceptableSize){
        size = prompt("Please provide a size of grid, no greater than 100");

        if(size > 100){
            alert('Grid size cannot be greater than 100');
            continue;
        } 
        else if(size < 2){
            alert('Grid size cannot be less than 2');
            continue;
        }
        acceptableSize = true;
    }
    
    return size;
}

function sketchGridItem(event){
    if(event.target.className === 'grid-item'){
        event.target.style.backgroundColor = 'black';
    }
}

function newGrid(){
    gridContainer.replaceChildren(); //clear grid
    generateDivGrid(promptUserForGridSize());   
}


/*
===========DEV NOTES=================

You can use the .replaceChildren() function to remove all children if left
empty

Next up use a function to generate a random color
Also next use the opacity feature to gradually darken an element. Make the 
container background black and the foreground divs white. Then reduce opacity
on each hover until only black shows through
        

*/