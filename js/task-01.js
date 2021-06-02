const categoriesRef = document.querySelectorAll('.item');
console.log('В списке ' + categoriesRef.length + ' категории');

const titelRef = document.querySelectorAll('h2');

const listRef = document.querySelectorAll('.item ul');
listRef[0].classList.add('item-list__animals');
listRef[1].classList.add('item-list__food');
listRef[2].classList.add('item-list__tech');

console.log('Категория: ', titelRef[0].textContent);
console.log('Количество: ', listRef[0].children.length);
console.log('Категория: ', titelRef[1].textContent);
console.log('Количество: ', listRef[1].children.length);
console.log('Категория: ', titelRef[2].textContent);
console.log('Количество: ', listRef[2].children.length);
