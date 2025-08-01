import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodContoller.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const uploads = multer({ storage });

foodRouter.post('/add', uploads.single('image'), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);

export default foodRouter;
