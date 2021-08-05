import {Router} from 'express';
import dta from './data.js';

let data = dta;

const router = Router();

router.get('/', (_req, res) => {
  res.status(200).json(data);
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const recipe = data.find((item)=>item.id==id );
  if (!recipe) {
    return res.status(404).json({error: true, message: 'recipe not found'});
  }
  data = data.filter((item) => item.id != id);
  res.status(200).json(recipe);
});

export default router;
