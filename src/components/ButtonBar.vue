<template>
    <div class="btn-group">
        <button type="button" class="btn btn-sm btn-success" @click="editFighter()">edit</button>
        <button type="button" class="btn btn-sm btn-danger" @click="removeFighter()">delete</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'ButtonBar',
        props: ['fighter'],
        methods: {
            ...mapActions([
                'deleteFighter',
                'selectFighter'
            ]),
            editFighter() {
                this.selectFighter(this.fighter)
                this.$root.$emit('show::modal', 'modal1')
            },
            removeFighter() {
                this.deleteFighter(this.fighter)
            }
        }
    }
</script>
