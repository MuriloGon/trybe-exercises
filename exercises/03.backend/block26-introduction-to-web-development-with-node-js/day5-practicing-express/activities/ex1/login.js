import {Router} from 'express';
import pkg from 'body-parser';
const {json} = pkg;

const router = Router();

router.use(json());

router.get('/', (req, res) => {
  res.send('tudo ok');
});

export default router;
