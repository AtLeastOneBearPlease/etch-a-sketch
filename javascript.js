let gridContainer = document.querySelector('.grid-container');

gridContainer.appendChild(generateNewDivGrid(16));

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