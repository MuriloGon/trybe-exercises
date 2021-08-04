import {Router} from 'express';
import pkg from 'body-parser';
import validateLoginReq from './validateLoginReq.js';
const {json} = pkg;

const router = Router();

router.use(json());

router.get('/', (req, res) => {
  if (!validateLoginReq(req)) {
    return res.status(400).json({message: 'email or password is incorrect'});
  }

  res.status(200).json({message: 'oi'});
});

export default router;
