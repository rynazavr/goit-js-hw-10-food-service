import localStorage from './localStorage.js';
const bodyTag = document.querySelector('body');
const switchButton = document.querySelector('.js-switch-input');
const isChecked = localStorage.load('isChecked');
if (isChecked) {
  bodyTag.classList.add('dark-theme');
  switchButton.checked = isChecked;
}
function checkForChecked(event) {
  if (event.target.checked) {
    bodyTag.classList.add('dark-theme');
    localStorage.save('isChecked', true);
    return;
  }
  bodyTag.classList.remove('dark-theme');
  localStorage.save('isChecked', false);
}
switchButton.addEventListener('change', checkForChecked);
