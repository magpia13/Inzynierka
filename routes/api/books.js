const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');
const User = require('../../models/User');

const keys = require('../../config/keys');
const passport = require('passport');
const path = require("path");
const multer = require("multer");
const fs = require('fs');
const GridFsStorage = require('multer-gridfs-storage');
const key = keys.mongoURI;
const crypto = require('crypto');

const UPLOAD_PATH = path.resolve(__dirname, '../../public/uploads')
const upload = multer({
  dest: UPLOAD_PATH,
  limits: {fileSize: 1000000, files: 5}
})


const storage = new GridFsStorage({
  url: key,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,

        };
        console.log(fileInfo);
        resolve(fileInfo);
      });
    });
  }
});


router.post('/', passport.authenticate('jwt', {session:false}), upload.single('image'), (req,res) => {
  const newBook = {};
  newBook.user = req.user.id;
  if (req.body.title) newBook.title = req.body.title;
  if (req.body.author) newBook.author = req.body.author;
  if (req.body.description) newBook.description = req.body.description;
  if (req.body.isbn) newBook.isbn = req.body.isbn;
  if (req.file) newBook.image = req.file;


  new Book(newBook).save().then(book => res.json({image:req.file,...book}));
  var id = newBook.user;
  User.findById( id, (err, producto)=> {
    console.log(producto,"ddd");
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error al buscar producto',
        errors: err
      });
    }

    if (!producto) {
      return res.status(400).json({
        ok: false,
        mensaje: 'No existe un producto con ese ID',
        errors: { message: 'No existe un producto con ese ID' }
      });
    }

    producto.books.push(newBook);
    console.log(producto);
    producto.save();
  })
})

router.get('/', (req, res) => {
  Book.find().then(files => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }

    return res.json(files);
  });
});
router.get('/:id', (req, res, next) => {
  Book.findOne({'image.filename': req.params.id}, (err, x) => {console.log(req.params.id);
    if (err) return res.sendStatus(404)

      fs.createReadStream('public/uploads/'+req.params.id).pipe(res);

  })
})

module.exports = router;
