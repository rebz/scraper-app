<template>
    <div>

        <h1>
            Sites to Scrape
        </h1>

		<div v-if="sites" class="SiteList">
			
			<router-link 
				class="SiteLink"
				:to="{ name: 'sites.edit', params: { siteId: site.id } }"
				v-for="(site, index) in sites" 
				:key="`${index}-${site.id}`">
				{{ site['uri'] }}
			</router-link>

		</div>

    </div>
</template>

<script>
	import { fetchSites } from '@/services/SiteService.js'
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

<style lang="scss" scoped>

.SiteList {
	display: flex;
	flex-direction: column;
	max-width: 320px;
	border: #ccc solid 1px;
}

.SiteLink {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem 0.25rem 0.4rem;
	color: blue;
	border-top: #ccc solid 1px;

	&:first-child {
		border-top: 0;
	}

	&:hover {
		text-decoration: none;
		color: darkred;
	}
}

</style>