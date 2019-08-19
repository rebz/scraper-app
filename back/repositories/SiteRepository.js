import { dbSites } from '../lib/db'

const get = async (id = undefined) => {
    if (!(!!id) || typeof id != 'number' ) return dbSites.get('sites').value()
    return dbSites.get('sites').find({ id }).value()
}

const post = async (payload) => {
    const response = await HttpClient.post('/sites/create', payload)
    return response
}

const updateSite = async (site) => {
    console.info({
        action: 'updateSite',
        site
    })
}

const deleteSite = async (siteId) => {
    console.info({
        action: 'deleteSite',
        siteId
    })
}

export { 
    fetchSites,
    addSite, 
    updateSite,
    deleteSite,
}