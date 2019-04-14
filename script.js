document.body.addEventListener('click', (evt) => {
    if(evt.target.className === 'cell') {
        evt.target.style.backgroundColor = colorValue;
    }
});

let playButton = document.querySelector('.play-button');
let table = document.querySelector('.game-board');
let colorPicker = document.querySelector('.color');

colorPicker.addEventListener('change', () => {
    colorValue = colorPicker.value;
});

let colorValue;

playButton.addEventListener('click', () => {
     let height = parseInt(document.querySelector('.height').value);
     let width = parseInt(document.querySelector('.width').value);

     for(let i = 0;i < height;i++) {
         let row = document.createElement('tr');
         for(let j = 0;j < width;j++) {
             let cell = document.createElement('td');
             cell.classList.add('cell');
             row.appendChild(cell);
         }
         table.appendChild(row);
     }
});