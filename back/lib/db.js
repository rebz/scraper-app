import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const siteMixins = {
    // limit: function(sites, count) {
    //     // console.info('limit fn')
    //     // console.info(sites.slice(0, count))
    //     // if (!(!!count) || typeof count != 'number' ) return sites
    //     return sites.slice(0, count)
    // }
}

// App Database
const appAdapter = new FileSync('data/app.json')
export const dbApp = low(appAdapter)
dbApp.defaults({ 
    config: {
        MAX_BOTS: 5
    },
    bots: []
}).write()

// Sites to Scrape
const sitesAdapter = new FileSync('data/sites.json')
export const dbSites = low(sitesAdapter)
dbSites.defaults({
    sites: []
}).write()
dbSites._.mixin(siteMixins)

// Sites Scraped
const scrapedAdapter = new FileSync('data/scraped.json')
export const dbScraped = low(scrapedAdapter)
dbScraped.defaults({
    sites: []
}).write()
dbScraped._.mixin(siteMixins)

export { dbApp, dbSites, dbScraped }

/*
    site structure
    ---------------
    id - increment
    uri - string
    tags - array
    selectors - object
    domain - string
    
    created_at
    updated_at
    scraped_at
    deleted_at
*/