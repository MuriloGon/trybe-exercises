import express from 'express';
import data from './data.js';

const router = express.Router();

router.get('/:name', (req, res)=> {
  const {name} = req.params;
  const nameExist = data.find((item)=> item.user.match(new RegExp(name, 'i')));
  if (nameExist) res.status(200).json(nameExist.comments);
  else res.status(404).json({error: true, message: 'user not found'});
});

router.post('/:id', (req, res) => {
  const {id} = req.params;
  const {status} = req.body;

  const hasId = data.some((item) =>item.id == id);

  if (!hasId) return res.status(404).json({msg: 'user not found'});
  if (typeof status !== 'boolean') {
    return res.status(400).json({msg: `status isn't a boolean`});
  }

  const dataId = data.findIndex((item) =>item.id == id);
  data[dataId].isActive = status;

  res.status(200).json(data[dataId]);
});

export default router;
