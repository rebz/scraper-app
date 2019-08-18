import { HttpClient } from '@/services/HttpClient'

const fetchSites = async () => {
    const sites = await HttpClient.get('/').catch(err => console.error({err}))
    return await sites.data
}

const addSite = async (data) => {
    console.info({
        action: 'addSite',
        data
    })
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
    deleteSite 
}