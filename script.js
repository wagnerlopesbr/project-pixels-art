const colorList = document.querySelectorAll('.color');
colorList[0].style.backgroundColor = 'blue';
colorList[1].style.backgroundColor = 'red';
colorList[2].style.backgroundColor = 'yellow';
colorList[3].style.backgroundColor = 'black';
colorList[0].id = 'colorBlue';
colorList[1].id = 'colorRed';
colorList[2].id = 'colorYellow';
colorList[3].id = 'colorBlack';

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
      currentColor = event.target.style.backgroundColor;
    }
    selectColor.addEventListener('click', pickAColor);
  }
}
selectingColor();

const pixels = document.querySelectorAll('.pixel');
function coloringPixels(newPixelBGC) {
  const colorToUse = document.querySelector('.selected');
  newPixelBGC.style.backgroundColor = colorToUse.style.backgroundColor;
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function coloring() {
    coloringPixels(pixels[i])});
}
coloringPixels();
