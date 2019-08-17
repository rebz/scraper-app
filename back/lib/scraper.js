import db from './db'

const MAX_BOTS = 5

const scraperBot = config => {
    // add itself to db.bots as running
    // when finished, remove self from db.bots
    // when finished, move site config to a new db.json for sites that are complete
}

export const checkForScrapes = () => {
    console.info('checked for scrapes, nadda')

    // get max number of bots allowed
    // check db for number of bots currently running
    // X = subtract number of running bots from MAX_BOTS
    // get X sites from _sites.json
    // create a new bot for each site

    let sites = db.get('sites').toScrape().value()
    if (sites.length > MAX_BOTS) {
        sites = sites.slice(0, MAX_BOTS-1)
    }
    
    console.info(sites)
}