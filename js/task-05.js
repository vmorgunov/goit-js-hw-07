const inputRef = document.getElementById('name-input');
const outputRef = document.getElementById('name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
  if (e.currentTarget.value === '') {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = e.currentTarget.value;
  }
}
