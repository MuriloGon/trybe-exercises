import express from 'express';
import pkg from 'body-parser';

const {json} = pkg;

const router = express.Router();
router.use(json());

router.post('/', (req, res) => {
  const {Authorization} = req.body;
  const verifyToken = (token) => /[a-zA-Z]+/.test(token) && /[0-9]/.test(token);

  if (!verifyToken(Authorization) ||
  typeof (Authorization) !== 'string' || Authorization.length !== 12) {
    const message = 'invalid token';
    return res.status(400).json({message});
  }

  return res.status(200).end();
});

export default router;
