const colorList = document.querySelectorAll('.color');
colorList[0].style.backgroundColor = 'blue';
colorList[1].style.backgroundColor = 'red';
colorList[2].style.backgroundColor = 'yellow';
colorList[3].style.backgroundColor = 'black';

const pixelBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 25; i += 1) {
  pixelBoard.innerHTML += "<li class='pixel'></li>";
}

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

const pixels = document.querySelectorAll('.pixel');
function coloringPixels(event) {
  const colorToUse = document.querySelector('.selected');
  event.style.backgroundColor = colorToUse.style.backgroundColor;
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function coloring() {
    coloringPixels(pixels[i])});
}

const buttonToClearBoard = document.querySelector('#clear-board');
buttonToClearBoard.addEventListener('click', clearingBoard);
function clearingBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
