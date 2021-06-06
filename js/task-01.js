const categoriesRef = document.querySelectorAll('.item');
console.log('В списке ' + categoriesRef.length + ' категории');

// listRef[0].classList.add('item-list__animals');
// listRef[1].classList.add('item-list__food');
// listRef[2].classList.add('item-list__tech');

// console.log('Категория: ', titelRef[0].textContent);
// console.log('Количество: ', listRef[0].children.length);
// console.log('Категория: ', titelRef[1].textContent);
// console.log('Количество: ', listRef[1].children.length);
// console.log('Категория: ', titelRef[2].textContent);
// console.log('Количество: ', listRef[2].children.length);

// const titel = titelRef.forEach(titel =>
//   console.log('Категория: ', titel.textContent),
// );

// const list = listRef.forEach(li =>
//   console.log('Количество элементов: ', li.children.length),
// );

const categoriesListRef = document.querySelector('#categories').children;

for (let item of categoriesListRef) {
  let itemCategory = item.firstElementChild.textContent;
  let itemLength = item.lastElementChild.children.length;

  console.log(`В категории ${itemCategory} ${itemLength} элементов`);
}
