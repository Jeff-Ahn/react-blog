const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://ahu:5EWo0hVeMjS6d03H@react-blog.km8vs.mongodb.net/react?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('DB connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(5000, () => {
  console.log('app is listening on port 5000');
});
