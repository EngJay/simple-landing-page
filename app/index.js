// Styles
import 'styles/index.scss';

// Libs
import debounce from 'debounce';
import Trianglify from 'trianglify';
import mailRedactor from 'mail-redactor';

const elCanvasWrapper = document.getElementById('trianglify-wrapper');
const elTitleHeader = document.getElementById('title-header');
const elEmail = document.getElementById('contact-mail');

function addContactMail(address) {
  const mail = atob(address);

  elEmail.href = `mailto:${mail}`;
  elEmail.innerHTML = mailRedactor(mail);
}

function updateTitle() {
  elTitleHeader.innerHTML = document.title = window.location.hostname;
}

function drawPattern() {
  const pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    xColors: 'random',
    cellSize: 80,
  });

  elCanvasWrapper.innerHTML = '';
  elCanvasWrapper.appendChild(pattern.toCanvas());
}

window.addEventListener(
  'resize',
  debounce(() => {
    drawPattern();
  }, 200),
);

updateTitle();
addContactMail(CONTACT_MAIL);
drawPattern();
