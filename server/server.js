import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const cors = require('cors');

import bookRouter from './routes/book';

const app = express();

app.listen(3000, err => {
    if (err) throw err;

    console.log(`Server listening on port 3000`);
});

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: config.secret
// }));

app.use('/book', bookRouter);