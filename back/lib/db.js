import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('data/_sites.json')
const db = low(adapter)
db.defaults({ test: 'default data', sites: [] }).write()

export default db