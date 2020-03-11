import express from 'express';
import { generateImage } from '../generateImage';
import { generateHTML } from '../generateHtml';

const router = express.Router();

// render route
router.get('/', async (req, res) => {
  const html = `
  <html>
  <head><title>My First SSR</title></head>
  <body>
      <!-- puppeteer will render content -->
  </body>
  </html>
  `;

  res.send(html);
});

// chart request
router.post('/chart', async (req, res) => {
  const data = await req.body;

  // update component library so this can be removed
  data.forEach(d => {
    d.points = d.points.map(d => {
      return { ...d, timeStamp: new Date(d.timeStamp) };
    });
  });

  const html = generateHTML(data);

  generateImage(html).then(image => {
    var options = {
      root: '.',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      },
      cacheControl: false
    };

    res.sendFile(image, options, err => {
      if (err) {
        throw Error('Something went wrong');
      } else {
        console.log('Sent File');
      }
    });
  });
});

export default router;
