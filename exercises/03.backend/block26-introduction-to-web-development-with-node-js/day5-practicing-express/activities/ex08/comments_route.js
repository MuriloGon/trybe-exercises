import express from 'express';
import data from './data.js';

const router = express.Router();

router.get('/', (req, res) => {
  const {filter} = req.query;
  const comments = data.filter(
      ({comments}) => comments.some(
          (comment) => (new RegExp(filter, 'i').test(comment)),
      ),
  );
  res.status(200).json({comments});
});

export default router;
