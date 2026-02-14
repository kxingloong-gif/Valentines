const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const buttonArea = document.getElementById('button-area');
const response = document.getElementById('response');
const subtitle = document.getElementById('subtitle');

function moveNoButton() {
  const areaRect = buttonArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(0, areaRect.width - btnRect.width);
  const maxY = Math.max(0, areaRect.height - btnRect.height);

  const nextX = Math.random() * maxX;
  const nextY = Math.random() * maxY;

  noBtn.style.left = `${nextX}px`;
  noBtn.style.top = `${nextY}px`;
}

['mouseenter', 'click', 'touchstart'].forEach((eventName) => {
  noBtn.addEventListener(eventName, (event) => {
    event.preventDefault();
    moveNoButton();
  });
});

yesBtn.addEventListener('click', () => {
  response.hidden = false;
  subtitle.textContent = 'You picked Yes! My heart is doing happy dances 💃🕺';
  yesBtn.textContent = 'Yes!!! 💖';
  noBtn.hidden = true;

  for (let i = 0; i < 6; i += 1) {
    setTimeout(() => {
      moveNoButton();
    }, i * 120);
  }
});

window.addEventListener('load', moveNoButton);
window.addEventListener('resize', moveNoButton);
