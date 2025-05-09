//startin with one div, make it change color upon hover

let divGrid = document.querySelector('.grid-container');
let div = document.createElement('div');

div.className = 'grid-item';
div.style.minWidth = divGrid.offsetWidth + 'px';

function sketchGridItem(event){
    event.target.style.backgroundColor = 'black';
}

div.addEventListener('mouseover', sketchGridItem);

divGrid.appendChild(div);