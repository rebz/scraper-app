import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get(`/`, async (req, res, next) => {
  res.json('Working');
});

app.listen(3037, () => console.log(`server: http://localhost:3037`));