<template>
    <div>

        <h1>
            create/edit site
        </h1>

        <form @submit.prevent>

            <div class="row">
                <div class="col-xs-12">
                    <label>uri</label><br>
                    <input v-model="form.uri" />
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <label>tags</label><br>
                    <input v-model="form.tags" />
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <label>selectors</label><br>
                    <input v-model="form.selectors" />
                </div>
            </div>

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