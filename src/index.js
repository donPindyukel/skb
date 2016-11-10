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

app.get('/task2b', (req,res,next) => {
  let fullname = (req.query.fullname || 'Invalid fullname');
  fullname = fullname.split(' ');
  switch (fullname.length) {
    case 3: {
      const lastName = fullname[2];
      const firstName = fullname[0][0] + '.';
      const patronymicName = fullname[1][0] + '.';
      res.send(lastName + ' ' + firstName + ' ' + patronymicName);
      return;
    }
    case 2: {
      const lastName = fullname[1];
      const firstName = fullname[0][0] + '.';
      res.send(lastName + ' ' + firstName + ' ');
      return;
    }
    case 1: {
      const lastName = fullname[0];
      res.send(lastName);
      return;
    }
    default: {
      res.send('Invalid fullname');
      return;
    }
  }
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
