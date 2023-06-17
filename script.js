const colorList = document.querySelectorAll('.color');
colorList[0].style.backgroundColor = 'blue';
colorList[1].style.backgroundColor = 'red';
colorList[2].style.backgroundColor = 'yellow';
colorList[3].style.backgroundColor = 'black';

const pixelBoard = document.querySelector('#pixel-board');
for (let i = 1; i <= 25; i += 1) {
  pixelBoard.innerHTML += "<li class='pixel'></li>";
}

function selectingColor() {
  for (let selectedColor of colorList) {
    function pickAColor(event) {
      const selected = document.querySelector('.selected');
      if (selected) {
        selected.classList.remove('selected');
      } else {
        event.target.classList.add('selected');
      }
    }
    selectedColor.addEventListener('click', pickAColor);
  }
}
selectingColor();
