const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', e => {
  const val = e.currentTarget.value;

  if (val.length < 6) {
    e.currentTarget.classList.add('invalid');
  } else {
    if (e.currentTarget.classList.contains('invalid')) {
      e.currentTarget.classList.remove('invalid');
      e.currentTarget.classList.add('valid');
    }
  }
});
