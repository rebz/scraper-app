import { dbSites } from './db'

// const scraperBot = config => {
//     // add itself to db.bots as running
//     // when finished, remove self from db.bots
//     // when finished, move site config to a new db.json for sites that are complete
// }


// get max number of bots allowed
// check db for number of bots currently running
// X = subtract number of running bots from MAX_BOTS
// get X sites from _sites.json
// create a new bot for each site

// Returns sites to scrape or the first X sites
const fetchSites = (count = undefined) => {
    if (!(!!count) || typeof count != 'number' ) return dbSites.get('sites').value()
    return dbSites.get('sites').take(count).value()
}

export { fetchSites }