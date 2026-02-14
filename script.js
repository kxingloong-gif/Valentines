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

  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
}

['mouseenter', 'click', 'touchstart'].forEach((eventName) => {
  noBtn.addEventListener(eventName, (event) => {
    event.preventDefault();
    moveNoButton();
  });
});

let evadeInterval;

function startConstantEvade() {
  clearInterval(evadeInterval);
  evadeInterval = setInterval(moveNoButton, 550);
}

yesBtn.addEventListener('click', () => {
  response.hidden = false;
  subtitle.textContent = 'Hehe best choice, my love 💘';
  yesBtn.textContent = 'Me, your hubby! 💞';
  noBtn.hidden = true;
  clearInterval(evadeInterval);
});

window.addEventListener('load', () => {
  moveNoButton();
  startConstantEvade();
});
window.addEventListener('resize', moveNoButton);
