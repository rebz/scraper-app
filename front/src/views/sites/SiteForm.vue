<template>
    <div>

        create site

        <form @submit.prevent>

            <input v-model="form.uri" />

            <input v-model="form.tags" />

            <input v-model="form.selectors" />

            <button @click="submitForm">
                submit
            </button>
            
        </form>

    </div>
</template>

<script>
    import { addSite, updateSite } from '@/services/SitesService'

    export default {
        prop: {
            site: {
                type: Object,
                required: false,
                default: undefined
            }
        },
        data: () => ({
            form: {
                uri: null,
                tags: null,
                selectors: null
            }
        }),
        methods: {
            initForm() {
                const { site } = this
                if (!site) return


                
            },
            submitForm() {
                console.info('submit site form')
                addSite(this.form)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>