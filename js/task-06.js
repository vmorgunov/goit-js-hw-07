const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', onInput);

function onInput(e) {
  const currentLength = e.currentTarget.value.length;
  const dataLength = Number(inputRef.dataset.length);

  if (currentLength === dataLength) {
    e.currentTarget.classList.add('valid');
    e.currentTarget.classList.remove('invalid');
  }

  if (currentLength !== dataLength) {
    e.currentTarget.classList.remove('valid');
    e.currentTarget.classList.add('invalid');
  }
}
