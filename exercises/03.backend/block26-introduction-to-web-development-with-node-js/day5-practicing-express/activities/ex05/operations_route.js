import {Router} from 'express';
import middlewares from './middlewares.js';

const router = Router({mergeParams: true});

router.get('/', [...middlewares, (req, res)=>{
  res.status(200).json({result: req.result});
}]);

export default router;
