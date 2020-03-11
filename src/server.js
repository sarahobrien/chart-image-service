import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import ssr from './routes/router';

const app = express();

app.use(compression());

app.use(bodyParser.json());

app.all('/chart', function(req, res, next) {
  next();
});

app.use('/', ssr);

const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
