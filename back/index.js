import express from 'express'
import cors from 'cors'

import { fetchSites } from './lib/scraper'
// import './lib/cron'

const app = express()
app.use(cors())

app.get(`/`, async (req, res, next) => {
	const sites = fetchSites()
	return res.status(200).json({ sites })
})

app.listen(3037, () => console.log(`server: http://localhost:3037`))