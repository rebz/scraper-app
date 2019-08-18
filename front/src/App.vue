<template>
    
    <div>
	
    	<nav class="MainNav">
            
            <router-link :to="{ name: 'dashboard' }">
                Dashboard
            </router-link>
            
            <router-link :to="{ name: 'sites' }">
                Sites
            </router-link>
            
            <router-link :to="{ name: 'settings' }">
                Settings
            </router-link>
        
        </nav>
		
        <router-view />
	
    </div>

</template>

<script>
	export default {
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
