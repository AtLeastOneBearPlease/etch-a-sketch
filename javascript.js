//setup globals for program
let gridSize = 16;
let gridContainer = document.querySelector('.grid-container');
let button = document.querySelector('.reset-button');

//string for data attribute on Divs
const NUM_HOVERS_ATTRIBUTE = 'data-number-of-hovers'

//Add listeners for etch-a-sketch functions
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
        newDiv.setAttribute(NUM_HOVERS_ATTRIBUTE, '0');
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
    let div = event.target;
    
    if(div.className === 'grid-item'){
        let hoverTimes = parseInt(div.getAttribute(NUM_HOVERS_ATTRIBUTE) );

        if(hoverTimes === 0){
            let color = generateRandomColor();
            let colorString = `rgba(${color.get('red')}, ${color.get('green')}, ${color.get('blue')}, 1)`;

            div.style.backgroundColor = colorString;
            hoverTimes += 1;
            div.setAttribute(NUM_HOVERS_ATTRIBUTE, hoverTimes);
        } 
        else if(hoverTimes > 0 && hoverTimes <= 10) {
            let opacity = 1 - (hoverTimes * 0.1); 
            setOpacityOfDiv(div, opacity);

            hoverTimes += 1;
            div.setAttribute(NUM_HOVERS_ATTRIBUTE, hoverTimes);
        } //else, div is completely transparent
    }
}

function setOpacityOfDiv(div, opacity){
    let color = div.style.backgroundColor;

    //isolate into the red, green, blue numbers
    let colorMap = color.substring(color.indexOf('(') + 1, color.length - 1);

    //separate into red, green, blue array
    colorMap = colorMap.split(',');

    //set color using rgba()
    div.style.backgroundColor = `rgba(${colorMap[0]}, ${colorMap[1]}, ${colorMap[2]}, ${opacity})`;
}

function newGrid(){
    gridContainer.replaceChildren(); //clear grid
    generateDivGrid(promptUserForGridSize());   
}

function generateRandomColor(){
    let red = Math.floor( Math.random() * 255);
    let green = Math.floor( Math.random() * 255);
    let blue = Math.floor( Math.random() * 255);

    let color = new Map([
        ["red", red],
        ["green", green],
        ["blue", blue]
    ]);

    return color; 
}

/*
==============DEV NOTES=================
Add data- tags to the divs to see if they have been hovered and one to see how many hovers they've had

Then, if its not been hovered, make a color. If it has, decrease opacity and let black background through

Also next use the opacity feature to gradually darken an element. Make the 
container background black and the foreground divs white. Then reduce opacity
on each hover until only black shows through
*/