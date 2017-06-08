<template>
    <b-modal id="modal1" title="Fighter Form" @ok="submit" ok-title="save" >
        <form @submit.stop.prevent="submit">
            <div class="form-group">
                <label>First Name</label>
                <b-form-input type="text" name="firstName" placeholder="First Name" v-model="formData.firstName"></b-form-input>
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <b-form-input type="text" name="lastName" placeholder="Last Name" v-model="formData.lastName"></b-form-input>
            </div>
            <div class="form-group">
                <label for="weight">Weight Class</label>
                <select name="weight" id="weight" v-model="formData.weight">
                    <option v-for="weight in weightClasses" :key="weight" :value="weight">{{ weight }}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Description</label>
                <b-form-input type="text" id="description"  placeholder="Profile" v-model="formData.description"></b-form-input>
            </div>
            <div class="form-group">
                <label>Ground Game (BJJ)</label>
                <star-rating
                    v-model="formData.groundGame"
                    :increment="1"
                    :max-rating="10"
                    :star-size="20">
                </star-rating>
            </div>
            <div class="form-group">
                <label>Boxing</label>
                <star-rating
                    v-model="formData.boxing"
                    :increment="1"
                    :max-rating="10"
                    :star-size="20">
                </star-rating>
            </div>
            <div class="form-group">
                <label>Range Striking (Kickboxing)</label>
                <star-rating
                    v-model="formData.rangeStriking"
                    :increment="1"
                    :max-rating="10"
                    :star-size="20">
                </star-rating>
            </div>
            <div class="form-group">
                <label>Wrestling</label>
                <star-rating
                    v-model="formData.wrestling"
                    :increment="1"
                    :max-rating="10"
                    :star-size="20">
                </star-rating>
            </div>
            <div class="form-group">
                <label>Clinch</label>
                <star-rating
                    v-model="formData.clinch"
                    :increment="1"
                    :max-rating="10"
                    :star-size="20">
            </star-rating>
            </div>
        </form>
    </b-modal>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import StarRating from 'vue-star-rating'

    export default {
        name: 'fighter-form',
        methods: {
            submit() {
                if (this.formData.id) {
                    this.updateFighter(this.formData)
                } else {
                    this.addFighter(this.formData)
                }
            },
            ...mapActions([
                'updateFighter',
                'addFighter'
            ])
        },
        components: {
            StarRating
        },
        computed: {
            ...mapGetters([
                'weightClasses',
                'selectedFighter'
            ]),
            formData() {
                return { ...this.selectedFighter }
            }
        }
    }
</script>
