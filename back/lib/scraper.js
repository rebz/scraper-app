import { dbSites } from './db'
const Scraper = require('@rebz/scraper').default

// Returns sites to scrape or the first X sites
const fetchSites = (count = undefined) => {
    if (!(!!count) || typeof count != 'number' ) return dbSites.get('sites').value()
    return dbSites.get('sites').take(count).value()
}

// TODO : maybe make this a class...
const scrapeSite = async site => {

    // process
    // -------
    // add self to dbApp.bots as running
    // create new JSON file for data scraped with this config
    // place under "pages" array, each object being a page scraped if paginating
    // when finished, remove self from dbApp.bots
    // when finished, move site config to a new dbScraped.json for sites that are complete

    const scraper = Scraper().setConfig({
        ...site,
        ...{
            // TODO : manage pagination key on a per site basis
            // TODO : fix issue with @rebz/scraper, it is assuming pagination is defined in the config
            pagination: {
                selector: 'div.prev_next',
                handler: async (currentUri, uris) => {
                    const url = new URL(currentUri)
                    const newPath = uris[Object.keys(uris).filter(k => k.indexOf('Next') != -1)[0]]
                    return newPath && url.origin+newPath
                }
            }
        }
    });

    scraper.errors(console.error)
    scraper.listen(console.log)

    await scraper.autoScrape()

    if (scraper.stop()) {
        console.info('done scraping')
    }
    
}

export { fetchSites }