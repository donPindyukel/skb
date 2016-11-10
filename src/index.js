import express from  'express';
import cors from 'cors';

const app = express();
app.use(cors());

function hello(name) {
  console.log(`Hello ${name}`); // eslint-disable-line
}
hello('JS World');



app.get('/task2a', (req,res,next) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
