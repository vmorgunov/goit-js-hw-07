const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addIngredient = ingredients.map(ingredient => {
  const ingredientRef = document.querySelector('#ingredients');
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;

  ingredientRef.append(itemRef);
});
