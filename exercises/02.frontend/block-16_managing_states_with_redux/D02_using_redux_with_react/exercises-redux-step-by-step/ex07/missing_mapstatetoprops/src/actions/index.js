export const RECIPE_LIST = 'RECIPE_LIST';
export const INGREDIENTS_LIST = 'INGREDIENTS_LIST';
export const ORDER_LIST = 'ORDER_LIST';

export const storeRecipe = (recipe) => ({
  type: RECIPE_LIST,
  recipe,
});

export const storeIngredients = (ingredients) => ({
  type: INGREDIENTS_LIST,
  ingredients,
});

export const storeOrder = (order) => ({
  type: ORDER_LIST,
  order,
});
