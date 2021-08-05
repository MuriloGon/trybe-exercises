import express from 'express';
import data from './data.js';

const router = express.Router();

router.get('/:name', (req, res)=> {
  const {name} = req.params;
  const nameExist = data.find((item)=> item.user.match(new RegExp(name, 'i')));
  if (nameExist) res.status(200).json(nameExist.comments);
  else res.status(404).json({error: true, message: 'user not found'});
});

export default router;
