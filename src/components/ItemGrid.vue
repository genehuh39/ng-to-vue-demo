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

        <tr v-for="fighter in fighters" :key="fighter.id">
            <td>{{fighter.firstName}}</td>
            <td>{{fighter.lastName}}</td>
            <td>{{fighter.weight}}</td>
            <td>{{fighter.description}}</td>
            <td>Rating</td>
            <td><button-bar :fighter="fighter.id"></button-bar></td>
        </tr>

        <!--
        <tr ng-repeat="fighter in $ctrl.data track by $index">
            <td class="col-md-1">{{fighter.firstName}}</td>
            <td class="col-md-1">{{fighter.lastName}}</td>
            <td class="col-md-2">{{fighter.weight}}</td>
            <td class="col-md-5">{{fighter.description}}</td>
            <td class="col-md-1">
                <uib-progressbar max="10" value="fighter.fighterQuotient" class="progress-striped" type="warning">
                    <span class="progress-label">{{fighter.fighterQuotient}}</span>

                </uib-progressbar>
            </td>
            <td class="col-md-2 record-control"><button-bar fighter="fighter.id"></button-bar></td>
        </tr>
        -->
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
        data() {
            return {
                formData: {}
            }
        },
        methods: {
            addNewFighter() {
                this.$store.commit('CLEAR_FIGHTER')
                this.$root.$emit('show::modal', 'modal1')
            }
        },
        computed: {
            ...mapGetters(['fighters'])
        }
    }
</script>
