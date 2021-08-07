import {Router} from 'express';
import pkg from 'body-parser';
import cripto from 'crypto';
import validateLoginReq from './validateLoginReq.js';
const {json} = pkg;

const router = Router();

router.use(json());

router.post('/', (req, res) => {
  if (!validateLoginReq(req)) {
    return res.status(400).json({message: 'email or password is incorrect'});
  }
  const token = cripto.randomBytes(6).toString('hex');
  res.status(200).json({token});
});

export default router;
