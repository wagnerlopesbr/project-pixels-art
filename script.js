const colorList = document.querySelectorAll('.color');
colorList[0].style.backgroundColor = 'blue';
colorList[1].style.backgroundColor = 'red';
colorList[2].style.backgroundColor = 'yellow';
colorList[3].style.backgroundColor = 'black';

// requisito 2 ============================================================================================ //
const pixelBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 25; i += 1) {
  pixelBoard.innerHTML += "<li class='pixel'></li>";
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
selectingColor();

// requisito 4 ============================================================================================ //
const pixels = document.querySelectorAll('.pixel');
function coloringPixels(event) {
  const colorToUse = document.querySelector('.selected');
  event.style.backgroundColor = colorToUse.style.backgroundColor;
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function coloring() {
    coloringPixels(pixels[i])});
}

// requisito 5 ============================================================================================ //
const buttonToClearBoard = document.getElementById('clear-board');
buttonToClearBoard.addEventListener('click', clearingBoard);
function clearingBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

// requisito 6 ============================================================================================ //
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

// requisito 7 ============================================================================================ //
// const boardToLoad = localStorage.getItem('pixelBoard', JSON.stringfy(pixelBoard));
// // vou salvar minha ul pai das li q são os pixels q mudam de cor
// // (a cada alteração sofrida) e salvar como string (segue...)

// function loadBackup() {
//   pixelBoard.innerHTML = localStorage.setItem('pixelBoard', boardToLoad);
// // (...seguindo) pra qnd eu carregar pra ser o board atual, como vem como string
// // eu só jogo td como innerHTML q teoricamente funcionaria, atualizando TUDO
// // dentro da ul de id #pixel-board, carregando o tabuleiro todo de uma vez
// }

// window.onload = () => {
//   // loadingBoard();
//   // const boardToLoad = JSON.parse(localStorage.getItem('pixelBoard'));
//   loadBackup();
// };

// // // //////////////////////////////////////////////////////////////////////////////////////////////
// // // // localStorage manipulation
// localStorage.setItem('pixelBoard', JSON.stringify(document.getElementsByClassName('pixel')));
// const backupReturn = JSON.parse(localStorage.getItem('pixelBoard'));
// // // //////////////////////////////////////////////////////////////////////////////////////////////
// const boardSaved = pixelBoard.innerHTML;

// const boardToLoad = JSON.parse(localStorage.getItem('pixelBoard'));

// if (boardToLoad) {
//   // pixelBoard.innerHTML = boardSaved;
// } else {
//   localStorage.setItem('pixelBoard', JSON.stringify(boardSaved));
// }

//////////////////// COMMIT PARA SALVAR O PROGRESSO DO REQUISITO 7 (incompleto/não funcionando)

// const backup = new Array(pixels);
// function saveBoard() {
//   for (let i = 0; i < pixels.length; i += 1) {
//     const savedBoard = pixels[i].style.backgroundColor;
//     if (savedBoard.length !== 0) {
//       backup.push(savedBoard);
//       localStorage.setItem('pixelBoard', JSON.stringify(backup));
//     }
//   }
// }
// saveBoard();







///////
// function loadBoard() {
//   if (localStorage.getItem('pixelBoard') !== null) {
//     const boardToLoad = JSON.parse(localStorage.getItem('pixelBoard'));
//     for (let i = 0; i < pixels.length; i += 1) {
//       const backup = boardToLoad[i];
//       pixels[i].style.backgroundColor = backup;
//     }
//   }
// }
