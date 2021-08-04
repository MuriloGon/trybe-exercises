import express from 'express';
import pkg from 'body-parser';
import fetchData from './fetchData.js';

const {json} = pkg;

const router = express.Router();
router.use(json());

router.post('/', async (req, res) => {
  const {Authorization} = req.body;
  const verifyToken = (token) => /[a-zA-Z]+/.test(token) && /[0-9]/.test(token);

  if (!verifyToken(Authorization) ||
  typeof (Authorization) !== 'string' || Authorization.length !== 12) {
    const message = 'invalid token';
    return res.status(400).json({message});
  }

  let data;
  try {
    data = await fetchData();
  } catch (error) {
    return res.status(500).json({message: 'strage error'});
  }

  return res.status(200).json(data);
});

export default router;
