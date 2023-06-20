const colorList = document.querySelectorAll('.color');
colorList[0].style.backgroundColor = 'blue';
colorList[1].style.backgroundColor = 'red';
colorList[2].style.backgroundColor = 'yellow';
colorList[3].style.backgroundColor = 'black';

// requisito 2 ============================================================================================ //
function creatingPixelsBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < 25; i += 1) {
    pixelBoard.innerHTML += "<li class='pixel'></li>";
  }
}

// requisito 3 ============================================================================================ //
function selectingColor() {
  for (let selectColor of colorList) {
    function pickAColor(event) {
      const selected = document.querySelector('.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
    selectColor.addEventListener('click', pickAColor);
  }
}

// requisito 4 ============================================================================================ //
function coloringPixels(event) {
  const colorToUse = document.querySelector('.selected');
  if (colorToUse) {
    event.style.backgroundColor = colorToUse.style.backgroundColor;
  }
}

function colorInputOnPixels() {
  const pixels = document.querySelectorAll('.pixel');
  // próximas 2 linhas são referentes ao requisito 7
  let boardSaved = new Array(25).fill('white');
  const backupedBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      coloringPixels(pixels[i]);
      // próximas 9 linhas são referentes ao requisito 7
      if (backupedBoard) {
        backupedBoard[i] = pixels[i].style.backgroundColor;
        localStorage.setItem('pixelBoard', JSON.stringify(backupedBoard));
      } else {
        boardSaved[i] = pixels[i].style.backgroundColor;
        localStorage.setItem('pixelBoard', JSON.stringify(boardSaved));
      }
    });
  }
}

// requisito 5 ============================================================================================ //
function boardCleaner() {
  const pixels = document.querySelectorAll('.pixel');
  const buttonToClearBoard = document.getElementById('clear-board');
  // próxima linha é referente ao requisito 7
  let boardSaved = new Array(25).fill('white');
  buttonToClearBoard.addEventListener('click', clearingBoard);
  function clearingBoard() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
      // próximas 2 linhas são referentes ao requisito 7
      boardSaved[i] = pixels[i].style.backgroundColor;
      localStorage.setItem('pixelBoard', JSON.stringify(boardSaved));
    }
  }
}

// requisito 6 ============================================================================================ //
function randomazingColorPalette() {
  function settingRandomColor() {
    const colorsToRandom = ['green', 'red', 'blue', 'yellow', 'purple', 'black',
      'grey', 'pink', 'orange', 'purple', 'navy'];
    const randomColorSelected = colorsToRandom[(Math.random() * colorsToRandom.length) | 0];
    return randomColorSelected;
  }
  const buttonToRandomColorIntoList = document.getElementById('button-random-color');
  buttonToRandomColorIntoList.addEventListener('click', randomColors);
  function randomColors() {
    for (let i = 0; i < colorList.length; i += 1) {
      const randomColorToUse = settingRandomColor();
      colorList[i].style.backgroundColor = randomColorToUse;
    }
  }
}

// requisito 7 ============================================================================================ //
const loadingBoard = () => {
  const backupedBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  const pixels = document.querySelectorAll('.pixel');
  if (JSON.parse(localStorage.getItem('pixelBoard')) !== null) {
    for (let i = 0; i < backupedBoard.length; i += 1) {
      pixels[i].style.backgroundColor = backupedBoard[i];
    }
  }
};

// ======================================================================================================== //
window.onload = () => {
  selectingColor();
  creatingPixelsBoard();
  colorInputOnPixels();
  boardCleaner();
  randomazingColorPalette();
  loadingBoard();
};
