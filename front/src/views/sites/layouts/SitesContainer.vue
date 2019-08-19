<template>
    
    <div>

        <nav class="SubNav">
            
            <router-link :to="{ name: 'sites' }" exact>
                Sites
            </router-link>

            <router-link :to="{ name: 'sites.scraped' }">
                Scraped
            </router-link>

            <router-link :to="{ name: 'sites.create' }">
                Create
            </router-link>

        </nav>

        <router-view />

    </div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>