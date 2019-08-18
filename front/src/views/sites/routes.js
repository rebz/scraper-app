import SitesContainer from './layouts/SitesContainer.vue'
import SitesList from './SitesList.vue'
import SiteForm from './SiteForm.vue'

export default [
    {
        path: '/sites',
        component: SitesContainer,
        // beforeEnter: async (to, from, next) => {
        //     // store.dispatch('')
        //     next()
        // },
        children: [
            {
                path: "",
                name: 'sites',
                component: SitesList
            },
            {
                path: "/create",
                name: 'sites.create',
                component: SiteForm
            },
            {
                path: "/edit/:siteId",
                name: 'sites.edit',
                component: SiteForm,
                beforeRouteEnter (to, from, next) {
                    // store.dispatch()
                    next()
                },
                beforeRouteUpdate: (to, from, next) => {
                    // store.dispatch()
                    next()
                },
            },
        ]
    }
]
