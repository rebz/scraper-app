import cron from 'node-cron'
import { dbApp } from './db'
import { fetchSites, scrapeSite } from './scraper'

cron.schedule(`* * * * *`, () => {

    console.log(`Cron running every minute`)

    // process
    // -------
    // get max number of bots allowed
    // check db for number of bots currently running
    // X = subtract number of running bots from MAX_BOTS
    // get X sites from _sites.json
    // create a new scraper for each site

    const config = dbApp.get('config').values()
    const bots = dbApp.get('bots').values()
    const sites = fetchSites(config.MAX_BOTS - bots.length)

    // TODO : remove test
    scrapeSite(sites[0]).then(res => {
        console.info('done?')
        console.info(res)
    })

})