import { HttpClient } from '@/services/HttpClient'

const fetchSites = async () => {
    const response = await HttpClient.get('/').catch(err => console.error({err}))
    return await response.data.sites
}

const addSite = async (payload) => {
    debugger
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