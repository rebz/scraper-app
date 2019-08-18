<template>
    <div>

        <h1>
            list view
        </h1>

		<div v-if="sites">
			<p v-for="site in sites">
				<pre>
					<code>
						{{ site }}
					</code>
				</pre>
			</p>
		</div>

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

<style lang="scss" scoped>

</style>