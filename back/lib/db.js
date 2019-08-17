import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('data/_sites.json')
const db = low(adapter)
db.defaults({ bots: [], sites: [] }).write()

 db._.mixin({
    toScrape: sites => sites.filter(s => !s.is_scraped)
})

export default db


/*
    site structure
    ---------------
    id - increment
    uri - string
    tags - array
    selectors - object
    has_scraped - boolean, 0
    domain - string
*/