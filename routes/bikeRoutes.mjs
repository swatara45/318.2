// Imports
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  let options = {
    page: 'index',
    title: 'Sadia',
  };

  res.render('index', options);
});

router.get('/image', (req, res) => {
  let options = {
    page: 'image',
  };

  res.render('image', options);
});

router.get('/form', (req, res) => {
  let options = {
    page: 'form',
  };

  res.render('form', options);
});

export default router;