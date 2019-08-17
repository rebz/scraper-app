import cron from 'node-cron'
import { dbApp } from './db'
import { fetchSites } from './scraper'

cron.schedule(`* * * * *`, () => {
    console.log(`Cron running every minute`)

    const config = dbApp.get('config').values()
    const bots = dbApp.get('bots').values()
    const sites = fetchSites(config.MAX_BOTS - bots.length)
    
    console.log('Sites to Scrape')
    console.log(sites)
});