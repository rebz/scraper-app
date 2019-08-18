<template>
    <div>
		app
		<nav>
            <router-link :to="{ name: 'dashboard' }">
                dashboard
            </router-link>
            <router-link :to="{ name: 'sites' }">
                list
            </router-link>
            <router-link :to="{ name: 'settings' }">
                settings
            </router-link>
        </nav>
		<router-view />
	</div>
</template>

<script>
	import { fetchSites } from '@/services/SitesService.js'
	export default {
		mounted() {
			this.init()
		},
		data: () => ({
			sites: null
		}),
		methods: {
			fetchSites,
			async init() {
				this.sites = await this.fetchSites()
			}
		}
	}
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
