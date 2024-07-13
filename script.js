const container = document.querySelector('.container');
const newGridButton = document.getElementById('newGridButton');

function creatGrid(gridSize) {
    // Clear the existing grid
     while(container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const containerWidth = 960;
        const containerHeight = 960;
        const gridItemWidth = containerWidth / gridSize;
        const gridItemHeight = containerHeight / gridSize;


    for(let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridItemWidth}px`;
        gridItem.style.height = `${gridItemHeight}px`;

        gridItem.addEventListener('mouseenter', () => {
            gridItem.classList.add('hovered');
        });

        gridItem.addEventListener('mouseleave', () => {
            gridItem.classList.remove('hovered');
        });

        container.appendChild(gridItem);
    }
}

newGridButton.addEventListener('click', () => {
    const gridSize = parseInt(prompt('Enter Number of Squares per side Max 100'));
    if(gridSize > 0 && gridSize < 100) {
        creatGrid(gridSize);
    } else {
        alert('Invalid grid Size Please enter the Number between 1 and 100.');
    }
})

// Intial Grid Creation
creatGrid(16);
