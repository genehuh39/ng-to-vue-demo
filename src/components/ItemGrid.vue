<template>
    <div>
    <table class="item-grid table table-striped table-bordered table-hover table-responsive">
        <thead>
            <tr>
                <td colspan="6"><button type="button" class="btn btn-primary" @click="addNewFighter">add new fighter</button></td>
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
                <td><b-progress v-model="fighter.fighterQuotient" precision="1" max="10" show-progress animated></b-progress></td>
                <td><button-bar :fighter="fighter.id"></button-bar></td>
            </tr>
        </tbody>
    </table>
    <fighter-form></fighter-form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ButtonBar from './ButtonBar'
    import FighterForm from './FighterForm'

    export default {
        name: 'item-grid',
        components: {
            ButtonBar,
            FighterForm
        },
        methods: {
            addNewFighter() {
                this.$store.commit('CLEAR_FIGHTER')
                this.$root.$emit('show::modal', 'modal1')
            }
        },
        computed: {
            ...mapGetters(['convertedFighters'])
        }
    }
</script>
