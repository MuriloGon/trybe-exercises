import express from 'express';
import data from './data.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(data);
});

router.get('/:id', (req, res)=> {
  const {id} = req.params;
  const idExist = data.some(({id: idData}) => idData == id );
  console.log('existe:', idExist);
  if (!idExist) {
    return res.status(404).json({error: true, message: 'id not found'});
  }
  return res.status(200).json(data.find((obj) => obj.id == id));
});

export default router;
