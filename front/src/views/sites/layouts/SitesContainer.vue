<template>
    <div>

        <nav>
            <router-link :to="{ name: 'sites' }">
                list
            </router-link>
            <router-link :to="{ name: 'sites.create' }">
                create
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