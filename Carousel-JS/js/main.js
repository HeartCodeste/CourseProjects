let i = 0;
const container = document.querySelector('.container');

function changeColor () {
    let clickedButton = document.querySelector('.clicked-button');
    clickedButton.classList.remove('clicked-button');
    let smallButton = document.querySelector('.small-buttons:nth-child(' + (i+1) + ')');
    smallButton.classList.add('clicked-button');
    container.scrollLeft = i * container.clientWidth;
}

function moveRight() {
    ++i 
    if (i >= container.childElementCount) {
        i = 0;
    }
    changeColor();
}

const right = document.querySelector('.right');
right.addEventListener('click', moveRight);

function moveLeft() {
    --i
    if (i < 0) {
        i = container.childElementCount - 1
    } 
    changeColor();
}

const left = document.querySelector('.left');
left.addEventListener('click', moveLeft);

function pickButtons(buttonNumber) {
  i = buttonNumber;
  changeColor();
}
