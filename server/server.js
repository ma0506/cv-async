const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const { json } = require('body-parser');

dotenv.config();
const app = express();

app.use(cors());
app.use(json());

// db接続
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('データベース接続成功'))
  .catch((error) => console.log('データベース接続失敗', error));

// routes
app.get('/user', (req, res) => {
  res.send('get all todos');
});

app.post('/user', (req, res) => {
  res.send('create todo');
});

app.patch('/user', (req, res) => {
  res.send('update todo');
});

app.delete('/user', (req, res) => {
  res.send('delete todo');
});

app.listen(process.env.PORT, () => {
  console.log(`サーバー起動: http://localhost:${process.env.PORT}`);
});
