<template>
    <div>
    <table class="item-grid table table-striped table-bordered table-hover table-responsive">
        <thead>
            <tr>
                <td colspan="6"><button id="add-fighter" type="button" class="btn btn-primary" @click="addNewFighter">add new fighter</button></td>
            </tr>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Weight Class</th>
                <th>Description</th>
                <th>Rating</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="fighter in convertedFighters" :key="fighter.id">
                <td>{{fighter.firstName}}</td>
                <td>{{fighter.lastName}}</td>
                <td>{{fighter.weight}}</td>
                <td>{{fighter.description}}</td>
                <td><b-progress v-model="fighter.fighterQuotient" :precision="1" :max="10" show-progress animated></b-progress></td>
                <td><button-bar :fighter="fighter.id"></button-bar></td>
            </tr>
        </tbody>
    </table>
    <b-modal id="modal1" title="Fighter Form" @ok="submit" ok-title="save" >
        <fighter-form></fighter-form>
    </b-modal>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ButtonBar from './ButtonBar.vue'
import FighterForm from './FighterForm.vue'

export default {
    name: 'ItemGrid',
    components: {
        ButtonBar,
        FighterForm
    },
    methods: {
        ...mapActions(['clearFighter']),
        addNewFighter() {
            this.clearFighter()
            this.$root.$emit('show::modal', 'modal1')
        }
    },
    computed: {
        ...mapGetters(['convertedFighters'])
    }
}
</script>
