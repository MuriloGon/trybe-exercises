import {Router} from 'express';
import dta from './data.js';
let data = dta;

const router = Router();

router.get('/', (_req, res) => {
  res.status(200).json(data);
});

const validateIdMW = (req, res, next) => {
  const {id} = req.params;
  const recipe = data.find((item)=>item.id==id );
  if (!recipe) {
    return res.status(404).json({error: true, message: 'recipe not found'});
  }
  req.recipe = recipe;
  req.recipeId = id;
  next();
};

const validatePostData = (req, res, next) => {
  const {name, ingredients} = req.body;

  if (!name || !ingredients) {
    return res.status(400).json({
      error: true, message: `parameter missing (ingredients|name)`});
  }

  if (!Array.isArray(ingredients)) {
    return res.status(400).json({
      error: true, message: `the 'ingredients' must be an array`});
  }
  if (typeof name !== 'string') {
    return res.status(400).json({
      error: true, message: `the 'name' must be a string`});
  }
  next();
};

router.get('/:id', validateIdMW, ({recipe, recipeId}, res) => {
  res.status(200).json(recipe);
});

router.delete('/:id', validateIdMW, ({recipe, recipeId}, res) => {
  data = data.filter((item) => item.id != recipeId);
  res.status(200).json(recipe);
});

router.post('/:id', validateIdMW,
    validatePostData,
    ({recipe, recipeId, body}, res) => {
      const recipeIndex = data.findIndex((item) => item.id == recipeId);
      data[recipeIndex].name = body.name;
      data[recipeIndex].ingredients = body.ingredients;
      res.status(200).json(recipe);
    },
);

router.post('/:id/ingredients', validateIdMW, (req, res) => {
  const {insert=[], remove=[]} = req.body;

  if (!insert && !remove) {
    return res.status(400)
        .json({message: '(insert|remove|both) missing '});
  }

  if (insert && !Array.isArray(insert)) {
    return res.status(400).json({message: 'insert must be an array'});
  }

  if (remove && !Array.isArray(remove)) {
    return res.status(400).json({message: 'remove must be an array'});
  }
  const recipeIndex = data.findIndex((item) => item.id == req.recipeId);

  data[recipeIndex].ingredients = [...data[recipeIndex].ingredients, ...insert];
  data[recipeIndex].ingredients = data[recipeIndex].ingredients
      .filter((item) => !remove.includes(item));

  res.status(200).json(data[recipeIndex]);
});

export default router;
