<template>
    <div>

        <h1>
            Sites Scraped
        </h1>

		...

		<!-- <div v-if="sites" class="SiteList">
			
			<router-link 
				class="SiteLink"
				:to="{ name: 'sites.edit', params: { siteId: site.id } }"
				v-for="(site, index) in sites" 
				:key="`${index}-${site.id}`">
				{{ site['uri'] }}
			</router-link>

		</div> -->

    </div>
</template>

<script>
	// import { fetchScrapedSites } from '@/services/SitesService.js'
	export default {
		// mounted() {
		// 	this.init()
		// },
		// data: () => ({
		// 	sites: null
		// }),
		// methods: {
		// 	fetchSites,
		// 	async init() {
		// 		this.sites = await this.fetchSites()
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>

</style>