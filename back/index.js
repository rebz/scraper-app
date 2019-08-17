import express from 'express'
import cors from 'cors'

import db from './lib/db';
import { checkForScrapes } from './lib/scraper';
// import './lib/cron'

const app = express()
app.use(cors())

app.get(`/`, async (req, res, next) => {

  res.json({
    sites: db.get('sites')
  });
});

checkForScrapes();

app.listen(3037, () => console.log(`server: http://localhost:3037`));