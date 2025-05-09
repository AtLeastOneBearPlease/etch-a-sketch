let gridSize = 16;
let acceptableSize = false;

while(!acceptableSize){
    //gridSize = prompt("Please provide a size of grid, no greater than 100");

    if(gridSize > 100){
        alert('Grid size cannot be greater than 100');
        continue;
    } 
    else if(gridSize < 2){
        alert('Grid size cannot be less than 2');
        continue;
    }
    acceptableSize = true;
} 

let gridContainer = document.querySelector('.grid-container');

gridContainer.appendChild(generateNewDivGrid(gridSize));

gridContainer.addEventListener('mouseover', sketchGridItem);

function sketchGridItem(event){
    if(event.target.className === 'grid-item'){
        event.target.style.backgroundColor = 'black';
    
    }
}

//generates new div grid, place inside doc fragment, and returns the fragment
function generateNewDivGrid(gridSize){
    let divWidth = gridContainer.offsetWidth / gridSize; 
    let docFragment = document.createDocumentFragment();

    for(let i = 0; i < gridSize * gridSize; i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'grid-item';
        newDiv.style.minWidth = divWidth + 'px'; //minWidth to force wrap for grid
        docFragment.appendChild(newDiv);
    }

    return docFragment;
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