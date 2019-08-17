import express from 'express'
import cors from 'cors'

import { dbSites } from './lib/db'
import './lib/cron'

const app = express()
app.use(cors())

app.get(`/`, async (req, res, next) => {
	
	return res.json({
    	sites: dbSites.get('sites')
	})
})

app.listen(3037, () => console.log(`server: http://localhost:3037`))