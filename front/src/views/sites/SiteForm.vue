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

            <!-- <div class="row">
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
            </div> -->

            <button @click="submitForm">
                submit
            </button>
            
        </form>

    </div>
</template>

<script>
    import { addSite, updateSite } from '@/services/SiteService'
    import { mapModelToForm } from '@/helpers/form'
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
                // uri: null,
                // tags: null,
                // selectors: null,

                uri: "https://www.comics.org/issue/847243/",
                tags: [
                    "batman"
                ],
                selectors: {
                    series_name: "span#series_name a",
                    issue_number: "span.issue_number",
                    barcode: "dd#barcode",
                    issue_price: "dd#issue_price",
                    issue_pages: "dd#issue_pages",
                    indicia_frequency: "dd#indicia_frequency",
                    on_sale_date: "dd#on_sale_date",
                    rating: "dd#rating",
                    issue_indicia_publisher: "dd#issue_indicia_publisher a",
                    credits: "dl.credits"
                }
            }
        }),
        methods: {
            initForm() {
                const { site } = this
                if (!site) return
                const form = this.form
                this.form = mapModelToForm(form, site)
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